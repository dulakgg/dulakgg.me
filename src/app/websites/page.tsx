'use client';

import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub, FaGlobe, FaLaptopCode } from "react-icons/fa";

type WebsiteProject = {
  name: string;
  url?: string;
  githubUrl: string;
  image: string | null;
  description: string;
  tag: string;
};

const websites: WebsiteProject[] = [
  {
    name: "Global Stats Viewer",
    url: "https://globalstatsviewer.com",
    githubUrl: "https://github.com/Global-Stats-Viewer",
    image: "/gsv.png",
    description: "An interactive stats viewer and global ranking system tracking accomplishments across all rated Geometry Dash levels.",
    tag: "Stats Platform"
  },
  {
    name: "Nine Circles Demon List",
    url: "https://ninecirclesdemonlist.com",
    githubUrl: "https://github.com/Nine-Circles-Demonlist",
    image: "/ncdl.png",
    description: "The go-to community ranking platform and record tracker for every single Nine Circles demon level.",
    tag: "Demon List"
  },
  {
    name: "The Shitty List",
    githubUrl: "https://github.com/TheShittyList",
    image: null,
    description: "Community ranking and record archival dedicated to the iconic 'Shitty' level series and layouts.",
    tag: "Demon List"
  },
  {
    name: "Top Towers Community",
    githubUrl: "https://github.com/Top-Towers-Community",
    image: null,
    description: "Community hub and ranking system for the hardest tower & platformer levels in Geometry Dash 2.2.",
    tag: "Platformer List"
  },
  {
    name: "Extreme Demon Index",
    githubUrl: "https://github.com/Extreme-Demon-Index",
    image: null,
    description: "A comprehensive index cataloging Extreme Demons, player records, and difficulty progression.",
    tag: "Demon Index"
  }
];

export default function WebsitesPage() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 }
    }
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: { 
      opacity: 1, 
      y: 0, 
      transition: { type: 'spring' as const, stiffness: 200, damping: 18 } 
    }
  };

  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden selection:bg-button selection:text-highlight">
      <Navbar />

      <main className="flex-1 flex flex-col items-center justify-start px-4 py-8 md:py-16 max-w-6xl mx-auto w-full space-y-16">
        
        <motion.div 
          initial="hidden"
          animate="show"
          variants={container}
          className="w-full flex flex-col items-center text-center space-y-8 pt-4"
        >
          <motion.div 
            variants={fadeUp}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border-3 border-border bg-background shadow-[3px_3px_0px_var(--color-border)] font-(family-name:--font-sour-gummy) text-lg font-bold"
          >
            <FaLaptopCode className="text-button text-2xl" />
            <span>Web Platforms</span>
          </motion.div>

          <motion.div variants={fadeUp} className="max-w-3xl space-y-4">
            <h1 className="text-text text-5xl md:text-7xl font-extrabold tracking-tight font-(family-name:--font-sour-gummy) drop-shadow-sm">
              Featured <span className="text-button underline decoration-wavy decoration-2">Websites</span>
            </h1>
            <p className="text-text/80 text-xl md:text-2xl font-semibold leading-relaxed max-w-2xl mx-auto">
              Community lists, stats tools, and platforms I actively help maintain.
            </p>
          </motion.div>
        </motion.div>

        <motion.div 
          initial="hidden"
          animate="show"
          variants={container}
          className="w-full grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {websites.map((site, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              className="rounded-2xl border-4 border-border bg-footer overflow-hidden shadow-[6px_6px_0px_var(--color-border)] flex flex-col justify-between"
            >
              <div>
                <div className="relative h-60 w-full bg-background border-b-4 border-border overflow-hidden flex items-center justify-center group">
                  {site.image ? (
                    <Image
                      src={site.image}
                      alt={`${site.name} preview`}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="flex flex-col items-center justify-center gap-3 p-6 text-center w-full h-full bg-linear-to-br from-footer to-background">
                      <div className="p-4 rounded-2xl bg-button text-highlight border-3 border-border shadow-[3px_3px_0px_var(--color-border)]">
                        <FaGlobe className="text-5xl" />
                      </div>
                      <span className="font-(family-name:--font-sour-gummy) text-2xl font-bold text-text">
                        {site.name}
                      </span>
                    </div>
                  )}

                  <span className="absolute top-4 left-4 font-(family-name:--font-sour-gummy) text-sm font-bold px-3 py-1.5 rounded-xl bg-background text-text border-3 border-border shadow-[3px_3px_0px_var(--color-border)] z-10">
                    {site.tag}
                  </span>
                </div>

                <div className="p-6 md:p-8 space-y-4">
                  <h2 className="font-(family-name:--font-sour-gummy) text-3xl md:text-4xl font-extrabold text-text">
                    {site.name}
                  </h2>
                  <p className="text-text/80 text-lg font-medium leading-relaxed">
                    {site.description}
                  </p>
                </div>
              </div>

              <div className="p-6 md:p-8 pt-0 flex flex-wrap items-center gap-4">
                {site.url && (
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <a
                      href={site.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-(family-name:--font-sour-gummy) font-bold text-lg px-6 py-3 rounded-2xl bg-button text-highlight hover:bg-button-hover border-4 border-border shadow-[4px_4px_0px_var(--color-border)] transition-colors flex items-center gap-2"
                    >
                      Visit Site <FaExternalLinkAlt className="text-sm" />
                    </a>
                  </motion.div>
                )}

                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <a
                    href={site.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-(family-name:--font-sour-gummy) font-bold text-lg px-6 py-3 rounded-2xl bg-background text-text hover:bg-footer border-4 border-border shadow-[4px_4px_0px_var(--color-border)] transition-colors flex items-center gap-2"
                  >
                    <FaGithub className="text-xl" /> GitHub
                  </a>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </main>

      <Footer />
    </div>
  );
}