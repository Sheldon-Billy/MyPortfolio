import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/sheldon-billy-151b662b3/",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path
            fillRule="evenodd"
            d="M19 0H5a5 5 0 00-5 5v14a5 5 0 005 5h14a5 5 0 005-5V5a5 5 0 00-5-5zM8.297 20.375h-2.92v-9.525h2.92v9.525zM6.83 9.47A1.674 1.674 0 015.155 7.72c.002-.924.764-1.674 1.676-1.674.912 0 1.652.75 1.674 1.674a1.674 1.674 0 01-1.675 1.75zM20.375 20.375h-2.918v-4.996c0-1.19-.023-2.722-1.657-2.722-1.658 0-1.914 1.29-1.914 2.637v5.081h-2.918v-9.525h2.793v1.282h.04c.387-.732 1.332-1.498 2.756-1.498C20.038 11.634 21 13.064 21 15.01v5.365z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: "GitHub",
      url: "https://github.com/Sheldon-Billy",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path
            fillRule="evenodd"
            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.499.09.682-.217.682-.483 0-.237-.008-.865-.013-1.697-2.782.602-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.618.068-.606.068-.606 1.004.07 1.532 1.03 1.532 1.03.892 1.529 2.341 1.088 2.91.83.091-.645.352-1.088.639-1.338-2.22-.253-4.555-1.116-4.555-4.954 0-1.096.391-1.996 1.03-2.7-.104-.253-.447-1.275.097-2.668 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.026 2.747-1.026.546 1.393.202 2.415.097 2.668.64.704 1.026 1.604 1.026 2.7 0 3.847-2.339 4.695-4.566 4.942.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.579.688.481C21.137 20.19 24 16.425 24 12.017 24 6.484 19.522 2 14 2h-2z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: "Email",
      url: "mailto:Sheldonbilly0723@gmail.com",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M22 4H2C0.89 4 0 4.89 0 6V18C0 19.11 0.89 20 2 20H22C23.11 20 24 19.11 24 18V6C24 4.89 23.11 4 22 4ZM20 6L12 11L4 6H20ZM2 18V6L12 13L22 6V18H2Z" />
        </svg>
      ),
    },
    {
      name: "WhatsApp",
      url: "https://wa.me/+254757161754",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.04 2c-5.45 0-9.91 4.46-9.91 9.91 0 1.75.5 3.44 1.45 4.96L2 22l5.25-1.38c1.47.8 3.12 1.25 4.79 1.25 5.45 0 9.91-4.46 9.91-9.91S17.49 2 12.04 2zm0 18c-1.54 0-3-.42-4.29-1.18l-.3-.18-3.14.82.84-3.04-.2-.31c-.88-1.39-1.35-2.99-1.35-4.66 0-4.5 3.68-8.19 8.19-8.19s8.19 3.68 8.19 8.19c0 4.5-3.67 8.19-8.19 8.19zm4.56-6.16c-.25-.12-.8-.4-.92-.45-.12-.04-.26-.06-.37.04-.11.12-.42.45-.52.54-.1.1-.2.12-.37.04-.18-.06-.74-.27-1.42-.87-.52-.47-.87-1.05-.98-1.22-.11-.17-.01-.26.09-.35.09-.09.2-.25.3-.37.1-.12.14-.2.2-.31.06-.11.03-.2.01-.31-.02-.12-.37-.9-.52-1.22-.16-.31-.32-.26-.45-.26-.12 0-.25-.02-.37-.02-.12 0-.31.04-.48.2-.17.16-.65.64-.65 1.56 0 .92.67 1.8.76 1.94.09.14 1.34 2.06 3.25 2.89.43.19.77.3 1.04.39.29.1.56.08.77.05.21-.02.6-.25.69-.47.09-.23.09-.4.06-.47-.02-.07-.08-.12-.17-.16z" />
        </svg>
      ),
    },
  ];

  const quickLinks = [
    { name: "Home", url: "#home" },
    { name: "About", url: "#about" },
    { name: "Projects", url: "#projects" },
    { name: "Certifications", url: "#certifications" },
    { name: "Reviews", url: "#Reviews" },
    { name: "Contact", url: "#contact" },
  ];

  const techStack = [
    { name: "React", url: "https://react.dev" },
    { name: "Tailwind CSS", url: "https://tailwindcss.com" },
    { name: "Node.js", url: "https://nodejs.org" },
    { name: "TypeScript", url: "https://www.typescriptlang.org" },
    { name: "MongoDB", url: "https://www.mongodb.com" },
    { name: "Express", url: "https://expressjs.com" },
    { name: "PostgreSQL", url: "https://www.postgresql.org" },
    { name: "FastAPI", url: "https://fastapi.tiangolo.com" },
    { name: "Airgeddon", url: "https://github.com/v1s1t0r1sh3r3/airgeddon" },
    { name: "Kali Linux", url: "https://www.kali.org" },
    { name: "Metasploit", url: "https://www.metasploit.com" },
    { name: "Wireshark", url: "https://www.wireshark.org" },
    { name: "Nmap", url: "https://nmap.org" },
  ];

  return (
    <footer className="bg-[#010111] text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-8">
          {/* About Section */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-xl font-bold mb-4 text-blue-300">About Me</h3>
            <p className="text-blue-100 mb-4">
              Full-stack developer,Ai-enthusiast and cybersecurity Guru
              passionate about creating elegant, efficient solutions to complex
              problems with cutting-edge technologies.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-200 hover:text-white transition-colors duration-300 hover:translate-y-1 p-2 rounded-full bg-blue-800 hover:bg-[green]"
                  aria-label={link.name}
                  title={link.name}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-blue-300">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.url}
                    className="text-blue-100 hover:text-blue-700 transition-colors duration-100 hover:underline"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-blue-300">Tech Stack</h3>
            <div className="flex flex-wrap gap-2">
              {techStack.map((tech) => (
                <a
                  key={tech.name}
                  href={tech.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1 bg-blue-800 text-blue-100 rounded-full text-sm hover:bg-white hover:text-black transition-colors duration-300"
                >
                  {tech.name}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-blue-800 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-blue-200 text-sm mb-4 md:mb-0">
              &copy; {currentYear} Okoth Sheldon Billy. All rights reserved.
            </p>
            <div className="text-blue-300 text-sm">
              <span>Built with </span>
              <a
                href="https://react.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#02ff02] underline hover:text-white hover:underline transition-colors duration-300"
              >
                React
              </a>
              <span> and </span>
              <a
                href="https://tailwindcss.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#02ff02] underline hover:text-white hover:underline transition-colors duration-300"
              >
                Tailwind CSS
              </a>
              <span> | Deployed on </span>
              <a
                href="https://vercel.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#02ff02] underline hover:text-white hover:underline transition-colors duration-300"
              >
                Vercel
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
