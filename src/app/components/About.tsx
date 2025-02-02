import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="bg-gradient-to-r from-blue-100 via-white to-blue-100 py-32 text-center"
    >
      <div className="container mx-auto px-6">
        {/* Heading */}
        <h2 className="text-4xl font-extrabold text-blue-900 mb-8">
          About Me
        </h2>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-16">
        I&apos;m a passionate web developer with expertise in building modern, fast,
          and accessible web applications. I specialize in using{" "}
          <strong className="text-blue-600">Next.js</strong>,{" "}
          <strong className="text-blue-600">Tailwind CSS</strong>, and designing
          with <strong className="text-blue-600">Figma</strong>.
        </p>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Skills Section */}
          <div className="flex flex-col items-center p-8 bg-white rounded-xl shadow-2xl transform hover:scale-105 transition duration-500 ease-in-out hover:shadow-xl">
            <h3 className="text-3xl font-semibold text-blue-900 mb-6">Skills</h3>
            <ul className="list-disc list-inside text-lg text-gray-700 space-y-3">
             <li>TypeScript</li>
              <li>Next.js</li>
              <li>Tailwind CSS</li>
              <li>Figma</li>
            </ul>
          </div>

          {/* Experience Section */}
          <div className="flex flex-col items-center p-8 bg-white rounded-xl shadow-2xl transform hover:scale-105 transition duration-500 ease-in-out hover:shadow-xl">
            <h3 className="text-3xl font-semibold text-blue-900 mb-6">Experience</h3>
            <p className="text-lg text-gray-700">
              I have worked on multiple projects, ranging from eCommerce sites to
              personal blogs, with a strong focus on performance and user
              experience. I am always learning and adapting to the latest web
              technologies.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
