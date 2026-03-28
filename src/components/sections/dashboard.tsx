"use client";

import { motion } from "framer-motion";
import { LayoutDashboard, Palette, Receipt, Settings } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const features: { title: string; description: string; icon: LucideIcon }[] = [
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

export function Dashboard() {
  return (
    <section id="dashboard" className="py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl bg-stone-100 p-8 md:p-12 lg:p-14"
        >
          <div className="flex flex-col gap-10 md:flex-row md:items-start md:gap-14">
            {/* Left — text */}
            <div className="flex flex-col md:w-2/5 md:shrink-0">
              <p className="text-xs font-medium uppercase tracking-widest text-stone-400">
                Web Dashboard
              </p>
              <h2 className="mt-3 text-2xl font-semibold leading-tight tracking-tight text-stone-900 md:text-3xl">
                Kelola Semua dari Satu Tempat.
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-stone-500">
                Dashboard web untuk memantau, mengatur, dan mengembangkan bisnis
                photobooth Anda dari mana saja.
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
