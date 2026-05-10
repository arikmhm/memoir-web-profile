"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export function Cta() {
  return (
    <section id="kontak" className="py-24 md:py-32">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-2xl font-semibold tracking-tight md:text-3xl lg:text-4xl"
        >
          Mulai bisnis photobooth-mu
          <br />
          <span className="text-muted-foreground">sekarang, tanpa ribet.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-4 text-sm text-muted-foreground md:text-base"
        >
          Satu booth sudah cukup untuk mulai. Kami urus semuanya sampai kamu
          siap jalan.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-4"
        >
          <Link
            href="https://wa.me/6285162894121"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-11 items-center rounded-lg px-6 text-sm font-medium text-primary-foreground transition-colors bg-[#D4845A] hover:bg-[#D4845A]/80"
          >
            Hubungi via WhatsApp
          </Link>
          <Link
            href="mailto:memoir.archiveproject@gmail.com"
            className="inline-flex h-11 items-center text-sm text-muted-foreground transition-colors hover:text-foreground font-semibold"
          >
            Email kami
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
