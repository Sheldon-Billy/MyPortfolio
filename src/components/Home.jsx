import React from "react";

const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center"
    >
      <div className="text-center ">
        <h1 className="bg-gradient-to-r from-blue-600 via-blue-400 to-blue-800 text-transparent bg-clip-text lg:text-5xl font-extrabold sm:text-[14px] md:text-[17px] mb-5 font-serif ">
          Hi again, I'm Sheldon Billy.
        </h1>

        <p className="mx-auto mb-8 max-w-lg sm:text-[14px] lg-text-[20px]">
          I'm a developer who loves bringing ideas to life through code. I
          specialize in crafting intuitive user interfaces with React JS,
          Tailwind CSS, and JavaScript. My passion extends beyond the
          frontend,encompassing robust backend development with Django AI&ML and
          Express JS, and efficient data management using PostgreSQL and
          MongoDB.
        </p>

        <div className="flex justify-center space-x-4">
          <a
            href="#projects"
            className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 shadow-[0_0_10px_blue]"
          >
            View My Projects
          </a>

          <a
            href="#contact"
            className="border-blue-500 border-2 text-blue-500 py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 shadow-[0_0_10px_blue]"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
