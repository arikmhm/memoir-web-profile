"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { NoiseOverlay } from "@/components/layout/noise-overlay";
import {
  Box,
  Smartphone,
  Printer,
  LayoutDashboard,
  Camera,
  CreditCard,
  Palette,
  Receipt,
  Settings,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { IntegrationTree } from "@/components/ui/integration-tree";

const highlights = [
  { label: "Booth Siap Pakai", icon: Box },
  { label: "Software Included", icon: Smartphone },
  { label: "Printer Thermal", icon: Printer },
  { label: "Dashboard Online", icon: LayoutDashboard },
];

const runnerFeatures: { title: string; description: string; icon: LucideIcon }[] = [
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

const dashboardFeatures: { title: string; description: string; icon: LucideIcon }[] = [
  {
    title: "Dashboard",
    description: "Pantau semua booth Anda dalam satu tampilan.",
    icon: LayoutDashboard,
  },
  {
    title: "Template Editor",
    description: "Desain layout foto sendiri, langsung dari browser.",
    icon: Palette,
  },
  {
    title: "Transaksi & Laporan",
    description: "Lihat pemasukan real-time dari setiap booth.",
    icon: Receipt,
  },
  {
    title: "Konfigurasi Booth",
    description: "Atur semuanya dari satu tempat.",
    icon: Settings,
  },
];

export function Product() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "start start"],
  });

  const skewX = useTransform(scrollYProgress, [0, 1], [-40, 0]);

  return (
    <section ref={sectionRef} className="py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-6">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center text-2xl font-semibold leading-snug tracking-tight md:mb-16 md:text-3xl lg:text-4xl"
        >
          <span className="italic">
            &ldquo;Semua kerumitan receipt photobooth,
          </span>
          <br />
          <motion.span
            className="inline-block text-[#D4845A]"
            style={{ skewX }}
          >
            kami sederhanakan.&rdquo;
          </motion.span>
        </motion.h2>

        {/* Stacked cards — no gap, no rounded */}
        <div className="overflow-hidden">
          {/* Card 1 — Product */}
          <div className="relative bg-[#D4845A] p-8 md:p-12 lg:p-16">
            <NoiseOverlay opacity={0.4} />

            <div className="relative z-10 flex flex-col items-center gap-10 md:flex-row md:gap-16">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6 }}
                className="relative aspect-3/4 w-full max-w-55 shrink-0 sm:max-w-65"
              >
                <Image
                  src="/images/galeri/product-removebg-preview.png"
                  alt="Receipt photobooth memoir"
                  fill
                  className="object-contain drop-shadow-2xl"
                />
              </motion.div>

              <div className="flex flex-1 flex-col items-start text-left">
                <motion.h3
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.5 }}
                  className="text-lg font-semibold tracking-tight text-white md:text-xl"
                >
                  memoir. Receipt Photobooth
                </motion.h3>

                <motion.p
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="mt-3 max-w-md text-justify text-sm leading-relaxed text-white/70"
                >
                  Satu paket lengkap berisi booth, printer, dan software yang
                  memungkinkan siapa saja memulai bisnis receipt photobooth tanpa
                  perlu keahlian teknis.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2"
                >
                  {highlights.map((item) => (
                    <div key={item.label} className="flex items-center gap-2.5">
                      <item.icon className="h-4 w-4 shrink-0 stroke-[1.5] text-white/50" />
                      <span className="text-sm font-medium text-white">
                        {item.label}
                      </span>
                    </div>
                  ))}
                </motion.div>
              </div>
            </div>
          </div>

          {/* Card 2 — Runner: numbered flow */}
          <div className="relative bg-stone-100 p-8 md:p-12 lg:p-14">
            <NoiseOverlay opacity={0.4} />

            <div className="relative z-10 flex flex-col gap-10 md:flex-row md:gap-14">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6 }}
                className="relative w-full shrink-0 self-center md:w-[45%]"
              >
                <Image
                  src="/images/runner.png"
                  alt="Runner app memoir photobooth"
                  width={1000}
                  height={600}
                  className="h-auto w-full object-contain"
                />
              </motion.div>

              <div className="flex-1">
                <div className="mb-10 max-w-md">
                  <p className="text-xs font-medium uppercase tracking-widest text-stone-400">
                    Aplikasi Booth
                  </p>
                  <h3 className="mt-3 text-2xl font-semibold leading-tight tracking-tight text-stone-900 md:text-3xl">
                    Pengalaman di Booth.
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-stone-500">
                    Aplikasi yang berjalan di setiap booth, melayani customer dari
                    foto hingga cetak tanpa perlu operator.
                  </p>
                </div>

                <div className="flex flex-col gap-0 divide-y divide-stone-200">
                  {runnerFeatures.map((item, i) => (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, x: -16 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-60px" }}
                      transition={{ duration: 0.4, delay: 0.1 + i * 0.06 }}
                      className="flex items-center gap-5 py-5"
                    >
                      <span className="shrink-0 font-mono text-2xl font-bold text-stone-300">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white shadow-sm">
                        <item.icon className="h-4 w-4 stroke-[1.5] text-[#D4845A]" />
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-stone-900">
                          {item.title}
                        </h4>
                        <p className="mt-0.5 text-xs leading-relaxed text-stone-500">
                          {item.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Card 3 — Dashboard: bento grid */}
          <div className="relative bg-stone-200 p-8 md:p-12 lg:p-14">
            <NoiseOverlay opacity={0.4} />

            <div className="relative z-10 mb-10 max-w-md">
              <p className="text-xs font-medium uppercase tracking-widest text-stone-400">
                Web Dashboard
              </p>
              <h3 className="mt-3 text-2xl font-semibold leading-tight tracking-tight text-stone-900 md:text-3xl">
                Kelola Semua dari Satu Tempat.
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-stone-500">
                Dashboard web untuk memantau, mengatur, dan mengembangkan bisnis
                photobooth Anda dari mana saja.
              </p>
            </div>

            <div className="relative z-10 grid grid-cols-1 gap-3 sm:grid-cols-3">
              {dashboardFeatures.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.4, delay: 0.1 + i * 0.06 }}
                  className={`bg-white p-5 shadow-sm ${
                    i === 0 ? "sm:col-span-2 sm:row-span-2 sm:flex sm:flex-col sm:justify-between sm:p-8" : ""
                  }`}
                >
                  <item.icon className={`stroke-[1.5] text-[#D4845A] ${i === 0 ? "h-7 w-7" : "h-5 w-5"}`} />
                  <div className={i === 0 ? "mt-auto pt-6" : "mt-3"}>
                    <h4 className={`font-semibold text-stone-900 ${i === 0 ? "text-base" : "text-sm"}`}>
                      {item.title}
                    </h4>
                    <p className={`leading-relaxed text-stone-500 ${i === 0 ? "mt-1.5 text-sm" : "mt-1 text-xs"}`}>
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>

        {/* Integrasi — standalone di bawah cards */}
        <div className="mt-16 md:mt-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="mb-8 text-center"
          >
            <p className="text-xs font-medium uppercase tracking-widest text-stone-400">
              Integrasi
            </p>
            <h3 className="mt-3 text-2xl font-semibold leading-tight tracking-tight text-stone-900 md:text-3xl">
              Terhubung dengan Ekosistem Anda.
            </h3>
            <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-stone-500">
              memoir. terintegrasi langsung dengan payment gateway, printer
              thermal, dan perangkat Anda.
            </p>
          </motion.div>

          <IntegrationTree />
        </div>
      </div>
    </section>
  );
}
