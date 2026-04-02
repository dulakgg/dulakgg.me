import { FaGithub, FaYoutube, FaHeart, FaReact } from "react-icons/fa";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import DiscordCopy from "@/components/DiscordCopy";

export default function Footer() {
    return (
        <footer className="bg-footer border-t-3 border-border-muted px-4 md:px-8 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-6 md:gap-8">
          <div>
            <h2 className="text-text font-bold mb-3 text-center md:text-left">Socials</h2>
            <ul className="flex flex-col gap-2 text-text">
              <li><DiscordCopy /></li>
              <li>
                <a href="https://github.com/dulakgg" className="flex items-center gap-2 hover:text-button transition-colors">
                  <FaGithub /> GitHub
                </a>
              </li>
              <li>
                <a href="https://www.youtube.com/@Dulakggyy" className="flex items-center gap-2 hover:text-button transition-colors">
                  <FaYoutube /> YouTube
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-text font-bold mb-3 text-center md:text-left">Built With</h2>
            <ul className="flex flex-col gap-2 text-text">
              <li className="flex items-center"><RiNextjsFill /> Next.js</li>
              <li className="flex items-center"><RiTailwindCssFill /> Tailwind</li>
              <li className="flex items-center"><FaReact /> React</li>
            </ul>
          </div>
          <div className="text-text flex items-center gap-1 text-center">
            <span className="text-sm md:text-base">join my discord server <a href="https://discord.gg/CQFyRJDP5y" className="hover:text-button bg-white transition-colors">here</a></span> <FaHeart className="text-button size-4" /> 
          </div>
        </div>
      </footer>
    )
}