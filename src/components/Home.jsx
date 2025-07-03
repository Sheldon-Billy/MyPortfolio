import React from "react";
import RevealOnSroll from "./RevealOnSroll";
import { down } from "../assets/Pics"; // Assuming 'down' is your scrolling arrow emoji
import Sheldon from "../assets/Sheldon.jpeg"; // Import the image, adjust path if needed

const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center flex-col py-10" // Added py-10 for vertical padding
    >
      <RevealOnSroll>
        <div className="text-center mt-5">
          <img
            src={Sheldon}
            alt="Sheldon Billy"
            className="w-48 h-48 rounded-full object-cover border-4 border-blue-500 mx-auto mb-8 shadow-lg transition-transform duration-300 ease-in-out hover:scale-105"
          />

          <h1 className="bg-gradient-to-r from-blue-600 via-blue-300 to-blue-800 text-transparent bg-clip-text lg:text-5xl font-extrabold sm:text-[14px] md:text-[17px] mb-5 font-serif ">
            Hi again, I'm Sheldon Billy.
          </h1>

          <p className="mx-auto mb-8 max-w-lg sm:text-[14px] lg-text-[20px] text-white">
            I'm a developer who loves bringing ideas to life through code. I
            specialize in crafting intuitive user interfaces with React JS,
            Tailwind CSS, and JavaScript. My passion extends beyond the
            frontend,encompassing robust backend development with Django AI&ML
            and Express JS, and efficient data management using PostgreSQL and
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
              className="border-blue-500 border-2 text-blue-500 py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-0.5 shadow-[0_0_10px_blue]"
            >
              Contact Me
            </a>
          </div>
        </div>
      </RevealOnSroll>
      <img src={down} className="h-20 w-30 mt-10 animate-bounce" />
    </section>
  );
};

export default Home;
