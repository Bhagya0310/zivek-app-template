"use client";

import { Mail } from "lucide-react";
import { motion } from "framer-motion";

export default function SubscribeSection() {
  return (
    <section className="bg-[#FFD400] py-14 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8">
        <motion.div
          className="text-center lg:text-left"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="uppercase text-sm font-medium mb-2 text-black">
            Get first updates
          </p>
          <h2 className="text-[28px] md:text-[32px] font-bold text-black leading-snug">
            Get the news in front line by <br />
            subscribe <span className="inline-block">📝</span> our latest updates
          </h2>
        </motion.div>
        <motion.form
          className="w-full max-w-xl flex items-center gap-3"
          onSubmit={(e) => e.preventDefault()}
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative w-full">
            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="email"
              required
              placeholder="Enter your e-mail..."
              className="w-full py-3 pl-10 pr-4 rounded-md text-sm border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>
          <button
            type="submit"
            className="bg-black text-white px-6 py-3 rounded-md text-sm font-semibold hover:opacity-90 transition"
          >
            SUBSCRIBE NOW
          </button>
        </motion.form>
      </div>
    </section>
  );
}
