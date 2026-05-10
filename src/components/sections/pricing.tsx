"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const features = [
  "Booth fisik siap pakai",
  "Tablet included",
  "Printer thermal included",
  "Aplikasi booth (Runner)",
  "Template editor — custom sesuka kamu",
  "Self payment via QRIS & payment gateway",
  "Softfile digital ke HP customer",
  "Web dashboard & laporan transaksi",
  "Setup & service sampai siap jalan",
];

export function Pricing() {
  return (
    <section id="harga" className="py-24 md:py-32">
      <div className="mx-auto max-w-lg px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-3 text-2xl font-semibold tracking-tight md:text-3xl text-center"
        >
          Satu Paket Lengkap Siap Pakai!
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-10 rounded-xl border border-border p-8 md:p-10"
        >
          {/* Limited offer banner */}
          <div className="rounded-lg bg-[#D4845A] px-4 py-3 text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-white/70">
              Penawaran terbatas
            </p>
            <p className="mt-0.5 text-sm font-bold text-white">
              Harga spesial hanya untuk 4 pembeli pertama
            </p>
          </div>

          <p className="mt-6 text-sm font-medium text-muted-foreground">
            memoir. Receipt Photobooth
          </p>

          <div className="mt-2 flex items-baseline gap-3">
            <span className="text-5xl font-bold tracking-tight">Rp 5,5 jt</span>
            <span className="text-xl text-muted-foreground line-through">Rp 6,5 jt</span>
          </div>
          <p className="mt-1.5 text-sm text-muted-foreground">pembelian unit · hemat Rp 1 juta</p>

          <ul className="mt-8 flex flex-col gap-3">
            {features.map((f) => (
              <li
                key={f}
                className="flex items-start gap-2.5 text-sm text-muted-foreground"
              >
                <span className="mt-0.5 text-[#D4845A]">&#10003;</span>
                {f}
              </li>
            ))}
          </ul>

          <Link
            href="https://wa.me/6285162894121"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex h-11 w-full items-center justify-center rounded-full bg-[#D4845A] text-sm font-medium text-white transition-colors hover:bg-[#C47A52]"
          >
            Hubungi Kami
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
