"use client";

import { motion } from "framer-motion";

const features = [
  {
    title: "3 metode pembayaran",
    description:
      "Cash, QRIS statis, atau QRIS dinamis via Xendit.",
  },
  {
    title: "Multi-kiosk management",
    description:
      "Satu dashboard untuk semua kiosk di berbagai lokasi.",
  },
  {
    title: "Visual template editor",
    description:
      "Desain template foto di browser — canvas editor, sync otomatis ke kiosk.",
  },
  {
    title: "Wallet & withdrawal",
    description:
      "Pendapatan masuk wallet otomatis. Tarik ke rekening kapan saja.",
  },
];

export function Features() {
  return (
    <section id="fitur" className="border-t border-border py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-sm uppercase tracking-widest text-muted-foreground"
        >
          Fitur
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-3 max-w-lg text-2xl font-semibold tracking-tight md:text-3xl"
        >
          Semua yang kamu butuhkan, tidak lebih.
        </motion.h2>

        <div className="mt-16 grid gap-px overflow-hidden rounded-xl border border-border bg-border md:grid-cols-2">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="bg-background p-8 md:p-10"
            >
              <h3 className="text-base font-semibold">{feature.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
