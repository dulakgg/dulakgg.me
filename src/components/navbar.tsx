"use client";

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform, type Variants } from 'framer-motion';
import { IoMdClose } from 'react-icons/io';
import { IoMenu } from 'react-icons/io5';

export default function Navbar() {
  const [dropdown, setDropdown] = useState(false);

  const navLinks = [
    { name: 'Projects', href: '/projects' },
    { name: 'Websites', href: '/websites' },
    { name: 'Support Me', href: '/support' },
    { name: 'Contact Me', href: '/contact' },
  ];

  const mouseX = useMotionValue(0.5);
  const smoothMouseX = useSpring(mouseX, { stiffness: 120, damping: 15 });
  const rotateZ = useTransform(smoothMouseX, [0, 1], [-0.5, 0.5]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const relativeX = (e.clientX - rect.left) / rect.width;
    mouseX.set(relativeX);
  };

  const handleMouseLeave = () => {
    mouseX.set(0.5); 
  };

  
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.3 }
    }
  } as const satisfies Variants;

  const itemVariants = {
    hidden: { opacity: 0, y: -20, scale: 0.8 },
    show: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { type: "spring", stiffness: 300, damping: 20 }
    }
  } as const satisfies Variants;

  return (
    <div 
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative pt-16 z-50 flex justify-center w-full px-4 overflow-visible"
    >
      <motion.nav 
        initial={{ y: -100, rotateX: 90 }}
        animate={{ y: 0, rotateX: 0 }}
        style={{ rotateZ, transformOrigin: 'top center' }}
        transition={{ 
          y: { type: "spring", stiffness: 100, damping: 12 },
          rotateX: { duration: 0.8, ease: "easeOut" }
        }}
        className="relative w-full max-w-5xl flex items-center justify-between px-8 py-5 bg-background border-4 border-border rounded-2xl shadow-[6px_8px_0px_var(--color-border)] transform-gpu z-10"
      >
        <div className="absolute bottom-full left-8 md:left-24 lg:left-48 w-3 h-96 bg-border rounded-t-sm shadow-md pointer-events-none -z-10"></div>
        <div className="absolute bottom-full right-8 md:right-24 lg:right-48 w-3 h-96 bg-border rounded-t-sm shadow-md pointer-events-none -z-10"></div>

        {/* Logo */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, type: "spring" }}
          whileHover={{ scale: 1.08, rotate: -3 }} 
          whileTap={{ scale: 0.95 }}
        >
          <Link 
            href="/" 
            className="text-text text-5xl md:text-6xl font-bold font-(family-name:--font-custom-otf) drop-shadow-sm hover:text-button transition-colors block"
          >
            Dulakgg
          </Link>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="hidden lg:flex gap-8 items-center"
        >
          {navLinks.map((link) => (
            <motion.div key={link.name} variants={itemVariants}>
              <Link 
                href={link.href} 
                className="block font-(family-name:--font-sour-gummy) text-xl tracking-wide font-medium px-6 py-3 rounded-xl bg-button text-highlight hover:bg-button-hover border-3 border-transparent hover:border-border hover:shadow-[4px_4px_0px_var(--color-border)] transition-all hover:-translate-y-1"
              >
                {link.name}
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <motion.button 
          initial={{ opacity: 0, scale: 0 }} 
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setDropdown(!dropdown)}
          aria-label={dropdown ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={dropdown}
          aria-controls="mobile-menu"
          className="lg:hidden p-3 bg-button hover:bg-button-hover rounded-xl text-highlight border-3 border-border shadow-[3px_4px_0px_var(--color-border)] transition-colors"
        >
          {dropdown ? <IoMdClose size={32} aria-hidden="true" /> : <IoMenu size={32} aria-hidden="true" /> }
        </motion.button>

        <AnimatePresence>
          {dropdown && (
            <motion.div 
              id="mobile-menu"
              initial={{ opacity: 0, y: -20, rotateX: -15 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              exit={{ opacity: 0, y: -20, rotateX: -15 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="absolute top-[125%] right-0 w-72 bg-background border-4 border-border shadow-[8px_8px_0px_var(--color-border)] rounded-2xl overflow-hidden flex flex-col lg:hidden z-50 transform-gpu origin-top"
            >
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }} 
                >
                  <Link 
                    href={link.href} 
                    onClick={() => setDropdown(false)} 
                    className="font-(family-name:--font-sour-gummy) block px-8 py-5 text-text border-b-3 border-border/20 last:border-0 hover:bg-button hover:text-highlight transition-colors text-2xl font-semibold"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

      </motion.nav>
    </div>
  );
}