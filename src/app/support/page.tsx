'use client';

import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { motion } from "framer-motion";
import { FaHeart, FaCoffee, FaExternalLinkAlt } from "react-icons/fa";

export default function Support() {

  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden selection:bg-button selection:text-highlight">
      <Navbar />

      <main className="flex-1 flex flex-col items-center justify-center px-4 py-8 md:py-16 max-w-4xl mx-auto w-full space-y-12">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center space-y-4"
        >
          <div className="inline-flex items-center justify-center p-4 rounded-2xl bg-footer border-4 border-border shadow-[4px_4px_0px_var(--color-border)] mb-2">
            <FaHeart className="text-5xl text-button animate-pulse" />
          </div>

          <h1 className="font-(family-name:--font-sour-gummy) text-5xl md:text-6xl font-extrabold text-text">
            Support My Work
          </h1>

          <p className="text-text/80 text-lg md:text-xl font-medium max-w-xl mx-auto leading-relaxed">
            Everything I build from GD mods to web applications is self-funded and free to use. If you enjoy what I make, consider buying me a coffee!
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.25 }}
          className="w-full rounded-2xl border-4 border-border bg-background p-6 md:p-8 shadow-[8px_8px_0px_var(--color-border)] flex flex-col items-center space-y-6"
        >
          {/* Header Bar */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 w-full pb-4 border-b-4 border-border">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-button text-highlight rounded-xl border-3 border-border shadow-[2px_2px_0px_var(--color-border)]">
                <FaCoffee className="text-2xl" />
              </div>
              <div className="text-left">
                <h2 className="font-(family-name:--font-sour-gummy) text-2xl font-bold text-text">
                  Ko-fi Supporter
                </h2>
                <p className="text-text/70 text-sm font-medium">
                  Quick, simple, and helps keep servers running.
                </p>
              </div>
            </div>

            <a
              href="https://ko-fi.com/dulakgg"
              target="_blank"
              rel="noopener noreferrer"
              className="font-(family-name:--font-sour-gummy) font-bold text-lg px-6 py-3 rounded-xl bg-button text-highlight hover:bg-button-hover border-3 border-border shadow-[4px_4px_0px_var(--color-border)] transition-all flex items-center gap-2 whitespace-nowrap active:translate-x-0.5 active:translate-y-0.5"
            >
              Open on Ko-fi <FaExternalLinkAlt className="text-xs" />
            </a>
          </div>

          <div className="w-full rounded-xl border-3 border-border overflow-hidden bg-footer shadow-[4px_4px_0px_var(--color-border)] min-h-162.5">
            <iframe
              id="kofiframe"
              src="https://ko-fi.com/dulakgg/?hidefeed=true&widget=true&embed=true&preview=true"
              className="w-full h-162.5 border-none"
              title="Support Dulak on Ko-fi"
            />
          </div>
        </motion.div>

      </main>

      <Footer />
    </div>
  );
}