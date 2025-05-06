import Link from "next/link";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import About from "./components/About";
import Image from "next/image"
import imag from "../../public/profile_pic.png"
import Autocell from "./components/autoscroll"
export default function Home() {
  return (
    <>
      {/* Layout Wrapper */}
      <div className="bg-gray-50 min-h-screen">
        
        {/* Navbar */}
        <Navbar/>
       
        
        {/* Hero Section */}
        <section className="bg-[#0F172A] text-white pt-16 md:pt-24 pb-20 text-center relative overflow-hidden">
  <h1 className="text-4xl md:text-5xl font-extrabold mb-10 animate-fade-in-up">
    Hi, I&apos;m Nisha Nazar
  </h1>

  <div className="flex justify-center pt-6 animate-zoom-in">
    <Image
      src={imag}
      width={150}
      height={150}
      alt="Profile Picture"
      className="rounded-full border-4 border-white shadow-lg"
    />
  </div>

  <div className="text-text2 flex flex-col items-center justify-center pt-6 animate-fade-in delay-200">
    <p className="text-md md:text-xl text-center leading-snug max-w-xl">
      <b>AIM:</b> To design and develop visually stunning
      <br />
      and technically proficient websites for
      <br />
      clients worldwide.
    </p>
  </div>

  <div className="pt-8 animate-fade-in-up delay-300">
    <Link
      href="mailto:hassebsoomro2233@gmail.com"
      className="bg-[#FDE68A] text-[#0F172A] py-2 px-6 rounded-lg font-bold hover:bg-blue-400 transition duration-300 shadow-md"
    >
      Contact Me
    </Link>
  </div>
</section>



        {/* About Section */}
       <About/>

        {/* Projects Section */}
        <Projects/>
        <Autocell/>
        {/* Contact Section */}
        <Contact/>
        
        {/* Footer */}
        <Footer />
      </div>
    </>
  );
}
