"use client";

import { motion } from "framer-motion";

export function About() {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-16 md:grid-cols-2 md:items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm uppercase tracking-widest text-muted-foreground">
              Tentang memoir.
            </p>
            <h2 className="mt-3 text-2xl font-semibold leading-snug tracking-tight md:text-3xl">
              Kami percaya setiap momen
              <br />
              <span className="text-muted-foreground">pantas untuk dikenang.</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-4"
          >
            <p className="text-sm leading-relaxed text-muted-foreground">
              Sistem kasir, template, printer, pembayaran — operator
              photobooth harus bangun semuanya sendiri. memoir. menyediakan
              itu semua dalam satu platform, supaya kamu bisa langsung jalan.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
