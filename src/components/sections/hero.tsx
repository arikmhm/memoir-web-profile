"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { NoiseOverlay } from "@/components/layout/noise-overlay";

export function Hero() {
  return (
    <section className="flex h-screen flex-col overflow-hidden bg-stone-100">
      <NoiseOverlay opacity={0.7} />

      <div className="relative z-10 flex flex-1 flex-col items-center px-5 pt-24 sm:px-8 md:pt-28 lg:pt-32">
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.08 }}
          className="max-w-2xl text-center text-4xl font-bold leading-[1.1] tracking-tight text-stone-900 sm:text-5xl md:text-6xl lg:text-5xl"
        >
          Receipt Photobooth,
          <br />
          <span className="text-[#D4845A]">siap pakai.</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.18 }}
          className="mt-5 max-w-md text-center text-sm leading-relaxed text-stone-500 sm:text-base md:mt-6 md:max-w-lg md:text-lg"
        >
          Paket lengkap untuk mulai bisnis receipt photobooth.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8"
        >
          <Link
            href="#harga"
            className="inline-flex h-11 items-center rounded-full bg-[#D4845A] px-7 text-sm font-medium text-white transition-colors hover:bg-[#C47A52]"
          >
            Hubungi Kami
          </Link>
        </motion.div>

        {/* Hero image — fills remaining space, clipped at bottom */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="relative mt-12 min-h-0 w-full max-w-md flex-1 sm:mt-16 sm:max-w-sm md:max-w-md"
        >
          <div className="relative h-full overflow-hidden rounded-t-2xl sm:rounded-t-3xl">
            <Image
              src="/images/hero-image.png"
              alt="Booth receipt photobooth memoir"
              fill
              priority
              sizes="(max-width: 640px) 320px, (max-width: 768px) 384px, 448px"
              className="object-cover object-top"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
