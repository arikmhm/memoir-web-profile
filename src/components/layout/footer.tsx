import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import { NoiseOverlay } from "@/components/layout/noise-overlay";

const navLinks = [
  { label: "Fitur", href: "#fitur" },
  { label: "Harga", href: "#harga" },
  { label: "Cara Kerja", href: "#cara-kerja" },
  { label: "FAQ", href: "#faq" },
];

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#D4845A] text-white">
      {/* Noise overlay khusus footer */}
      <NoiseOverlay />

      <div className="relative z-10 mx-auto max-w-6xl px-6 py-16 md:py-20">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          {/* Brand */}
          <div>
            <Link href="/" className="text-lg font-semibold tracking-tight">
              memoir.
            </Link>
            <p className="mt-2 max-w-xs text-sm text-white/50">
              Platform photobooth yang bantu kamu menghadirkan momen berkesan di setiap event.
            </p>

            {/* Social media */}
            <div className="mt-4 flex gap-3">
              <Link
                href="https://www.instagram.com/memoir.archive/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-white/20"
                aria-label="Instagram"
              >
                <InstagramIcon className="h-4 w-4" />
              </Link>
              <Link
                href="https://www.tiktok.com/@memoir.archiveproject"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-white/20"
                aria-label="TikTok"
              >
                <TikTokIcon className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap gap-x-8 gap-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-white/50 transition-colors hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Kontak */}
          <div className="flex flex-col gap-3">
            <p className="text-sm font-medium">Kontak</p>
            <Link
              href="mailto:memoir.archiveproject@gmail.com"
              className="inline-flex items-center gap-2 text-sm text-white/50 transition-colors hover:text-white"
            >
              <Mail className="h-4 w-4" />
              memoir.archiveproject@gmail.com
            </Link>
            <Link
              href="https://wa.me/6285162894121"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-white/50 transition-colors hover:text-white"
            >
              <Phone className="h-4 w-4" />
              085162894121
            </Link>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
          <p className="text-xs text-white/30">
            &copy; {new Date().getFullYear()} memoir. Semua hak dilindungi.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="text-xs text-white/30 transition-colors hover:text-white/60">
              Kebijakan Privasi
            </Link>
            <Link href="#" className="text-xs text-white/30 transition-colors hover:text-white/60">
              Syarat & Ketentuan
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
