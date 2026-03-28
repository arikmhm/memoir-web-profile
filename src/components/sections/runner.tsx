"use client";

import { motion } from "framer-motion";
import { Camera, CreditCard, Printer, Smartphone } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { NoiseOverlay } from "@/components/layout/noise-overlay";

const features: { title: string; description: string; icon: LucideIcon }[] = [
  {
    title: "Foto Otomatis",
    description: "Customer tinggal pose, sistem menangkap momen secara otomatis.",
    icon: Camera,
  },
  {
    title: "Self Payment",
    description: "Pembayaran langsung di booth via QRIS atau cash.",
    icon: CreditCard,
  },
  {
    title: "Cetak Instan",
    description: "Foto tercetak di kertas thermal dalam hitungan detik.",
    icon: Printer,
  },
  {
    title: "Tampilan Interaktif",
    description: "Antarmuka yang intuitif, siapa saja bisa langsung pakai.",
    icon: Smartphone,
  },
];

export function Runner() {
  return (
    <section id="runner" className="py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl bg-stone-100 p-8 md:p-12 lg:p-14"
        >
          <NoiseOverlay opacity={0.4} />

          <div className="relative z-10 flex flex-col gap-10 md:flex-row md:items-start md:gap-14">
            {/* Left — text */}
            <div className="flex flex-col md:w-2/5 md:shrink-0">
              <p className="text-xs font-medium uppercase tracking-widest text-stone-400">
                Aplikasi Booth
              </p>
              <h2 className="mt-3 text-2xl font-semibold leading-tight tracking-tight text-stone-900 md:text-3xl">
                Pengalaman di Booth.
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-stone-500">
                Aplikasi yang berjalan di setiap booth, melayani customer dari
                foto hingga cetak tanpa perlu operator.
              </p>
            </div>

            {/* Right — feature cards */}
            <div className="grid flex-1 grid-cols-1 gap-3 sm:grid-cols-2">
              {features.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.4, delay: 0.1 + i * 0.06 }}
                  className="rounded-2xl bg-white p-5 shadow-sm"
                >
                  <item.icon className="h-5 w-5 stroke-[1.5] text-[#D4845A]" />
                  <h3 className="mt-3 text-sm font-semibold text-stone-900">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-xs leading-relaxed text-stone-500">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
