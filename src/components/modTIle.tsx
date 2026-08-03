'use client';

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

export type ModTileProps = {
  icon: string;
  alt: string;
  title: string;
  desc: string;
  category?: 'Mods' | 'Tools' | 'Games';
  linkGitHub: string;
  linkGeode?: string;
  linkGeode2?: string;
  gdVersion: string;
  unfinished?: boolean;
  unreleased?: boolean;
  superseded?: boolean;
  wIP?: boolean;
};

export default function ModTile({ 
  icon, 
  alt, 
  title, 
  desc, 
  category,
  linkGitHub, 
  linkGeode, 
  linkGeode2, 
  unfinished, 
  unreleased, 
  gdVersion,
  wIP,
  superseded,
}: ModTileProps) {
  return (
    <motion.li 
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.2 }}
      whileHover={{ y: -6 }}
      className="list-none w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] rounded-2xl border-4 border-border bg-footer p-6 shadow-[6px_6px_0px_var(--color-border)] flex flex-col justify-between text-text"
    >
      <div>
        <div className="flex items-start justify-between gap-4 mb-4">
          <div className="relative border-3 border-border rounded-xl overflow-hidden shadow-[3px_3px_0px_var(--color-border)] bg-background">
            <Image
              src={icon}
              alt={alt}
              width={72}
              height={72}
              className="object-cover"
            />
          </div>
          {category && (
            <span className="font-(family-name:--font-sour-gummy) font-bold text-sm px-3 py-1 rounded-lg bg-button text-highlight border-2 border-border shadow-[2px_2px_0px_var(--color-border)]">
              {category}
            </span>
          )}
        </div>

        <h3 className="font-(family-name:--font-sour-gummy) text-2xl font-bold mb-2 text-text text-left">
          {title}
        </h3>
        <p className="text-text/80 font-medium text-sm md:text-base mb-4 text-left leading-relaxed">
          {desc}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          <span className="border-2 border-border rounded-lg px-2.5 py-0.5 bg-sky-300 text-slate-900 font-bold text-xs shadow-[2px_2px_0px_var(--color-border)]">
            GD {gdVersion}
          </span>
          {unfinished && (
            <span className="border-2 border-border rounded-lg px-2.5 py-0.5 bg-amber-300 text-slate-900 font-bold text-xs shadow-[2px_2px_0px_var(--color-border)]">
              Unfinished
            </span>
          )}
          {unreleased && (
            <span className="border-2 border-border rounded-lg px-2.5 py-0.5 bg-amber-500 text-slate-900 font-bold text-xs shadow-[2px_2px_0px_var(--color-border)]">
              Unreleased
            </span>
          )}
          {superseded && (
            <span className="border-2 border-border rounded-lg px-2.5 py-0.5 bg-rose-400 text-slate-900 font-bold text-xs shadow-[2px_2px_0px_var(--color-border)]">
              Superseded
            </span>
          )}
          {wIP && (
            <span className="border-2 border-border rounded-lg px-2.5 py-0.5 bg-emerald-300 text-slate-900 font-bold text-xs shadow-[2px_2px_0px_var(--color-border)]">
              WIP
            </span>
          )}
        </div>
      </div>

      <div className="pt-4 border-t-2 border-border/40 flex items-center gap-3">
        <Link 
          href={linkGitHub}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2.5 rounded-xl border-2 border-border bg-background hover:bg-button hover:text-highlight transition-all shadow-[3px_3px_0px_var(--color-border)] active:translate-x-0.5 active:translate-y-0.5"
          title="View Source on GitHub"
        >
          <FaGithub size={22} />
        </Link>

        {linkGeode && (
          <Link 
            href={linkGeode}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-xl border-2 border-border bg-background hover:bg-button transition-all shadow-[3px_3px_0px_var(--color-border)] active:translate-x-0.5 active:translate-y-0.5"
            title="View on Geode"
          >
            <Image
              src="https://github.com/geode-sdk/docs/blob/main/assets/geode-circle.png?raw=true" 
              alt="Geode Icon"
              width={22} 
              height={22} 
            />
          </Link>
        )}

        {linkGeode2 && (
          <Link 
            href={linkGeode2}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-xl border-2 border-border bg-background hover:bg-button transition-all shadow-[3px_3px_0px_var(--color-border)] active:translate-x-0.5 active:translate-y-0.5"
            title="Alternative Version on Geode"
          >
            <Image
              src="https://github.com/geode-sdk/docs/blob/main/assets/geode-circle.png?raw=true" 
              alt="Geode Icon v2"
              width={22} 
              height={22} 
            />
          </Link>
        )}
      </div>
    </motion.li>
  );
}