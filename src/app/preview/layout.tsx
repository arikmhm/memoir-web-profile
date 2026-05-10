import type { Metadata } from "next";
import Link from "next/link";
import { NoiseOverlay } from "@/components/layout/noise-overlay";

export const metadata: Metadata = {
  title: "memoir. | Preview",
};

export default function PreviewLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-1 flex-col">
      <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur-sm">
        <div className="mx-auto flex h-14 max-w-6xl items-center px-6">
          <Link href="/" className="text-lg font-semibold tracking-tight">
            memoir.
          </Link>
        </div>
      </header>

      <main className="relative flex flex-1 flex-col">
        <NoiseOverlay />
        {children}
      </main>

      <footer className="sticky bottom-0 z-50 border-t border-border bg-background/95 py-6 backdrop-blur-sm">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} memoir.
          </p>
        </div>
      </footer>
    </div>
  );
}
