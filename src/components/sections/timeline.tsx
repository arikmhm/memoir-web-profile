"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Daftar & desain template",
    description:
      "Pilih subscription, desain template lewat visual canvas editor.",
  },
  {
    number: "02",
    title: "Pair kiosk",
    description:
      "Hubungkan device lewat 6-digit code. Desktop atau Android.",
  },
  {
    number: "03",
    title: "Foto dulu, bayar kemudian",
    description:
      "Pengunjung foto, lihat hasil, baru bayar — cash, QRIS, atau Xendit.",
  },
  {
    number: "04",
    title: "Pantau & tarik saldo",
    description:
      "Dashboard real-time. Saldo masuk wallet, tarik kapan saja.",
  },
];

export function Timeline() {
  return (
    <section id="cara-kerja" className="border-t border-border py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-sm uppercase tracking-widest text-muted-foreground"
        >
          Cara kerja
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-3 max-w-lg text-2xl font-semibold tracking-tight md:text-3xl"
        >
          Dari setup sampai cuan — empat langkah saja.
        </motion.h2>

        <div className="relative mt-16">
          {/* Vertical line */}
          <div className="absolute left-[19px] top-2 hidden h-[calc(100%-2rem)] w-px bg-border md:block" />

          <div className="grid gap-12 md:gap-16">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex gap-6 md:gap-10"
              >
                {/* Number dot */}
                <div className="relative flex-shrink-0">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background font-mono text-xs font-semibold">
                    {step.number}
                  </div>
                </div>

                {/* Content */}
                <div className="pt-1.5">
                  <h3 className="text-base font-semibold">{step.title}</h3>
                  <p className="mt-1.5 max-w-md text-sm leading-relaxed text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
