import { FaLaptopCode, FaReact } from "react-icons/fa";
import { useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-40 backdrop-blur-2xl shadow-lg sm:text-[10px] md:text-[15px] lg:text-[17px]">
      <div className="px-4 mx-auto max-w-5xl border-b-2 border-[#9e9e9e] ">
        <div className="flex justify-between items-center h-16">
          <a
            href="#home"
            className="flex items-center gap-2 hover:underline hover:text-blue-500"
          >
            <FaLaptopCode className="text-blue-600 text-xl" />
            <span className="font-bold">Hammattan</span>
            <span className="text-blue-600 text-2xl font-[cursive]">.tech</span>
            <FaReact className="ml-2 text-cyan-400 text-xl animate-spin-slow" />
          </a>
          {/* Hamburger Icon */}
          <button
            className="lg:hidden flex flex-col justify-center items-center w-8 h-8"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`block h-1 w-6 bg-gray-400 rounded transition-all duration-300 ${
                menuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            ></span>
            <span
              className={`block h-1 w-6 bg-gray-400 rounded my-1 transition-all duration-300 ${
                menuOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`block h-1 w-6 bg-gray-400 rounded transition-all duration-300 ${
                menuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            ></span>
          </button>
          {/* Desktop Menu */}
          <ul className="hidden lg:flex lg:gap-5 text-gray-300 sm:gap-2 md:gap-3">
            <li className="hover:text-blue-600 hover:underline transition-colors cursor-pointer">
              <a href="#home">Home</a>
            </li>
            <li className="hover:text-blue-600 hover:underline transition-colors cursor-pointer">
              <a href="#about">About</a>
            </li>
            <li className="hover:text-blue-600 hover:underline transition-colors cursor-pointer">
              <a href="#projects">Projects</a>
            </li>
            <li className="hover:text-blue-600 hover:underline transition-colors cursor-pointer">
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
        {/* Mobile Menu */}
        {menuOpen && (
          <ul className="lg:hidden flex flex-col gap-3 py-4 text-gray-300 bg-[#18181b] rounded shadow-md animate-fade-in">
            <li className="hover:text-blue-600 hover:underline transition-colors cursor-pointer">
              <a href="#home" onClick={() => setMenuOpen(false)}>
                Home
              </a>
            </li>
            <li className="hover:text-blue-600 hover:underline transition-colors cursor-pointer">
              <a href="#about" onClick={() => setMenuOpen(false)}>
                About
              </a>
            </li>
            <li className="hover:text-blue-600 hover:underline transition-colors cursor-pointer">
              <a href="#projects" onClick={() => setMenuOpen(false)}>
                Projects
              </a>
            </li>
            <li className="hover:text-blue-600 hover:underline transition-colors cursor-pointer">
              <a href="#contact" onClick={() => setMenuOpen(false)}>
                Contact
              </a>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Header;
