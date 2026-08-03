'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPaperPlane } from 'react-icons/fa';

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setStatus('success');
        (e.target as HTMLFormElement).reset();
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full max-w-xl mx-auto rounded-2xl border-4 border-border bg-footer p-8 shadow-[8px_8px_0px_var(--color-border)]"
    >
      <h2 className="font-(family-name:--font-sour-gummy) text-3xl font-extrabold mb-6 text-text">
        Send me a message
      </h2>

      {status === 'success' ? (
        <div className="bg-success/20 border-2 border-success text-success p-4 rounded-xl font-bold text-center">
          Message sent! I'll get back to you soon.
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block font-bold mb-2 text-text">Name</label>
            <input 
              required
              type="text" 
              name="name" 
              id="name"
              placeholder="Your name or alias"
              className="w-full px-4 py-3 rounded-xl border-3 border-border bg-background text-text focus:outline-none focus:ring-4 focus:ring-button/20 transition-all"
            />
          </div>

          <div>
            <label htmlFor="contact" className="block font-bold mb-2 text-text">Discord Tag / Email</label>
            <input 
              required
              type="text" 
              name="contact" 
              id="contact"
              placeholder="How can I reach you?"
              className="w-full px-4 py-3 rounded-xl border-3 border-border bg-background text-text focus:outline-none focus:ring-4 focus:ring-button/20 transition-all"
            />
          </div>

          <div>
            <label htmlFor="message" className="block font-bold mb-2 text-text">Message</label>
            <textarea 
              required
              name="message" 
              id="message"
              rows={4}
              placeholder="What are we building?"
              className="w-full px-4 py-3 rounded-xl border-3 border-border bg-background text-text focus:outline-none focus:ring-4 focus:ring-button/20 transition-all resize-y"
            ></textarea>
          </div>

          {status === 'error' && (
            <p className="text-red-500 font-bold text-sm">Something went wrong. Please try again.</p>
          )}

          <motion.button 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            disabled={status === 'loading'}
            type="submit"
            className="w-full mt-4 font-(family-name:--font-sour-gummy) text-xl font-bold px-8 py-4 rounded-xl bg-button text-highlight hover:bg-button-hover border-4 border-border shadow-[4px_4px_0px_var(--color-border)] transition-all flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {status === 'loading' ? 'Sending...' : (
              <><FaPaperPlane /> Send Message</>
            )}
          </motion.button>
        </form>
      )}
    </motion.div>
  );
}