import { useEffect, useRef, useState } from "react";
import RevealOnSroll from "./RevealOnSroll";
import Sheldon from "../assets/sheldon.png";
import CV from "../assets/CV.pdf";
import { SpeqlinkLogo } from "../assets/Pics";
import { FaGithub, FaLinkedin, FaWhatsapp, FaDownload } from "react-icons/fa";
import { HiArrowDown, HiArrowRight } from "react-icons/hi";

/* ── Animated star field ── */
const StarField = () => {
  const stars = useRef(
    Array.from({ length: 120 }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 0.5,
      delay: Math.random() * 6,
      duration: Math.random() * 4 + 3,
      opacity: Math.random() * 0.5 + 0.1,
    }))
  );
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {stars.current.map((s, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-white"
          style={{
            width: s.size,
            height: s.size,
            top: `${s.y}%`,
            left: `${s.x}%`,
            opacity: s.opacity,
            animation: `twinkle ${s.duration}s ease-in-out ${s.delay}s infinite`,
          }}
        />
      ))}
    </div>
  );
};

/* ── Typing role switcher ── */
const roles = [
  "Full-Stack Developer",
  "AI / ML Engineer",
  "COO @ Speqlink",
  "Mobile Developer",
  "Cybersecurity Enthusiast",
];

const useTyping = () => {
  const roleRef = useRef(null);
  const roleIndex = useRef(0);
  const charIndex = useRef(0);
  const deleting = useRef(false);

  useEffect(() => {
    let timeout;
    const tick = () => {
      const current = roles[roleIndex.current];
      if (!deleting.current) {
        charIndex.current++;
        if (roleRef.current) roleRef.current.textContent = current.slice(0, charIndex.current);
        if (charIndex.current === current.length) {
          deleting.current = true;
          timeout = setTimeout(tick, 2000);
          return;
        }
      } else {
        charIndex.current--;
        if (roleRef.current) roleRef.current.textContent = current.slice(0, charIndex.current);
        if (charIndex.current === 0) {
          deleting.current = false;
          roleIndex.current = (roleIndex.current + 1) % roles.length;
        }
      }
      timeout = setTimeout(tick, deleting.current ? 40 : 75);
    };
    timeout = setTimeout(tick, 800);
    return () => clearTimeout(timeout);
  }, []);

  return roleRef;
};

/* ── Animated counter ── */
const Counter = ({ target, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;
        let start = 0;
        const step = Math.ceil(target / 40);
        const timer = setInterval(() => {
          start += step;
          if (start >= target) { setCount(target); clearInterval(timer); }
          else setCount(start);
        }, 40);
      }
    }, { threshold: 0.5 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return <span ref={ref}>{count}{suffix}</span>;
};

/* ── Tech stack marquee ── */
const techStack = [
  "React JS", "Next.js", "FastAPI", "Django", "TensorFlow",
  "LangChain", "Azure OpenAI", "PostgreSQL", "MongoDB",
  "Python", "TypeScript", "Docker", "AWS", "Tailwind CSS",
];

const TechMarquee = () => (
  <div className="relative overflow-hidden py-3">
    <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#080714] to-transparent z-10 pointer-events-none" />
    <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#080714] to-transparent z-10 pointer-events-none" />
    <div className="flex w-max animate-scroll-left gap-3">
      {[...techStack, ...techStack].map((t, i) => (
        <span
          key={i}
          className="px-4 py-1.5 glass rounded-full text-sm text-slate-400 border border-white/8 whitespace-nowrap flex-shrink-0"
        >
          {t}
        </span>
      ))}
    </div>
  </div>
);

/* ── Main component ── */
const Home = () => {
  const roleRef = useTyping();

  const stats = [
    { value: 3,  suffix: "+", label: "Years Coding" },
    { value: 20, suffix: "+", label: "Systems Shipped" },
    { value: 9,  suffix: "+", label: "Certifications" },
    { value: 3,  suffix: "",  label: "Companies" },
  ];

  const socials = [
    { icon: <FaGithub />,   url: "https://github.com/Sheldon-Billy",                          label: "GitHub" },
    { icon: <FaLinkedin />, url: "https://www.linkedin.com/in/sheldon-billy-151b662b3/",       label: "LinkedIn" },
    { icon: <FaWhatsapp />, url: "https://wa.me/+254757161754",                                label: "WhatsApp" },
  ];

  return (
    <section id="home" className="relative min-h-screen flex flex-col overflow-hidden">
      <StarField />

      {/* ── Background orbs ── */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-indigo-700/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-700/8 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-1/2 left-0 w-[300px] h-[300px] bg-blue-700/6 rounded-full blur-[80px] pointer-events-none" />

      {/* ── Grid lines overlay ── */}
      <div
        className="absolute inset-0 pointer-events-none z-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(99,102,241,1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(99,102,241,1) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />

      {/* ── Main content ── */}
      <div className="relative z-10 flex-1 flex items-center">
        <div className="w-full max-w-7xl mx-auto px-6 sm:px-10 pt-28 pb-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* ── LEFT: Text ── */}
            <div>
              {/* Available badge */}
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass border border-green-500/25 text-sm font-medium text-green-300 mb-8">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-400" />
                </span>
                Available for opportunities
              </div>

              {/* Name */}
              <h1 className="font-extrabold text-white leading-[1.05] tracking-tight mb-5"
                  style={{ fontSize: "clamp(2.6rem, 5.5vw, 4.2rem)" }}>
                Hi, I'm{" "}
                <span className="relative inline-block">
                  <span className="grad-text">Sheldon Billy</span>
                  {/* Underline glow */}
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-transparent rounded-full" />
                </span>
              </h1>

              {/* Typing role */}
              <div className="flex items-center gap-2 mb-6" style={{ minHeight: "2.5rem" }}>
                <span className="text-2xl sm:text-3xl font-bold text-indigo-300" ref={roleRef} />
                <span className="animate-blink text-indigo-400 text-3xl font-light">|</span>
              </div>

              {/* Bio */}
              <p className="text-slate-400 text-lg leading-relaxed mb-8 max-w-xl">
                Full-Stack Developer, AI Specialist & Co-Founder of{" "}
                <a
                  href="https://www.speqlink.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-300 hover:text-white font-semibold transition-colors inline-flex items-center gap-1"
                >
                  Speqlink
                  <span className="text-xs">↗</span>
                </a>
                {" "}— engineering intelligent software ecosystems and AI-powered solutions for Africa's future, based in Nairobi, Kenya.
              </p>

              {/* CTA row */}
              <div className="flex flex-wrap gap-4 mb-10">
                <a href="#projects" className="btn-primary inline-flex items-center gap-2 group">
                  View My Work
                  <HiArrowRight className="group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href={CV}
                  download="Sheldon_Billy_CV.pdf"
                  className="btn-outline inline-flex items-center gap-2"
                >
                  <FaDownload className="text-sm" />
                  Download CV
                </a>
              </div>

              {/* Socials */}
              <div className="flex items-center gap-4">
                <span className="text-slate-600 text-sm">Connect</span>
                <div className="w-8 h-px bg-slate-700" />
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="w-10 h-10 glass rounded-xl flex items-center justify-center text-slate-400 hover:text-indigo-300 hover:border-indigo-500/50 transition-all duration-200 hover:-translate-y-1 text-lg"
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* ── RIGHT: Photo + cards ── */}
            <div className="flex flex-col items-center gap-6">

              {/* Photo with layered glow rings */}
              <div className="relative">
                {/* Outer spinning ring */}
                <div
                  className="absolute inset-0 rounded-3xl opacity-20"
                  style={{
                    background: "conic-gradient(from 0deg, #6366f1, #8b5cf6, #06b6d4, #6366f1)",
                    animation: "spin-slow 8s linear infinite",
                    padding: "2px",
                    borderRadius: "1.5rem",
                  }}
                />
                {/* Glow blob */}
                <div className="absolute -inset-4 bg-gradient-to-br from-indigo-600/25 to-purple-600/20 rounded-3xl blur-2xl" />

                {/* Photo frame */}
                <div className="relative w-72 h-80 sm:w-80 sm:h-96 rounded-3xl overflow-hidden border border-indigo-500/30 shadow-2xl">
                  <img
                    src={Sheldon}
                    alt="Sheldon Billy"
                    className="w-full h-full object-cover object-top"
                  />
                  {/* Bottom gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080714]/70 via-transparent to-transparent" />

                  {/* Name tag overlay */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="glass rounded-xl px-4 py-2.5 border border-white/10">
                      <p className="text-white font-bold text-sm">Okoth Sheldon Billy</p>
                      <p className="text-indigo-300 text-xs">COO · Speqlink &nbsp;·&nbsp; 🇰🇪 Nairobi</p>
                    </div>
                  </div>
                </div>

                {/* Floating Speqlink badge */}
                <div className="absolute -top-4 -right-4 glass rounded-2xl px-3 py-2.5 border border-indigo-500/30 shadow-xl flex items-center gap-2">
                  <img src={SpeqlinkLogo} alt="Speqlink" className="h-5 object-contain" />
                  <div>
                    <p className="text-white text-xs font-bold leading-tight">Co-Founder</p>
                    <p className="text-indigo-400 text-[10px]">speqlink.com</p>
                  </div>
                </div>

                {/* Floating AI badge */}
                <div className="absolute -bottom-4 -left-4 glass rounded-2xl px-3 py-2.5 border border-purple-500/30 shadow-xl">
                  <p className="text-purple-300 text-xs font-bold">🧠 AI Specialist</p>
                  <p className="text-slate-500 text-[10px]">LangChain · Azure OpenAI</p>
                </div>
              </div>

              {/* Stats row */}
              <div className="grid grid-cols-4 gap-3 w-full max-w-sm mt-4">
                {stats.map((s) => (
                  <div
                    key={s.label}
                    className="glass rounded-2xl p-3 text-center border border-indigo-500/15 hover:border-indigo-500/40 transition-colors group"
                  >
                    <div className="text-2xl font-extrabold grad-text">
                      <Counter target={s.value} suffix={s.suffix} />
                    </div>
                    <div className="text-xs text-slate-500 mt-1 leading-tight group-hover:text-slate-400 transition-colors">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* ── Tech stack marquee ── */}
      <div className="relative z-10 w-full pb-6">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 mb-3">
          <p className="text-slate-600 text-xs uppercase tracking-widest font-medium">Tech I work with</p>
        </div>
        <TechMarquee />
      </div>

      {/* ── Scroll indicator ── */}
      <div className="relative z-10 flex flex-col items-center pb-8 gap-1 text-slate-600">
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <HiArrowDown className="animate-bounce text-indigo-500 text-lg" />
      </div>
    </section>
  );
};

export default Home;
