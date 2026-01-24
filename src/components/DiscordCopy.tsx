"use client";

import { useState } from "react";
import { FaDiscord } from "react-icons/fa";

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
      className="flex items-center gap-2 hover:text-button transition-colors relative cursor-pointer"
    >
      <FaDiscord />
      <span>Discord</span>
      {copied && (
        <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-text text-background text-sm px-2 py-1 rounded whitespace-nowrap">
          Copied!
        </span>
      )}
    </button>
  );
}
