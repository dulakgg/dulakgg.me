'use client';

import ContactForm from "@/components/ContactForm";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { motion } from "framer-motion";
import { FaComments } from "react-icons/fa";

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden selection:bg-button selection:text-highlight">
      <Navbar />
      
      <main className="flex-1 flex flex-col items-center justify-center px-4 py-8 md:py-16 max-w-4xl mx-auto w-full space-y-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border-3 border-border bg-background shadow-[3px_3px_0px_var(--color-border)] font-(family-name:--font-sour-gummy) text-lg font-bold">
            <FaComments className="text-button text-xl" />
            <span>Let&apos;s Build Something Cool</span>
          </div>

          <h1 className="font-(family-name:--font-sour-gummy) text-5xl md:text-6xl font-extrabold text-text">
            Get in Touch
          </h1>

          <p className="text-text/80 text-lg md:text-xl font-medium max-w-xl mx-auto leading-relaxed">
            Need a custom GD mod, a website, or anything? Fill out the form below or drop me a direct message on Discord.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="w-full"
        >
          <ContactForm />
        </motion.div>

      </main>

      <Footer />
    </div>
  );
}