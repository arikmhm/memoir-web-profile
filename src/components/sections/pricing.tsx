"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const plans = [
  {
    name: "Starter",
    price: "Rp 99rb",
    period: "/bulan",
    description: "Untuk yang baru memulai bisnis photobooth.",
    features: [
      "1 kiosk",
      "Visual template editor",
      "Pembayaran cash & QRIS statis",
      "Dashboard owner",
      "Wallet & withdrawal",
    ],
    cta: "Mulai Starter",
    highlighted: false,
  },
  {
    name: "Pro",
    price: "Rp 249rb",
    period: "/bulan",
    description: "Untuk bisnis yang mulai berkembang.",
    features: [
      "3 kiosk",
      "Semua fitur Starter",
      "QRIS dinamis (Xendit)",
      "Digital copy via QR",
      "Multi-kiosk management",
    ],
    cta: "Pilih Pro",
    highlighted: true,
  },
  {
    name: "Business",
    price: "Rp 599rb",
    period: "/bulan",
    description: "Untuk operasi skala besar.",
    features: [
      "10 kiosk",
      "Semua fitur Pro",
      "Priority support",
      "Cross-platform runner",
      "Custom branding",
    ],
    cta: "Pilih Business",
    highlighted: false,
  },
];

export function Pricing() {
  return (
    <section id="harga" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-sm uppercase tracking-widest text-muted-foreground"
        >
          Harga
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-3 max-w-lg text-2xl font-semibold tracking-tight md:text-3xl"
        >
          Pilih sesuai tahap bisnis kamu.
        </motion.h2>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`flex flex-col rounded-xl border p-6 md:p-8 ${
                plan.highlighted
                  ? "border-foreground bg-foreground text-background"
                  : "border-border"
              }`}
            >
              <p className="text-sm font-medium">{plan.name}</p>
              <div className="mt-3 flex items-baseline gap-1">
                <span className="text-3xl font-bold tracking-tight">{plan.price}</span>
                {plan.period && (
                  <span
                    className={`text-sm ${
                      plan.highlighted ? "text-background/60" : "text-muted-foreground"
                    }`}
                  >
                    {plan.period}
                  </span>
                )}
              </div>
              <p
                className={`mt-2 text-sm ${
                  plan.highlighted ? "text-background/60" : "text-muted-foreground"
                }`}
              >
                {plan.description}
              </p>

              <ul className="mt-6 flex flex-1 flex-col gap-2.5">
                {plan.features.map((f) => (
                  <li
                    key={f}
                    className={`text-sm ${
                      plan.highlighted ? "text-background/80" : "text-muted-foreground"
                    }`}
                  >
                    <span className="mr-2">&#8226;</span>
                    {f}
                  </li>
                ))}
              </ul>

              <Link
                href="#kontak"
                className={`mt-8 inline-flex h-11 items-center justify-center rounded-lg text-sm font-medium transition-colors ${
                  plan.highlighted
                    ? "bg-background text-foreground hover:bg-background/90"
                    : "border border-border hover:bg-muted"
                }`}
              >
                {plan.cta}
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
