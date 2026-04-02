import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { FaHeart, FaCoffee } from "react-icons/fa";

export default function Support() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 flex items-center justify-center px-4 mt-10">
        <div className="max-w-md text-center">
          <div className="text-6xl mb-6 flex justify-center">
            <FaHeart className="text-button" />
          </div>
          <h1 className="text-text text-3xl font-bold mb-4">Support My Work</h1>
          <p className="text-text mb-6">
            This site and domain are self-funded. If you enjoy my content, consider buying me a coffee to help keep things running!
          </p>
          <a
            href="https://ko-fi.com/dulakgg"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex mb-10 items-center pt-7 gap-2 bg-button hover:bg-button-hover text-highlight px-6 py-3 rounded-lg text-lg font-medium transition-colors"
          >
            <div className="mb-4">
              <iframe
                id="kofiframe"
                src="https://ko-fi.com/dulakgg/?hidefeed=true&widget=true&embed=true&preview=true"
                style={{ border: "none", width: "100%", padding: "4px", background: "#f9f9f9" }}
                height={712}
                title="dulakgg"
              />
            </div>
            <span className="sr-only">External link to Ko-fi</span>
          </a>
        </div>
      </main>
      <Footer />
    </div>
  );
}
