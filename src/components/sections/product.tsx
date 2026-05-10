"use client";

import Image from "next/image";
import { motion } from "framer-motion";
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
  Download,
  Tablet,
  Wrench,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { IntegrationTree } from "@/components/ui/integration-tree";

const highlights = [
  { label: "Booth Siap Pakai", icon: Box },
  { label: "Tablet Included", icon: Tablet },
  { label: "Printer Thermal", icon: Printer },
  { label: "Software Included", icon: Smartphone },
  { label: "Dashboard Online", icon: LayoutDashboard },
  { label: "Setup & Service", icon: Wrench },
];

const runnerFeatures: {
  title: string;
  description: string;
  icon: LucideIcon;
}[] = [
  {
    title: "Tampilan Custom",
    description:
      "Sesuaikan tampilan booth dengan brand atau tema event Anda.",
    icon: Palette,
  },
  {
    title: "Self Payment",
    description:
      "Terima pembayaran langsung via QRIS, didukung payment gateway terintegrasi.",
    icon: CreditCard,
  },
  {
    title: "Mudah Digunakan",
    description:
      "Antarmuka sederhana dan intuitif — siapapun bisa langsung pakai tanpa arahan.",
    icon: Smartphone,
  },
  {
    title: "Terhubung ke Dashboard",
    description:
      "Setiap transaksi tercatat otomatis dan bisa dipantau real-time dari dashboard.",
    icon: LayoutDashboard,
  },
  {
    title: "Softfile Digital",
    description:
      "Customer menerima file foto digital langsung ke HP setelah sesi selesai.",
    icon: Download,
  },
];

const dashboardFeatures: {
  title: string;
  description: string;
  icon: LucideIcon;
}[] = [
  {
    title: "Template Editor",
    description:
      "Buat template layout foto sebebas mungkin langsung dari browser — tidak perlu skill desain, flow-nya mudah diikuti.",
    icon: Palette,
  },
  {
    title: "Dashboard",
    description: "Lihat ringkasan data dan laporan performa semua booth dalam satu tampilan.",
    icon: LayoutDashboard,
  },
  {
    title: "Kiosk",
    description: "Setup dan konfigurasi setiap booth langsung dari dashboard.",
    icon: Settings,
  },
  {
    title: "Transaksi",
    description: "Pantau setiap transaksi yang terjadi di booth secara real-time.",
    icon: Receipt,
  },
  {
    title: "Payment Configuration",
    description: "Hubungkan booth dengan payment gateway dalam beberapa langkah.",
    icon: CreditCard,
  },
];

export function Product() {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl ">
        {/* Heading */}
        <h2 className="mb-12 text-center text-2xl font-semibold leading-snug tracking-tight md:mb-16 md:text-3xl lg:text-4xl">
          <span className="italic">
            &ldquo;Semua kerumitan receipt photobooth,
          </span>
          <br />
          <span className="text-[#D4845A]">kami sederhanakan.&rdquo;</span>
        </h2>

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
                className="relative w-full shrink-0 self-center md:w-[45%]"
              >
                <Image
                  src="/images/galeri/product-removebg-preview.png"
                  alt="Receipt photobooth memoir"
                  width={600}
                  height={800}
                  className="h-auto w-full object-contain drop-shadow-2xl"
                />
              </motion.div>

              <div className="flex flex-1 flex-col items-start text-left">
                <motion.h3
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.5 }}
                  className="text-2xl font-semibold leading-tight tracking-tight text-white md:text-3xl"
                >
                  memoir. Receipt Photobooth.
                </motion.h3>

                <motion.p
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="mt-4 max-w-md text-sm leading-relaxed text-white/70"
                >
                  Satu paket lengkap berisi booth, printer, dan software yang
                  memungkinkan siapa saja memulai bisnis receipt photobooth
                  tanpa perlu keahlian teknis.
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
          <div className="border-t border-border bg-background p-8 md:p-12 lg:p-14">
            <div className="flex flex-col gap-10 md:flex-row md:gap-14">
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
                  <h3 className="text-2xl font-semibold leading-tight tracking-tight text-foreground md:text-3xl">
                    Aplikasi Booth.
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    Aplikasi yang menjalankan booth sehari-hari, melayani
                    customer secara mandiri dari awal hingga akhir sesi.
                  </p>
                </div>

                <div className="flex flex-col gap-0 divide-y divide-border">
                  {runnerFeatures.map((item, i) => (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, x: -16 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-60px" }}
                      transition={{ duration: 0.4, delay: 0.1 + i * 0.06 }}
                      className="flex items-center gap-4 py-4"
                    >
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-muted shadow-sm">
                        <item.icon className="h-4 w-4 stroke-[1.5] text-[#D4845A]" />
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-foreground">
                          {item.title}
                        </h4>
                        <p className="mt-0.5 text-xs leading-relaxed text-muted-foreground">
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
          <div className="border-t border-border bg-background p-8 md:p-12 lg:p-14">
            <div className="mb-10 max-w-md">
              <h3 className="text-2xl font-semibold leading-tight tracking-tight text-foreground md:text-3xl">
                Web Dashboard.
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                Dashboard web untuk memantau, mengatur, dan mengembangkan bisnis
                photobooth Anda dari mana saja.
              </p>
            </div>

            <div className="mb-10 overflow-hidden bg-muted">
              <Image
                src="/images/product-memoir.png"
                alt="Tampilan web dashboard memoir"
                width={1600}
                height={900}
                className="h-auto w-full object-cover"
              />
            </div>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
              {dashboardFeatures.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.4, delay: 0.1 + i * 0.06 }}
                  className={`bg-muted p-5 ${i === 0 ? "sm:col-span-2 sm:p-8" : ""}`}
                >
                  <item.icon
                    className={`stroke-[1.5] text-[#D4845A] ${i === 0 ? "h-7 w-7" : "h-5 w-5"}`}
                  />
                  <div className={i === 0 ? "mt-4 pt-2" : "mt-3"}>
                    <h4
                      className={`font-semibold text-foreground ${i === 0 ? "text-base" : "text-sm"}`}
                    >
                      {item.title}
                    </h4>
                    <p
                      className={`leading-relaxed text-muted-foreground ${i === 0 ? "mt-1.5 text-sm" : "mt-1 text-xs"}`}
                    >
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
          <div className="mb-8 text-center">
            <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
              Integrasi
            </p>
            <h3 className="mt-3 text-2xl font-semibold leading-tight tracking-tight text-foreground md:text-3xl">
              Terhubung dengan Ekosistem Anda.
            </h3>
            <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
              memoir. terintegrasi langsung dengan payment gateway, printer
              thermal, dan perangkat Anda.
            </p>
          </div>

          <IntegrationTree />
        </div>
      </div>
    </section>
  );
}
