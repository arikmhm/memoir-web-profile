import Link from "next/link";
import { ImageOff } from "lucide-react";

export default function PreviewNotFound() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center px-6 py-12 text-center">
      <div className="flex h-20 w-20 items-center justify-center rounded-full bg-muted">
        <ImageOff className="h-8 w-8 text-muted-foreground" />
      </div>
      <h2 className="mt-6 text-lg font-semibold">Foto tidak ditemukan</h2>
      <p className="mt-1 max-w-xs text-sm text-muted-foreground">
        Foto mungkin sudah dihapus atau link tidak valid.
      </p>
      <Link
        href="/"
        className="mt-6 inline-flex rounded-full bg-[#D4845A] px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#C47A52]"
      >
        Kembali ke Beranda
      </Link>
    </div>
  );
}
