"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "Perangkat apa yang didukung?",
    answer:
      "Desktop (Electron) dan Android (Flutter). Sambungkan kamera + printer, pair ke akun, selesai.",
  },
  {
    question: "Metode pembayaran apa saja?",
    answer:
      "Cash, QRIS statis (konfirmasi manual), dan QRIS dinamis via Xendit (otomatis). Pengunjung foto dulu, bayar kemudian.",
  },
  {
    question: "Bisa offline?",
    answer:
      "Cash dan QRIS statis tetap jalan tanpa internet setelah startup. QRIS dinamis butuh koneksi.",
  },
  {
    question: "Ada potongan per transaksi?",
    answer:
      "Tidak. Pendapatan booth 100% masuk wallet kamu. Revenue kami dari subscription.",
  },
  {
    question: "Cara tambah kiosk?",
    answer:
      "Generate 6-digit code dari dashboard, masukkan di kiosk runner. Batas kiosk sesuai paket.",
  },
  {
    question: "Ada kontrak?",
    answer:
      "Tidak. Bayar bulanan atau tahunan, upgrade kapan saja.",
  },
];

function FaqItem({
  question,
  answer,
  index,
}: {
  question: string;
  answer: string;
  index: number;
}) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      className="border-b border-border"
    >
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between py-5 text-left"
      >
        <span className="text-sm font-medium pr-4">{question}</span>
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.2 }}
          className="flex-shrink-0 text-lg text-muted-foreground"
        >
          +
        </motion.span>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-sm leading-relaxed text-muted-foreground">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function Faq() {
  return (
    <section id="faq" className="border-t border-border py-24 md:py-32">
      <div className="mx-auto max-w-3xl px-6">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-sm uppercase tracking-widest text-muted-foreground"
        >
          FAQ
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-3 text-2xl font-semibold tracking-tight md:text-3xl"
        >
          Yang sering ditanyakan.
        </motion.h2>

        <div className="mt-12">
          {faqs.map((faq, i) => (
            <FaqItem
              key={faq.question}
              question={faq.question}
              answer={faq.answer}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
