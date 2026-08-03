'use client';

import { FaGithub, FaYoutube, FaHeart, FaDiscord, FaPaperPlane } from "react-icons/fa";
import Link from "next/link";
import DiscordCopy from "@/components/DiscordCopy";

export default function Footer() {
  return (
    <footer className="bg-footer border-t-4 border-border mt-auto relative z-10">
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-10 flex flex-col md:flex-row items-center md:items-start justify-between gap-10">
        <div className="flex-1 text-center md:text-left space-y-4">
          <h2 className="font-(family-name:--font-sour-gummy) text-3xl md:text-4xl font-extrabold text-text">
            Let&apos;s Build Something Cool
          </h2>
          
          <p className="text-text/80 text-base md:text-lg font-medium max-w-md mx-auto md:mx-0 leading-relaxed">
            Have an idea for a website, mod, or tool? Reach out and I will help turn it into a real project. Just hire me lol.
          </p>
          
          <div className="flex justify-center md:justify-start pt-2">
            <Link 
              href="/contact"
              className="inline-flex items-center gap-2 font-(family-name:--font-sour-gummy) text-lg font-bold px-6 py-3 rounded-xl bg-button text-highlight hover:bg-button-hover border-3 border-border shadow-[4px_4px_0px_var(--color-border)] transition-all hover:-translate-y-0.5"
            >
              <FaPaperPlane /> Contact Me
            </Link>
          </div>
        </div>

        <div className="flex flex-col items-center md:items-stretch space-y-6 min-w-65 w-full md:w-auto">
          <div className="flex flex-col gap-3 w-full">
            <h3 className="font-(family-name:--font-sour-gummy) text-2xl font-bold text-text text-center md:text-left">
              Message me on Discord
            </h3>
            
            <DiscordCopy />
            
            <a 
              href="https://github.com/dulakgg" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center md:justify-start gap-3 bg-background border-4 border-border rounded-xl px-5 py-3 font-bold text-text hover:bg-button hover:text-highlight shadow-[4px_4px_0px_var(--color-border)] transition-all hover:-translate-y-1"
            >
              <FaGithub className="text-2xl" /> GitHub
            </a>
            
            <a 
              href="https://www.youtube.com/@Dulakggyy" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center md:justify-start gap-3 bg-background border-4 border-border rounded-xl px-5 py-3 font-bold text-text hover:bg-button hover:text-highlight shadow-[4px_4px_0px_var(--color-border)] transition-all hover:-translate-y-1"
            >
              <FaYoutube className="text-2xl" /> YouTube
            </a>
          </div>

          <div className="pt-4 border-t-3 border-border/20 w-full flex flex-col items-center md:items-start text-center md:text-left">
            <p className="text-text font-semibold text-sm mb-2 flex items-center gap-1.5">
              Copy my username or join the Discord server <FaHeart className="text-button" />
            </p>
            <a 
              href="https://discord.gg/CQFyRJDP5y" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 bg-background border-3 border-border rounded-xl px-4 py-2.5 font-bold text-text hover:bg-button hover:text-highlight shadow-[3px_3px_0px_var(--color-border)] transition-all hover:-translate-y-0.5 text-sm"
            >
              <FaDiscord className="text-lg" /> Join Community
            </a>
          </div>
        </div>

      </div>

      <div className="bg-background border-t-4 border-border py-4 text-center">
        <p className="text-text font-bold font-(family-name:--font-sour-gummy) text-base">
          © {new Date().getFullYear()} Dulakgg. All rights reserved.
        </p>
      </div>
    </footer>
  );
}