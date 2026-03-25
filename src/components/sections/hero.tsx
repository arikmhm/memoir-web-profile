"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative h-dvh min-h-150 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/header-placeholder.webp"
          alt="Sebuah photobooth klasik di sudut jalan"
          fill
          priority
          className="object-cover"
        />
      </div>

      {/* Dark overlay gradient */}
      <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/30 to-transparent" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col justify-end px-6 pb-20 md:pb-28">
        {/* Heading — storytelling, bukan jualan */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl text-3xl font-bold leading-[1.15] tracking-tight text-white md:text-5xl lg:text-6xl"
        >
          Platform photobooth receipt,
          <br />
          <span className="text-white/60">siap pakai.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mt-4 max-w-md text-sm text-white/50 md:text-base"
        >
          Infrastruktur lengkap untuk bisnis photobooth receipt — dari template
          editor hingga kiosk runner.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8 flex flex-wrap items-center gap-5"
        >
          <Link
            href="#harga"
            className="inline-flex h-11 items-center rounded-lg bg-white px-6 text-sm font-medium text-black transition-colors hover:bg-white/90"
          >
            Lihat Paket Langganan
          </Link>
          <Link
            href="#cara-kerja"
            className="inline-flex items-center gap-2 text-sm text-white/60 transition-colors hover:text-white"
          >
            Cara kerjanya
            <span aria-hidden="true">&darr;</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
