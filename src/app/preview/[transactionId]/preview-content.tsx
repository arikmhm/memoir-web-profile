"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Download,
  Loader2,
  Camera,
  ImageOff,
  Share2,
  Check,
  Clock,
} from "lucide-react";

type SessionData = {
  status: "ready" | "processing";
  downloadUrl?: string;
  createdAt?: string;
};

const POLL_INTERVAL = 3_000;
const MAX_POLL_DURATION = 120_000;
const EXPIRY_MS = 7 * 24 * 60 * 60 * 1000;

function formatCountdown(ms: number): string {
  if (ms <= 0) return "sudah kedaluwarsa";
  const days = Math.floor(ms / (1000 * 60 * 60 * 24));
  const hours = Math.floor((ms % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((ms % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((ms % (1000 * 60)) / 1000);
  if (days > 0) return `${days} hari ${hours} jam ${minutes} menit`;
  if (hours > 0) return `${hours} jam ${minutes} menit ${seconds} detik`;
  return `${minutes} menit ${seconds} detik`;
}

function proxyUrl(url: string) {
  return `/api/preview-image?url=${encodeURIComponent(url)}`;
}

export default function PreviewContent({
  initialData,
  transactionId,
}: {
  initialData: SessionData;
  transactionId: string;
}) {
  const [data, setData] = useState(initialData);
  const [downloading, setDownloading] = useState(false);
  const [timedOut, setTimedOut] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [copied, setCopied] = useState(false);
  const [remaining, setRemaining] = useState<number | null>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  // Countdown to expiry (7 days from createdAt)
  useEffect(() => {
    if (!data.createdAt) return;
    const expiresAt = new Date(data.createdAt).getTime() + EXPIRY_MS;
    setRemaining(expiresAt - Date.now());
    const id = setInterval(() => setRemaining(expiresAt - Date.now()), 1000);
    return () => clearInterval(id);
  }, [data.createdAt]);

  // Handle browser-cached images that load before hydration
  useEffect(() => {
    const img = imgRef.current;
    if (!img) return;
    if (img.complete) {
      if (img.naturalHeight > 0) {
        setImageLoaded(true);
      } else {
        setImageError(true);
      }
    }
  }, []);

  // Poll when session is still processing
  useEffect(() => {
    if (data.status !== "processing") return;

    const startTime = Date.now();
    const interval = setInterval(async () => {
      if (Date.now() - startTime > MAX_POLL_DURATION) {
        clearInterval(interval);
        setTimedOut(true);
        return;
      }

      try {
        const res = await fetch(
          `/api/v1/public/sessions/${transactionId}`,
        );
        if (!res.ok) return;
        const json = await res.json();
        if (json.data.status === "ready") {
          setData(json.data);
        }
      } catch {
        // Will retry on next interval
      }
    }, POLL_INTERVAL);

    return () => clearInterval(interval);
  }, [data.status, transactionId]);

  const handleDownload = useCallback(async () => {
    if (!data.downloadUrl || downloading) return;
    setDownloading(true);
    try {
      const res = await fetch(proxyUrl(data.downloadUrl));
      const blob = await res.blob();
      const ext = blob.type.includes("png")
        ? "png"
        : blob.type.includes("webp")
          ? "webp"
          : "jpg";
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `memoir-${transactionId.slice(0, 8)}.${ext}`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    } catch {
      window.open(proxyUrl(data.downloadUrl), "_blank");
    } finally {
      setDownloading(false);
    }
  }, [data.downloadUrl, downloading, transactionId]);

  const handleShare = useCallback(async () => {
    const url = window.location.href;
    if (navigator.share) {
      try {
        await navigator.share({
          title: "memoir.",
          text: "Lihat foto photobooth kamu!",
          url,
        });
        return;
      } catch {
        // User cancelled or API not supported, fall through to clipboard
      }
    }
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard also unavailable
    }
  }, []);

  // ── Processing ──────────────────────────────────────────────────────────────

  if (data.status === "processing" && !timedOut) {
    return (
      <div className="flex flex-col items-center gap-6 text-center">
        <div className="relative flex h-20 w-20 items-center justify-center">
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-[#D4845A]/30"
            animate={{ scale: [1, 1.3, 1], opacity: [0.6, 0, 0.6] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
          <Camera className="h-8 w-8 text-[#D4845A]" />
        </div>
        <div>
          <h2 className="text-lg font-semibold">Foto sedang diproses...</h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Biasanya selesai dalam beberapa detik.
          </p>
        </div>
      </div>
    );
  }

  // ── Timeout ─────────────────────────────────────────────────────────────────

  if (timedOut) {
    return (
      <div className="flex flex-col items-center gap-6 text-center">
        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-muted">
          <Camera className="h-8 w-8 text-muted-foreground" />
        </div>
        <div>
          <h2 className="text-lg font-semibold">Foto belum tersedia</h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Coba refresh halaman beberapa saat lagi.
          </p>
        </div>
        <button
          type="button"
          onClick={() => window.location.reload()}
          className="rounded-full bg-[#D4845A] px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#C47A52]"
        >
          Refresh
        </button>
      </div>
    );
  }

  // ── Ready ───────────────────────────────────────────────────────────────────

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="flex w-full max-w-sm flex-col items-center gap-6"
    >
      {/* Photo */}
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="relative overflow-hidden rounded-2xl shadow-2xl"
      >
        {!imageLoaded && !imageError && (
          <div className="flex h-80 w-56 items-center justify-center bg-muted">
            <Loader2 className="h-6 w-6 animate-spin text-muted-foreground" />
          </div>
        )}
        {imageError && (
          <div className="flex h-80 w-56 flex-col items-center justify-center gap-2 bg-muted">
            <ImageOff className="h-8 w-8 text-muted-foreground" />
            <p className="text-xs text-muted-foreground">
              Gagal memuat gambar
            </p>
          </div>
        )}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          ref={imgRef}
          src={data.downloadUrl ? proxyUrl(data.downloadUrl) : undefined}
          alt="Foto photobooth"
          onLoad={() => setImageLoaded(true)}
          onError={() => setImageError(true)}
          className={`max-h-[70vh] w-auto max-w-full ${
            !imageLoaded || imageError ? "hidden" : ""
          }`}
        />
      </motion.div>

      {/* Actions */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.2 }}
        className="flex w-full flex-col items-center gap-3"
      >
        {/* Buttons */}
        <div className="flex w-full flex-col gap-3">
          <button
            type="button"
            onClick={handleDownload}
            disabled={downloading}
            className="flex w-full items-center justify-center gap-2 rounded-full bg-[#D4845A] px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-[#C47A52] disabled:opacity-60"
          >
            {downloading ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              <Download className="h-4 w-4" />
            )}
            {downloading ? "Mengunduh..." : "Download Foto"}
          </button>

          <button
            type="button"
            onClick={handleShare}
            className="flex w-full items-center justify-center gap-2 rounded-full border border-[#D4845A] px-5 py-3 text-sm font-medium text-[#D4845A] transition-colors hover:bg-[#D4845A]/10"
          >
            <AnimatePresence mode="wait" initial={false}>
              {copied ? (
                <motion.span
                  key="check"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.15 }}
                  className="flex items-center gap-2"
                >
                  <Check className="h-4 w-4" />
                  Tersalin!
                </motion.span>
              ) : (
                <motion.span
                  key="share"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.15 }}
                  className="flex items-center gap-2"
                >
                  <Share2 className="h-4 w-4" />
                  Bagikan
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>

        {/* Expiry countdown */}
        {remaining !== null && (
          <div className="flex items-center gap-1.5 text-xs text-[#D4845A]/60">
            <Clock className="h-3 w-3 shrink-0" />
            <span>Tersisa {formatCountdown(remaining)}</span>
          </div>
        )}
      </motion.div>
    </motion.div>
  );
}
