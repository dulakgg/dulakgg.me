import Footer from "@/components/footer";
import Navbar from "@/components/navbar";


export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 justify-center text-center ">
        <h1 className="text-text text-8xl">Coming Soon</h1>
      </main>
      <Footer />
    </div>
  );
}
