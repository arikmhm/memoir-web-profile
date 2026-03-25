"use client";

import { motion } from "framer-motion";

const highlights = [
  {
    title: "Zero-coding setup",
    description:
      "Daftar, desain template, kiosk siap jalan.",
  },
  {
    title: "100% pendapatan milikmu",
    description:
      "Tanpa potongan per transaksi. Revenue kami dari subscription.",
  },
  {
    title: "Semi-offline capable",
    description:
      "Cash & QRIS statis tetap jalan tanpa internet.",
  },
];

export function Showcase() {
  return (
    <section className="border-t border-border py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-sm uppercase tracking-widest text-muted-foreground"
        >
          Yang kami hadirkan
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-3 max-w-xl text-2xl font-semibold tracking-tight md:text-3xl"
        >
          Lebih dari sekadar photobooth.
        </motion.h2>

        <div className="mt-16 grid gap-12 md:grid-cols-3">
          {highlights.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="mb-4 h-px w-8 bg-foreground" />
              <h3 className="text-base font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
