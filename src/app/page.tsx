'use client';
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { FaGamepad, FaCode, FaGlobe, FaEnvelope } from "react-icons/fa";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 flex flex-col items-center justify-center px-4 py-12">
        <div className="max-w-2xl text-center mb-12">
          <h1 className="text-text text-4xl md:text-5xl font-bold mb-4">
            Hi, I’m Dulak
          </h1>
          <p className="text-text text-lg md:text-xl leading-relaxed mb-6">
            I’m a developer who builds Game mods, websites, and
      the occasional games. I’m passionate about creating fun and useful tools for the GD community, and I’m always looking for new projects to work on.
          </p>
          <p className="text-text opacity-75">
            Want to work together or need help? You can reach out to me on Discord or the contact page.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
