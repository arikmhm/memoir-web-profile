"use client";

import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { Download, Loader2, Camera, ImageOff } from "lucide-react";

type SessionData = {
  status: "ready" | "processing";
  downloadUrl?: string;
};

const POLL_INTERVAL = 3_000;
const MAX_POLL_DURATION = 120_000;

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
      const res = await fetch(data.downloadUrl);
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
      window.open(data.downloadUrl, "_blank");
    } finally {
      setDownloading(false);
    }
  }, [data.downloadUrl, downloading, transactionId]);

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
      className="flex flex-col items-center gap-6"
    >
      {/* Photo */}
      <div className="relative overflow-hidden rounded-xl shadow-lg">
        {!imageLoaded && !imageError && (
          <div className="flex h-80 w-56 items-center justify-center rounded-xl bg-muted">
            <Loader2 className="h-6 w-6 animate-spin text-muted-foreground" />
          </div>
        )}
        {imageError && (
          <div className="flex h-80 w-56 flex-col items-center justify-center gap-2 rounded-xl bg-muted">
            <ImageOff className="h-8 w-8 text-muted-foreground" />
            <p className="text-xs text-muted-foreground">
              Gagal memuat gambar
            </p>
          </div>
        )}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={data.downloadUrl}
          alt="Foto photobooth"
          onLoad={() => setImageLoaded(true)}
          onError={() => setImageError(true)}
          className={`max-h-[70vh] w-auto max-w-full rounded-xl ${
            !imageLoaded || imageError ? "hidden" : ""
          }`}
        />
      </div>

      {/* Download */}
      <button
        type="button"
        onClick={handleDownload}
        disabled={downloading}
        className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#D4845A] px-7 py-3 text-sm font-medium text-white transition-colors hover:bg-[#C47A52] disabled:opacity-60 sm:w-auto"
      >
        {downloading ? (
          <Loader2 className="h-4 w-4 animate-spin" />
        ) : (
          <Download className="h-4 w-4" />
        )}
        {downloading ? "Mengunduh..." : "Download Foto"}
      </button>
    </motion.div>
  );
}
