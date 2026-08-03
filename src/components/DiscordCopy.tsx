"use client";

import { useState } from "react";
import { FaDiscord, FaCheck } from "react-icons/fa";

export default function DiscordCopy() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("dulakgg");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={handleCopy}
      type="button"
      className="w-full flex items-center justify-center md:justify-start gap-3 bg-background border-4 border-border rounded-xl px-5 py-3 font-bold text-text hover:bg-button hover:text-highlight shadow-[4px_4px_0px_var(--color-border)] transition-all hover:-translate-y-1 active:translate-y-0 cursor-pointer relative"
    >
      {copied ? <FaCheck className="text-xl text-success" /> : <FaDiscord className="text-2xl" />}
      <span>{copied ? "Copied @dulakgg" : "Copy Discord Username"}</span>
    </button>
  );
}