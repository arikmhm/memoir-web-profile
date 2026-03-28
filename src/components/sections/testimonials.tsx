"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    quote:
      "Dulu kami harus atur semuanya manual — dari antrian tamu sampai cetak foto. Sekarang tinggal buka dashboard, semuanya jalan sendiri.",
    name: "Rina Saputri",
    role: "Pemilik booth, Jakarta",
  },
  {
    quote:
      "Yang bikin saya suka, tamu event bisa langsung bayar QRIS dan foto tanpa perlu saya bantu satu-satu. Saya bisa fokus ke hal lain.",
    name: "Dimas Prasetyo",
    role: "Event organizer, Surabaya",
  },
  {
    quote:
      "Klien saya selalu tanya pakai platform apa. Hasilnya profesional, dan mereka suka bisa langsung dapat fotonya di WhatsApp.",
    name: "Ayu Lestari",
    role: "Wedding planner, Bandung",
  },
];

export function Testimonials() {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-sm uppercase tracking-widest text-muted-foreground"
        >
          Cerita mereka
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-3 max-w-lg text-2xl font-semibold tracking-tight md:text-3xl"
        >
          Dari yang sudah merasakannya.
        </motion.h2>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {testimonials.map((item, i) => (
            <motion.blockquote
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col justify-between rounded-xl border border-border p-6 md:p-8"
            >
              <p className="text-sm leading-relaxed text-muted-foreground">
                &ldquo;{item.quote}&rdquo;
              </p>
              <footer className="mt-6">
                <p className="text-sm font-semibold">{item.name}</p>
                <p className="text-xs text-muted-foreground">{item.role}</p>
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
