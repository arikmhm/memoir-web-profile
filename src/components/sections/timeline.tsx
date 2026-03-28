"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Pesan Paket",
    description:
      "Hubungi kami dan pesan paket booth Anda.",
  },
  {
    number: "02",
    title: "Setup Booth",
    description:
      "Paket sampai, tinggal taruh di lokasi yang Anda inginkan.",
  },
  {
    number: "03",
    title: "Pairing & Konfigurasi",
    description:
      "Hubungkan device dengan akun Anda, atur sesuai kebutuhan — semua lewat dashboard.",
  },
  {
    number: "04",
    title: "Siap Beroperasi",
    description:
      "Booth Anda sudah live. Mulai terima customer.",
  },
];

function ScrollLine({ className, left }: { className?: string; left?: string }) {
  const lineRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: lineRef,
    offset: ["start 0.8", "end 0.2"],
  });

  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div
      ref={lineRef}
      className={`absolute top-2 h-[calc(100%+8rem)] w-px bg-border ${className ?? ""}`}
      style={left ? { left } : undefined}
    >
      <motion.div
        className="h-full w-full origin-top bg-[#D4845A]"
        style={{ scaleY }}
      />
    </div>
  );
}

export function Timeline() {
  return (
    <section id="cara-kerja" className="overflow-visible py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center text-sm uppercase tracking-widest text-muted-foreground"
        >
          Cara kerja
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-3 text-center text-2xl font-semibold tracking-tight md:text-3xl"
        >
          Bagaimana Cara Memulai?
        </motion.h2>

        {/* Mobile layout */}
        <div className="relative mt-16 md:hidden">
          <ScrollLine left="19px" />

          <div className="grid gap-12">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex gap-6"
              >
                <div className="relative z-10 shrink-0">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background font-mono text-xs font-semibold">
                    {step.number}
                  </div>
                </div>
                <div className="rounded-xl border border-border bg-muted/50 px-5 py-4">
                  <h3 className="text-base font-semibold">{step.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Desktop layout — zigzag with centered timeline */}
        <div className="relative mt-16 hidden md:block">
          <ScrollLine className="left-1/2 -translate-x-1/2" />

          <div className="grid gap-16">
            {steps.map((step, i) => {
              const isLeft = i % 2 === 0;
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="relative flex items-center"
                >
                  {/* Left content */}
                  <div className="flex w-1/2 justify-end pr-10">
                    {isLeft && (
                      <div className="max-w-sm rounded-xl border border-border bg-muted/50 px-5 py-4 text-right">
                        <h3 className="text-base font-semibold">{step.title}</h3>
                        <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                          {step.description}
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Center dot */}
                  <div className="absolute left-1/2 z-10 -translate-x-1/2">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background font-mono text-xs font-semibold">
                      {step.number}
                    </div>
                  </div>

                  {/* Right content */}
                  <div className="flex w-1/2 justify-start pl-10">
                    {!isLeft && (
                      <div className="max-w-sm rounded-xl border border-border bg-muted/50 px-5 py-4">
                        <h3 className="text-base font-semibold">{step.title}</h3>
                        <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                          {step.description}
                        </p>
                      </div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
