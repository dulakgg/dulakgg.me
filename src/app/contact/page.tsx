import { Contact } from "@/components/ContactForm";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";


export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 justify-center text-center ">
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
