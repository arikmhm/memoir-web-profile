"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function PreviewLookupPage() {
  const router = useRouter();
  const [transactionId, setTransactionId] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const id = transactionId.trim();
    if (!id) return;
    router.push(`/preview/${id}`);
  }

  return (
    <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-6 py-12">
      <div className="w-full max-w-sm space-y-6 text-center">
        <div className="space-y-2">
          <h1 className="text-2xl font-semibold tracking-tight">Lihat Foto Kamu</h1>
          <p className="text-sm text-muted-foreground">
            Masukkan kode transaksi yang kamu terima setelah sesi foto.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            type="text"
            value={transactionId}
            onChange={(e) => setTransactionId(e.target.value)}
            placeholder="Kode transaksi"
            autoFocus
            className="w-full rounded-md border border-border bg-background px-4 py-2.5 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
          />
          <button
            type="submit"
            disabled={!transactionId.trim()}
            className="w-full rounded-md bg-foreground px-4 py-2.5 text-sm font-medium text-background transition-opacity disabled:opacity-40"
          >
            Lihat Foto
          </button>
        </form>
      </div>
    </div>
  );
}
