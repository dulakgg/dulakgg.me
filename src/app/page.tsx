import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <nav className="flex items-center justify-center" >
        <h1 className="font-chaos16 text-9xl text-[#3a1435]  drop-shadow-lg text-center"><a href="/">Dulakgg</a></h1>
      </nav>
      <main>
        <section className="mt-8 text-center">
          <p className="text-lg mb-4">This page is currently being made :)</p>
          <p className="text-lg mb-4">I pay for this domain, so consider supporting me!</p>
          <a 
            href="https://ko-fi.com/dulakgg" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-[#FF5E5B] hover:bg-[#ff4744] text-white font-bold py-3 px-6 rounded-lg transition-colors"
          >
            ☕ Support me on Ko-fi
          </a>
        </section>
      </main>
    </div>
  );
}
