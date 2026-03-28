import Link from "next/link";
import { NoiseOverlay } from "@/components/layout/noise-overlay";

const links = [
  { label: "Fitur", href: "#fitur" },
  { label: "Harga", href: "#harga" },
  { label: "Cara Kerja", href: "#cara-kerja" },
  { label: "FAQ", href: "#faq" },
];

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
          </div>

          {/* Links */}
          <nav className="flex flex-wrap gap-x-8 gap-y-3">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-white/50 transition-colors hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </nav>
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
