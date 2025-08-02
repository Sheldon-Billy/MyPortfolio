import { FaLaptopCode, FaReact } from "react-icons/fa";
import { useState, useEffect } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  // Detect scroll and hash changes
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    const handleHashChange = () => {
      const hash = window.location.hash.substring(1) || "home";
      setActiveLink(hash);
    };

    handleHashChange();
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('hashchange', handleHashChange);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('hashchange', handleHashChange);
    };
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
    <nav className={`fixed z-50 w-full transition-all duration-300 ${scrolled ? 'bg-[#0a081a]/95 py-2' : 'bg-[#0a081a]/90 py-3'} backdrop-blur-md border-b border-gray-800/50`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-12">
          {/* Logo/Brand */}
          <div
            className="flex items-center cursor-pointer group"
            onClick={() => scrollToSection("home")}
          >
            <FaLaptopCode className="text-blue-500 text-xl group-hover:text-[#00ff00] transition-colors" />
            <span className="ml-2 font-bold text-[#00ff00] text-sm sm:text-base">Hammattan</span>
            <span className="text-blue-500 text-xl font-[cursive] group-hover:text-[#00ff00] transition-colors">.tech</span>
            <FaReact className="ml-2 text-[#00ff00] size-5 sm:size-6 animate-[spin_8s_linear_infinite] group-hover:animate-[spin_2s_linear_infinite]" />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`relative px-4 py-2 text-sm font-medium transition-all duration-200
                  ${activeLink === link.id ? 'text-blue-400' : 'text-gray-300 hover:text-[#00ff00] hover:scale-105'}`}
                aria-current={activeLink === link.id ? 'page' : undefined}
              >
                {link.label}
                {activeLink === link.id && (
                  <span className="absolute left-1/2 -bottom-1 h-0.5 w-4 bg-blue-500 rounded-full transform -translate-x-1/2 animate-[pulse_2s_ease-in-out_infinite]" />
                )}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden flex flex-col justify-center items-center w-8 h-8 group "
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <span
              className={`block h-0.5 w-6 bg-gray-300 rounded-full transition-all duration-300
                ${menuOpen ? "rotate-45 translate-y-1.5 bg-[#00ff00]" : "bg-gray-300 group-hover:bg-blue-400"}`}
            />
            <span
              className={`block h-0.5 w-6 bg-gray-300 rounded-full my-1.5 transition-all duration-300
                ${menuOpen ? "opacity-0" : "group-hover:bg-blue-400"}`}
            />
            <span
              className={`block h-0.5 w-6 bg-gray-300 rounded-full transition-all duration-300
                ${menuOpen ? "-rotate-45 -translate-y-1.5 bg-[#00ff00]" : "group-hover:bg-blue-400"}`}
            />
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${menuOpen ? 'max-h-96' : 'max-h-0'}`}>
          <ul className="flex flex-col py-2 px-2 bg-[#0a081a]/95 backdrop-blur-lg border-t border-gray-800/30">
            {navLinks.map((link) => (
              <li key={link.id} className="border-b border-gray-800/30 last:border-0">
                <button
                  onClick={() => scrollToSection(link.id)}
                  className={`w-full text-left px-4 py-3 text-sm font-medium transition-colors duration-200 flex items-center
                    ${activeLink === link.id ? "text-blue-400" : "text-gray-300 hover:text-[#00ff00]"}`}
                  aria-current={activeLink === link.id ? 'page' : undefined}
                >
                  {link.label}
                  {activeLink === link.id && (
                    <span className="ml-2 w-2 h-2 bg-[#00ff00] rounded-full animate-[pulse_2s_ease-in-out_infinite]" />
                  )}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;