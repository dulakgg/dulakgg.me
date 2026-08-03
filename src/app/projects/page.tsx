'use client';

import { useState } from "react";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import ModTile, { ModTileProps } from "@/components/modTIle";
import { motion, AnimatePresence } from "framer-motion";
import { FaSearch, FaTimes } from "react-icons/fa";

type CategoryFilter = 'All' | 'Mods' | 'Tools' | 'Fun';

const projectsData: (ModTileProps & { id: string })[] = [
  {
    id: "hell-integration",
    category: "Mods",
    icon: "https://github.com/dulakgg/HELL-integration/blob/main/logo.png?raw=true",
    title: "HELL Integration",
    desc: "Hardest Easy List Integration mod for Geometry Dash.",
    alt: "HELL Icon",
    linkGitHub: "https://github.com/dulakgg/HELL-integration",
    unreleased: true,
    unfinished: true,
    gdVersion: "2.2081"
  },
  {
    id: "list-counter",
    category: "Mods",
    icon: "https://github.com/dulakgg/List-Counter/blob/main/logo.png?raw=true",
    title: "List Counter",
    desc: "Counts in how many demon/challenge lists a level appears in.",
    alt: "List Counter Icon",
    linkGitHub: "https://github.com/dulakgg/List-Counter",
    gdVersion: "2.2081",
    linkGeode: "https://geode-sdk.org/mods/dulak.list_counter",
    wIP: true,
    unfinished: true
  },
  {
    id: "wraith-helper",
    category: "Mods",
    icon: "https://github.com/dulakgg/Wraith-codes/blob/main/logo.png?raw=true",
    title: "Wraith Helper",
    desc: "In-game Wraith codes tracker and helper tool.",
    alt: "Wraith Helper Icon",
    linkGitHub: "https://github.com/dulakgg/Wraith-codes",
    gdVersion: "2.2081",
    linkGeode: "https://geode-sdk.org/mods/dulak.wraith-help"
  },
  {
    id: "lock-in",
    category: "Mods",
    icon: "https://github.com/dulakgg/Lock-In/blob/main/logo.png?raw=true",
    title: "Lock In",
    desc: "Prevents accidental exits during intense gameplay runs.",
    alt: "Lock In Icon",
    linkGitHub: "https://github.com/dulakgg/Lock-In",
    gdVersion: "2.2081",
    linkGeode: "https://geode-sdk.org/mods/dulak.lock_in"
  },
  {
    id: "active-choice-limiter",
    category: "Mods",
    icon: "https://github.com/dulakgg/Active-Choice-Limiter/blob/main/logo.png?raw=true",
    title: "Active Choice Limiter",
    desc: "Forces all level selections to open a specified Level ID.",
    alt: "Active Choice Limiter Icon",
    linkGitHub: "https://github.com/dulakgg/Active-Choice-Limiter",
    gdVersion: "2.2081",
    linkGeode: "https://geode-sdk.org/mods/dulak.active_choice_limiter"
  },
  {
    id: "denabler",
    category: "Mods",
    icon: "https://github.com/dulakgg/Denabler/blob/main/logo.png?raw=true",
    title: "Denabler",
    desc: "Bulk enable or disable all installed Geode mods with one click.",
    alt: "Denabler Icon",
    linkGitHub: "https://github.com/dulakgg/Denabler",
    gdVersion: "2.2081",
    linkGeode: "https://geode-sdk.org/mods/dulak.denabler",
    superseded: true,
    linkGeode2: "https://geode-sdk.org/mods/bluetoadmaker.modprofiles"
  },
  {
    id: "auto-be-gone-fix",
    category: "Mods",
    icon: "https://github.com/dulakgg/Auto-Be-Gone-Fix/blob/main/logo.png?raw=true",
    title: "Auto Be Gone Fix",
    desc: "Filters out auto levels when searching through easy difficulty levels.",
    alt: "Auto Be Gone Fix Icon",
    linkGitHub: "https://github.com/dulakgg/Auto-Be-Gone-Fix",
    gdVersion: "2.2081",
    linkGeode: "https://geode-sdk.org/mods/dulak.auto_be_gone_fix"
  },
  {
    id: "who-added-this",
    category: "Mods",
    icon: "https://github.com/dulakgg/Who-Added-This/raw/main/logo.png",
    title: "Who Added This",
    desc: "Shift+click any button inside the UI to inspect which mod added it.",
    alt: "Who Added This Icon",
    linkGitHub: "https://github.com/dulakgg/Who-Added-This",
    gdVersion: "2.2081",
    linkGeode: "https://geode-sdk.org/mods/dulak.whoaddedthis"
  }
];

export default function Projects() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>("All");

  const categories: CategoryFilter[] = ["All", "Mods", "Tools", "Fun"];

  const filteredProjects = projectsData.filter((project) => {
    const matchesSearch = 
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.desc.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory = 
      selectedCategory === "All" || project.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden selection:bg-button selection:text-highlight">
      <Navbar />

      <main className="flex-1 max-w-6xl w-full mx-auto px-4 py-8 md:py-16">
        <div className="text-center space-y-4 mb-10">
          <h1 className="font-(family-name:--font-sour-gummy) text-5xl md:text-6xl font-extrabold text-text">
            My Projects
          </h1>
          <p className="text-text/80 text-lg md:text-xl font-medium max-w-2xl mx-auto">
            A collection of Geode mods, developer tools, and custom creations I built.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-10">
          
          <div className="relative w-full md:w-80">
            <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-text/50 text-lg" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search..."
              className="w-full pl-11 pr-10 py-3 rounded-2xl border-4 border-border bg-footer text-text placeholder:text-text/50 font-semibold focus:outline-none focus:ring-4 focus:ring-button/20 shadow-[4px_4px_0px_var(--color-border)] transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-1.5 rounded-lg text-text/60 hover:text-text"
              >
                <FaTimes />
              </button>
            )}
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2 w-full md:w-auto">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`font-(family-name:--font-sour-gummy) text-lg font-bold px-5 py-2.5 rounded-xl border-3 border-border shadow-[3px_3px_0px_var(--color-border)] transition-all active:translate-x-0.5 active:translate-y-0.5 ${
                    isActive 
                      ? 'bg-button text-highlight' 
                      : 'bg-background text-text hover:bg-footer'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        <motion.ul layout className="flex flex-wrap gap-6 justify-start p-0">
          <AnimatePresence>
            {filteredProjects.length > 0 ? (
              filteredProjects.map((project) => (
                <ModTile key={project.id} {...project} />
              ))
            ) : (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="w-full text-center py-16 rounded-2xl border-4 border-dashed border-border bg-footer/50"
              >
                <p className="font-(family-name:--font-sour-gummy) text-2xl font-bold text-text mb-2">
                  No projects found!
                </p>
                <p className="text-text/70">
                  Try tweaking your search or clearing the category filter.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.ul>
      </main>

      <Footer />
    </div>
  );
}