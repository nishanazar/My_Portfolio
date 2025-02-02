import Link from "next/link";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import About from "./components/About";

export default function Home() {
  return (
    <>
      {/* Layout Wrapper */}
      <div className="bg-gray-50 min-h-screen">
        
        {/* Navbar */}
        <Navbar/>
       
        
        {/* Hero Section */}
        <section className="bg-blue-900 text-white py-40 text-center pt-32"> {/* Add pt-32 for top padding */}
          <h1 className="text-4xl font-bold mb-4">Hi, I&apos;m Nisha Nazar</h1>
          <p className="text-lg mb-8">A passionate web developer specialized in TypeScript, Next.js and Tailwind CSS</p>
          <Link href="#about" className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-400 transition">Learn More</Link>
        </section>

        {/* About Section */}
       <About/>

        {/* Projects Section */}
        <Projects/>

        {/* Contact Section */}
        <Contact/>
        
        {/* Footer */}
        <Footer />
      </div>
    </>
  );
}
