import React from "react";

const About = () => {
  return (
    <section
    id="about"
    className="bg-gradient-to-r from-[#f1f8ff] via-[#ffffff] to-[#d1e9ff] py-32 text-center overflow-hidden relative"
  >
    <div className="container mx-auto px-6 relative">
      {/* Heading with Animation */}
      <h2 className="text-4xl font-extrabold text-[#1e3a8a] mb-8 animate-fade-in-up">
        About Me
      </h2>
  
      {/* Content with spacing, text styles, and animation */}
      <p className="text-lg text-[#334155] max-w-3xl mx-auto leading-relaxed space-y-6 animate-fade-in-up delay-200">
        Hello! I’m <strong className="text-[#3b82f6]">Nisha Nazar</strong>, a passionate frontend web developer dedicated to creating visually appealing, functional, and user-friendly web applications. I specialize in building responsive and accessible websites that provide excellent user experiences.
        <br /><br />
        My journey into tech began with curiosity and experimentation. Over time, it turned into a profession where I now focus on using powerful frameworks like <strong className="text-[#3b82f6]">Next.js</strong>, <strong className="text-[#3b82f6]">Tailwind CSS</strong>, and <strong className="text-[#3b82f6]">TypeScript</strong> to bring ideas to life.
        <br /><br />
        I find immense joy in taking creative concepts and turning them into high-performing, elegant websites and applications. My goal is always to deliver the best possible experience for the users.
        <br /><br />
        Constantly learning and evolving as a developer, I take pride in writing clean, scalable code and ensuring that my work is accessible to all users, regardless of their abilities or devices.
        <br /><br />
        Let&apos;s collaborate and build something amazing together!
      </p>
    </div>
  
   
    
  </section>
  
  

  );
};

export default About;
