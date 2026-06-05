"use client";

import { motion } from "framer-motion";

const CTASection = function () {
  return (
    <section
      className="relative overflow-hidden py-32 bg-cover bg-center bg-no-repeat bg-black"
      style={{ backgroundImage: "url('/cta-bg.png')" }}
    >
      {/* Dark Overlay (ইমেজটি যাতে খুব বেশি উজ্জ্বল না লাগে) */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl text-center px-4">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-5xl md:text-7xl font-semibold tracking-tight text-white"
        >
          Your next role is
          <br />
          already looking for you
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          viewport={{ once: true }}
          className="mt-6 text-lg text-white/50"
        >
          Build a profile in three minutes. The matches start arriving tomorrow
          morning.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          viewport={{ once: true }}
          className="mt-10 flex flex-wrap justify-center gap-4"
        >
          <button className="rounded-xl bg-white cursor-pointer px-8 py-3 text-sm font-medium text-black transition-all hover:scale-105">
            Create a free account
          </button>

          <button className="rounded-xl border cursor-pointer border-white/15 bg-white/5 px-8 py-3 text-sm font-medium text-white backdrop-blur-md transition-all hover:bg-white/10">
            View pricing
          </button>
        </motion.div>
      </div>
    </section>
  );
};
export default CTASection;
