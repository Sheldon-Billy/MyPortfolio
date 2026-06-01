import { FaGithub, FaLinkedin, FaWhatsapp, FaEnvelope, FaCode } from "react-icons/fa";

const Footer = () => {
  const year = new Date().getFullYear();

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Certifications", href: "#certifications" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Contact", href: "#contact" },
  ];

  const socials = [
    { icon: <FaGithub />, url: "https://github.com/Sheldon-Billy", label: "GitHub" },
    { icon: <FaLinkedin />, url: "https://www.linkedin.com/in/sheldon-billy-151b662b3/", label: "LinkedIn" },
    { icon: <FaWhatsapp />, url: "https://wa.me/+254757161754", label: "WhatsApp" },
    { icon: <FaEnvelope />, url: "mailto:Sheldonbilly0723@gmail.com", label: "Email" },
  ];

  const techStack = [
    { name: "React", url: "https://react.dev" },
    { name: "Next.js", url: "https://nextjs.org" },
    { name: "Tailwind CSS", url: "https://tailwindcss.com" },
    { name: "FastAPI", url: "https://fastapi.tiangolo.com" },
    { name: "Django", url: "https://www.djangoproject.com" },
    { name: "PostgreSQL", url: "https://www.postgresql.org" },
    { name: "MongoDB", url: "https://www.mongodb.com" },
    { name: "TensorFlow", url: "https://www.tensorflow.org" },
    { name: "Azure OpenAI", url: "https://azure.microsoft.com/en-us/products/ai-services/openai-service" },
    { name: "LangChain", url: "https://www.langchain.com" },
  ];

  return (
    <footer className="border-t border-white/5 bg-[#050411]">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
                <FaCode className="text-white text-sm" />
              </div>
              <span className="font-bold text-white">Sheldon<span className="text-indigo-400">.dev</span></span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed mb-5 max-w-xs">
              Full-Stack Developer & AI Specialist based in Nairobi, Kenya. Building intelligent, scalable digital solutions.
            </p>
            <div className="flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-9 h-9 glass rounded-lg flex items-center justify-center text-slate-400 hover:text-indigo-300 hover:border-indigo-500/50 transition-all duration-200 hover:-translate-y-0.5"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-widest mb-5">Navigation</h3>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-slate-500 hover:text-indigo-300 text-sm transition-colors duration-200 flex items-center gap-1.5 group"
                  >
                    <span className="w-0 group-hover:w-3 h-px bg-indigo-500 transition-all duration-200" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-widest mb-5">Tech Stack</h3>
            <div className="flex flex-wrap gap-2">
              {techStack.map((tech) => (
                <a
                  key={tech.name}
                  href={tech.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="skill-pill text-xs hover:no-underline"
                >
                  {tech.name}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-slate-600 text-sm">
            © {year} Okoth Sheldon Billy. All rights reserved.
          </p>
          <p className="text-slate-600 text-sm">
            Built with{" "}
            <a href="https://react.dev" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-indigo-300 transition-colors">React</a>
            {" "}+{" "}
            <a href="https://tailwindcss.com" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-indigo-300 transition-colors">Tailwind</a>
            {" "}· Deployed on{" "}
            <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-indigo-300 transition-colors">Vercel</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
