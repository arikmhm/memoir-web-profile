"use client";

import { motion } from "framer-motion";
import {
  Paintbrush,
  LayoutTemplate,
  ChartNoAxesCombined,
  CreditCard,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { NoiseOverlay } from "@/components/layout/noise-overlay";

const advantages: { title: string; description: string; icon: LucideIcon }[] = [
  {
    title: "Customizable",
    description: "Sesuaikan booth dengan gaya dan brand Anda sendiri.",
    icon: Paintbrush,
  },
  {
    title: "Custom Template",
    description:
      "Desain layout foto langsung dari dashboard tanpa perlu software tambahan.",
    icon: LayoutTemplate,
  },
  {
    title: "Laporan Transaksi",
    description: "Pantau semua pemasukan dari setiap booth dalam satu tempat.",
    icon: ChartNoAxesCombined,
  },
  {
    title: "Self Payment",
    description:
      "Customer bayar langsung di booth via QRIS atau cash, tanpa perlu Anda standby.",
    icon: CreditCard,
  },
];

const zigzagSvg = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpolygon points='6,0 12,8 0,8' fill='%23D4845A'/%3E%3C/svg%3E")`;

export function Advantages() {
  return (
    <section id="fitur" className="relative">
      {/* Top zigzag edge */}
      <div
        className="h-2 w-full bg-background"
        style={{
          backgroundImage: zigzagSvg,
          backgroundSize: "12px 8px",
          backgroundRepeat: "repeat-x",
          backgroundPosition: "center bottom",
        }}
      />

      <div className="relative bg-[#D4845A] py-24 md:py-32">
        <NoiseOverlay opacity={0.4} />

        <div className="relative z-10 mx-auto max-w-5xl px-6">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-xs font-medium uppercase tracking-widest text-white/50"
        >
          Keunggulan
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-3 max-w-md text-2xl font-semibold leading-tight tracking-tight text-white md:text-3xl"
        >
          Kenapa memoir.?
        </motion.h2>

        <div className="mt-14 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {advantages.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="flex flex-col bg-white/15 p-6 backdrop-blur-sm"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/15">
                <item.icon className="h-5 w-5 stroke-[1.5] text-white" />
              </div>
              <h3 className="mt-5 text-sm font-semibold text-white">
                {item.title}
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-white/60">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
      </div>

      {/* Bottom zigzag edge */}
      <div
        className="h-2 w-full bg-background"
        style={{
          backgroundImage: zigzagSvg,
          backgroundSize: "12px 8px",
          backgroundRepeat: "repeat-x",
          backgroundPosition: "center top",
          transform: "scaleY(-1)",
        }}
      />
    </section>
  );
}
