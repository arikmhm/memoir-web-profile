"use client";

import { motion } from "framer-motion";

export function Story() {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-sm uppercase tracking-widest text-muted-foreground"
        >
          Kenapa memoir?
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-4 text-2xl font-semibold leading-relaxed tracking-tight md:text-3xl lg:text-4xl"
        >
          Membangun bisnis photobooth{" "}
          <span className="text-muted-foreground">
            seharusnya tidak serumit membangun sistemnya.
          </span>
        </motion.h2>
      </div>
    </section>
  );
}
