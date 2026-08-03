'use client';

import Link from 'next/link';
import Image from 'next/image';
import Footer from '@/components/footer';
import Navbar from '@/components/navbar';
import ContactForm from '@/components/ContactForm';
import { motion } from 'framer-motion';
import { FaPaperPlane, FaCode, FaLaptopCode, FaRocket, FaExternalLinkAlt } from 'react-icons/fa';

export default function Home() {
  const techStack = [
    "TypeScript",
    "React",
    "Next.js",
    "Tailwind CSS",
    "Framer Motion",
    "Motion",
    "Vercel",
    "Analytics",
    "Speed Insights",
    "Node.js",
    "JavaScript",
    "JSX",
    "TSX",
    "HTML5",
    "CSS3",
    "PostCSS",
    "ESLint",
    "React Compiler",
    "pnpm",
    "Git",
    "GitHub",
    "Python",
    "C++",
    "C#",
    "SVG",
    "JSON",
    "REST APIs",
    "Geometry Dash Mods",
    "Web Development",
    "Game Dev",
    "API & Automation",
    "Responsive Design",
    "Accessibility",
    "Animations"
  ];

  const infiniteTape = [...techStack, ...techStack, ...techStack];

  const featuredProjects = [
    {
      title: "HELL Integration",
      category: "GD Mod",
      description: "Hardest Easy List Integration mod for Geometry Dash that tracks your progress on the hardest easy levels.",
      link: "/projects"
    },
    {
      title: "Wraith Helper",
      category: "GD Tool",
      description: "In-game Wraith codes tracker and helper tool for managing your codes efficiently.",
      link: "/projects"
    },
    {
      title: "Lock In",
      category: "GD Mod",
      description: "Prevents accidental exits during intense gameplay runs so you can focus on the level.",
      link: "/projects"
    }
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: { 
      opacity: 1, 
      y: 0, 
      transition: { type: 'spring' as const, stiffness: 200, damping: 18 } 
    }
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 }
    }
  };

  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden selection:bg-button selection:text-highlight">
      <Navbar />

      <main className="flex-1 flex flex-col w-full overflow-x-hidden">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-center px-4 py-8 md:py-16 space-y-20">
          <motion.div 
            initial="hidden"
            animate="show"
            variants={container}
            className="w-full flex flex-col items-center text-center space-y-8 pt-4"
          >
            <motion.div variants={fadeUp} className="max-w-3xl space-y-4">
              <h1 className="text-text text-5xl md:text-7xl font-extrabold tracking-tight font-(family-name:--font-sour-gummy) drop-shadow-sm">
                I&apos;m <span className="text-button underline decoration-wavy decoration-2">Dulak</span>
              </h1>
              <p className="text-text text-xl md:text-2xl font-semibold leading-relaxed">
                Web developer and GD modder.
              </p>
              <p className="text-text/80 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
                I build websites, Geometry Dash mods, and small games that feel polished and useful. Take a look at the work below.
              </p>
            </motion.div>

            <motion.div 
              variants={fadeUp}
              className="flex flex-wrap items-center justify-center gap-4 pt-2"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link 
                  href="/projects"
                  className="font-(family-name:--font-sour-gummy) text-xl md:text-2xl font-bold px-8 py-4 rounded-2xl bg-button text-highlight hover:bg-button-hover border-4 border-border shadow-[5px_5px_0px_var(--color-border)] transition-all flex items-center gap-3"
                >
                  <FaRocket className="text-lg" /> See My Projects
                </Link>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link 
                  href="/contact"
                  className="font-(family-name:--font-sour-gummy) text-xl md:text-2xl font-bold px-8 py-4 rounded-2xl bg-background text-text hover:bg-footer border-4 border-border shadow-[5px_5px_0px_var(--color-border)] transition-all flex items-center gap-3"
                >
                  <FaPaperPlane className="text-lg" /> Start a Project
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full max-w-5xl"
          >
            <div className="rounded-2xl border-4 border-border bg-footer p-6 md:p-8 shadow-[6px_6px_0px_var(--color-border)]">
              <h2 className="font-(family-name:--font-sour-gummy) text-2xl md:text-3xl font-extrabold text-text mb-4 text-center">
                My GitHub Activity
              </h2>
              <p className="text-text/80 text-center font-medium mb-6">
                A quick look at what I have been building lately.
              </p>
              <div className="w-full overflow-x-auto rounded-xl border-3 border-border bg-background p-2">
                <Image 
                  src="https://github-readme-activity-graph.vercel.app/graph?username=dulakgg&bg_color=transparent&color=DC8236&line=DC8236&point=FFFFFF&area=true&area_color=DC8236&hide_border=true&width=1000&height=300" 
                  alt="GitHub Contribution Graph"
                  width={1000}
                  height={300}
                  unoptimized
                  className="w-full h-auto"
                />
              </div>
              <div className="text-center mt-4">
                <a 
                  href="https://github.com/dulakgg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-(family-name:--font-sour-gummy) font-bold text-button hover:underline text-lg"
                >
                  <FaCode /> View Full Profile
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.section 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="w-full overflow-hidden bg-footer border-y-4 border-border py-6 shadow-[0_4px_0px_var(--color-border)] self-stretch"
        >
          <div className="w-full overflow-hidden">
            <motion.div
              animate={{ x: ['0%', '-33.333%'] }}
              transition={{ repeat: Infinity, duration: 32, ease: 'linear' }}
              className="flex w-max items-center gap-6 pr-6 whitespace-nowrap"
            >
              {infiniteTape.map((item, idx) => (
                <div 
                  key={idx}
                  className="inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-background border-3 border-border shadow-[3px_3px_0px_var(--color-border)] text-text font-(family-name:--font-sour-gummy) text-xl font-bold"
                >
                  {item}
                </div>
              ))}
            </motion.div>
          </div>
        </motion.section>

        <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-center px-4 py-8 md:py-16 space-y-20">
          <motion.div 
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            variants={container}
            className="w-full grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            <motion.div 
              variants={fadeUp}
              whileHover={{ y: -6 }}
              className="rounded-2xl border-4 border-border bg-footer p-6 shadow-[6px_6px_0px_var(--color-border)] flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-button text-highlight border-3 border-border flex items-center justify-center text-2xl mb-4 shadow-[2px_2px_0px_var(--color-border)]">
                  <FaLaptopCode />
                </div>
                <h3 className="font-(family-name:--font-sour-gummy) text-2xl font-bold mb-2 text-text">Websites</h3>
                <p className="text-text/80 leading-relaxed font-medium">
                  Custom sites and web apps built from scratch. Fast, responsive, and shaped around what you need.
                </p>
              </div>
            </motion.div>

            <motion.div 
              variants={fadeUp}
              whileHover={{ y: -6 }}
              className="rounded-2xl border-4 border-border bg-footer p-6 shadow-[6px_6px_0px_var(--color-border)] flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-button text-highlight border-3 border-border flex items-center justify-center text-2xl mb-4 shadow-[2px_2px_0px_var(--color-border)]">
                  <FaCode />
                </div>
                <h3 className="font-(family-name:--font-sour-gummy) text-2xl font-bold mb-2 text-text">GD Tools & Mods</h3>
                <p className="text-text/80 leading-relaxed font-medium">
                  Scripts, mods, and tracking tools made for the Geometry Dash community.
                </p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full"
          >
            <div className="text-center max-w-3xl mx-auto space-y-4 mb-8">
              <h2 className="font-(family-name:--font-sour-gummy) text-3xl md:text-4xl font-extrabold text-text">
                Featured Website
              </h2>
              <p className="text-text/80 text-lg font-medium">
                One of the community platforms I help build and maintain.
              </p>
            </div>
            <motion.div 
              whileHover={{ y: -6 }}
              className="rounded-2xl border-4 border-border bg-background overflow-hidden shadow-[6px_6px_0px_var(--color-border)]"
            >
              <div className="p-6 md:p-8 space-y-4">
                <span className="inline-block px-3 py-1 rounded-lg bg-footer border-2 border-border text-xs font-bold text-button">
                  Stats Platform
                </span>
                <h3 className="font-(family-name:--font-sour-gummy) text-2xl md:text-3xl font-bold text-text">
                  Global Stats Viewer
                </h3>
                <p className="text-text/80 text-base md:text-lg font-medium leading-relaxed">
                  An interactive stats viewer and global ranking system for rated Geometry Dash levels.
                </p>
                <div className="flex flex-wrap gap-3 pt-2">
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <a
                      href="https://globalstatsviewer.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-(family-name:--font-sour-gummy) font-bold text-lg px-6 py-3 rounded-2xl bg-button text-highlight hover:bg-button-hover border-4 border-border shadow-[4px_4px_0px_var(--color-border)] transition-colors inline-flex items-center gap-2"
                    >
                      Visit Site <FaExternalLinkAlt className="text-sm" />
                    </a>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <a
                      href="https://github.com/Global-Stats-Viewer"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-(family-name:--font-sour-gummy) font-bold text-lg px-6 py-3 rounded-2xl bg-background text-text hover:bg-footer border-4 border-border shadow-[4px_4px_0px_var(--color-border)] transition-colors inline-flex items-center gap-2"
                    >
                      <FaCode className="text-xl" /> GitHub
                    </a>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <section className="w-full space-y-6">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div>
                <h2 className="font-(family-name:--font-sour-gummy) text-3xl md:text-4xl font-extrabold text-text">
                  Featured Projects
                </h2>
                <p className="text-text/80 text-lg font-medium mt-1">
                  A quick look at some things I have built recently.
                </p>
              </div>
              <Link 
                href="/projects" 
                className="font-(family-name:--font-sour-gummy) font-bold text-button hover:underline flex items-center gap-2 self-start md:self-auto text-lg"
              >
                See all projects <FaExternalLinkAlt className="text-sm" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {featuredProjects.map((project, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -6 }}
                  className="rounded-2xl border-4 border-border bg-background p-6 shadow-[6px_6px_0px_var(--color-border)] flex flex-col justify-between"
                >
                  <div>
                    <span className="inline-block px-3 py-1 rounded-lg bg-footer border-2 border-border text-xs font-bold text-button mb-3">
                      {project.category}
                    </span>
                    <h3 className="font-(family-name:--font-sour-gummy) text-2xl font-bold mb-2 text-text">
                      {project.title}
                    </h3>
                    <p className="text-text/80 text-sm md:text-base font-medium mb-6">
                      {project.description}
                    </p>
                  </div>
                  <Link 
                    href={project.link}
                    className="font-(family-name:--font-sour-gummy) font-bold text-text hover:text-button inline-flex items-center gap-2 transition-colors"
                  >
                    Learn more &rarr;
                  </Link>
                </motion.div>
              ))}
            </div>
          </section>

          <section className="w-full space-y-6 pt-6">
            <div className="text-center max-w-xl mx-auto space-y-2">
              <h2 className="font-(family-name:--font-sour-gummy) text-3xl md:text-4xl font-extrabold text-text">
                Want to build something together?
              </h2>
              <p className="text-text/80 text-lg font-medium">
                Send a message below or reach out on Discord if you want to talk about a project.
              </p>
            </div>
            <ContactForm />
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
