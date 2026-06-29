import Link from "next/link";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import About from "./components/About";
import Image from "next/image"
import imag from "../../public/profile_pic.png"
import Autocell from "./components/autoscroll"
import TechnicalSkill from "./components/TechiqueSkill";
export default function Home() {
  return (
    <>
      {/* Layout Wrapper */}
      <div className="bg-gray-50 min-h-screen">
        
        {/* Navbar */}
        <Navbar/>
       
        
        {/* Hero Section */}
        <section className="bg-[#0F172A] text-white pt-20 pb-24 md:pt-32 md:pb-32 text-center relative overflow-hidden">
          <div className="container mx-auto px-6">
            <h1 className="text-5xl md:text-7xl font-extrabold mb-8 tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-blue-400 animate-fade-in-up">
              Hi, I&apos;m Nisha Nazar
            </h1>

            <div className="flex justify-center mb-8 animate-zoom-in">
              <Image
                src={imag}
                width={160}
                height={160}
                alt="Profile Picture"
                className="rounded-full border-4 border-white/20 shadow-2xl"
              />
            </div>

            <div className="flex flex-col items-center justify-center animate-fade-in delay-200">
              <p className="text-lg md:text-2xl text-gray-300 max-w-2xl leading-relaxed">
                Frontend Developer passionate about building visually stunning, scalable, and high-performance web applications for modern businesses.
              </p>
            </div>

            <div className="mt-10 animate-fade-in-up delay-300">
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=hassebsoomro2233@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#FDE68A] text-[#0F172A] py-3 px-8 rounded-full font-bold hover:bg-blue-400 hover:text-white transition duration-300 shadow-lg hover:shadow-blue-500/20"
              >
                Contact Me
              </a>
            </div>
          </div>
        </section>



        {/* About Section */}
       <About/>

      <div className="mb-16">
        <TechnicalSkill/>
      </div>

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
