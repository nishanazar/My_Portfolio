import React from "react";
import Skill from "./SkillsBox";

const About = () => {
  return (
    <section
      id="about"
      className="bg-gradient-to-r from-[#f1f8ff] via-[#ffffff] to-[#d1e9ff] py-16 md:py-32 text-center overflow-hidden relative"
    >
      <div className="container mx-auto px-6 relative">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#1e3a8a] mb-8 animate-fade-in-up">
          About Me
        </h2>

        {/* Content */}
        <div className="text-base md:text-lg text-[#334155] max-w-3xl mx-auto leading-relaxed animate-fade-in-up delay-200 space-y-6">
          <p>
            Hello! I’m <strong className="text-[#3b82f6]">Nisha Nazar</strong>, a passionate and detail-oriented Frontend Developer based in Karachi, Pakistan.
          </p>

          <p>
            I specialize in building modern, responsive, and user-friendly web applications using technologies like{" "}
            <strong className="text-[#3b82f6]">Next.js</strong>,{" "}
            <strong className="text-[#3b82f6]">TypeScript</strong>,{" "}
            <strong className="text-[#3b82f6]">JavaScript</strong>,{" "}
            <strong className="text-[#3b82f6]">Python</strong>, and{" "}
            <strong className="text-[#3b82f6]">Tailwind CSS</strong>.
          </p>

          <p>
            I enjoy transforming creative ideas and Figma designs into clean, pixel-perfect interfaces that deliver smooth and engaging user experiences across all devices. My focus is not only on creating visually appealing websites, but also on writing scalable, maintainable, and performance-optimized code.
          </p>

          <p>
            Alongside frontend development, I have experience integrating AI-powered functionality using the <strong className="text-[#3b82f6]">OpenAI Agents SDK</strong> and working with modern development tools such as <strong className="text-[#3b82f6]">Git & GitHub</strong>. I’m constantly learning new technologies and improving my skills to stay updated with the latest trends in web development.
          </p>

          <p>
            As a developer, I’m passionate about problem-solving, continuous growth, and building applications that provide real value to users. I’m currently looking for opportunities where I can contribute, learn from experienced teams, and grow as a professional developer.
          </p>

          <p className="font-semibold text-[#1e3a8a]">
            Let’s build something amazing together!
          </p>
        </div>

        <div className="mt-12">
            <Skill />
        </div>
      </div>
    </section>
  );
};

export default About;
