import { FaLaptopCode, FaReact } from "react-icons/fa";
import { useState, useEffect } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("home");

  // Detect hash changes for active link highlighting
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.substring(1) || "home";
      setActiveLink(hash);
    };

    // Set initial active link
    handleHashChange();

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navLinks = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "testimonials", label: "Testimonials" },
    { id: "contact", label: "Contact" },

  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      window.location.hash = id;
      setMenuOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#0a081a]/90 backdrop-blur-md border-b border-gray-800/50">
      <div className="px-6 mx-auto max-w-7xl">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Brand */}
          <div
            className="flex items-center cursor-pointer"
            onClick={() => scrollToSection("home")}
          >
            <FaLaptopCode className="text-blue-500 text-xl" />
            <span className="ml-2 font-bold text-[#00ff00] md:text-2xl sm:text-[10px]">Hammattan</span>
            <span className="text-blue-500 text-2xl font-[cursive]">.tech</span>
            <FaReact className="ml-2 text-cyan-400 text-xl animate-[spin_8s_linear_infinite]" />
          </div>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <li key={link.id}>
                <button
                  onClick={() => scrollToSection(link.id)}
                  className={`relative px-1 py-2 text-sm font-medium transition-colors duration-300 ${activeLink === link.id
                    ? "text-blue-400"
                    : "text-gray-300 hover:text-[#7c8000]"
                    }`}
                >
                  {link.label}
                  {activeLink === link.id && (
                    <span className="absolute left-0 right-0 -bottom-1 h-0.5 bg-blue-500 rounded-full animate-[pulse_1.5s_ease-in-out_infinite]" />
                  )}
                </button>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden flex flex-col justify-center items-center w-8 h-8 group"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`block h-0.5 w-6 bg-gray-300 rounded-full transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-1.5" : ""
                } group-hover:bg-blue-400`}
            />
            <span
              className={`block h-0.5 w-6 bg-gray-300 rounded-full my-1.5 transition-all duration-300 ${menuOpen ? "opacity-0" : ""
                } group-hover:bg-blue-400`}
            />
            <span
              className={`block h-0.5 w-6 bg-gray-300 rounded-full transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-1.5" : ""
                } group-hover:bg-blue-400`}
            />
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="lg:hidden absolute top-16 left-0 right-0 bg-[#0a081a] border-t border-gray-800/50 shadow-xl animate-[fadeIn_0.3s_ease-out]">
            <ul className="flex flex-col py-3 px-4">
              {navLinks.map((link) => (
                <li key={link.id} className="border-b border-gray-800/50 last:border-0">
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className={`w-full text-left px-4 py-3 text-sm font-medium transition-colors duration-200 flex items-center ${activeLink === link.id
                      ? "text-blue-400 bg-blue-900/20"
                      : "text-gray-300 hover:text-blue-300"
                      }`}
                  >
                    {link.label}
                    {activeLink === link.id && (
                      <span className="ml-2 w-2 h-2 bg-blue-400 rounded-full animate-[pulse_1.5s_ease-in-out_infinite]" />
                    )}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;