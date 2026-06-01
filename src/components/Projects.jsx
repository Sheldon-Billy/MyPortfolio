import { useState } from "react";
import {
  Aidriven, Dermatology,
  SpeqlinkLogo, AyotLogo, KcaaLogo, AniraLogo, OctabellLogo, MasqanyLogo, SpeqLogo,
} from "../assets/Pics";
import RevealOnSroll from "./RevealOnSroll";
import { FiExternalLink } from "react-icons/fi";

/* ─────────────────────────────────────────────
   PROJECT DATA  (sourced from speqlink.com)
───────────────────────────────────────────── */
const projects = [

  // ── Speqlink Platform ──────────────────────
  {
    title: "Speqlink – IT Solutions Platform",
    subtitle: "Kenyan Technology Company",
    description:
      "Led end-to-end development of the Speqlink web platform as COO & Lead Software Developer. Speqlink engineers intelligent software ecosystems, AI-powered platforms, and scalable digital infrastructure that solve real-world African challenges. 20+ systems delivered, 98% client satisfaction.",
    technologies: ["Next.js", "React", "FastAPI", "PostgreSQL", "Tailwind CSS", "TypeScript", "Docker"],
    logo: SpeqlinkLogo,
    image: null,
    link: "https://www.speqlink.com",
    category: "Full-Stack",
    type: "product",
    status: "Live",
  },
  {
    title: "Ayot Health Solutions",
    subtitle: "Healthcare Technology",
    description:
      "Built and maintained scalable healthcare web and system applications. Collaborated with cross-functional teams to design, implement, and optimise software features improving system performance, data management, and patient user experience.",
    technologies: ["React", "Django", "PostgreSQL", "FastAPI", "Python", "REST APIs"],
    logo: AyotLogo,
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=700&q=80",
    link: "https://www.ayothealthsolutions.ke/",
    category: "HealthTech",
    type: "client",
    status: "Live",
  },

  // ── Speqlink Products ──────────────────────
  {
    title: "Masqany",
    subtitle: "PropTech · Speqlink Product",
    description:
      "Intelligent real estate ecosystem connecting Kenyans to homes, apartments, hotels, and affordable housing opportunities. Features smart property discovery, realtime availability, digital booking, moving-service coordination, and location-based filtering.",
    technologies: ["React Native", "Expo", "Next.js", "FastAPI", "PostgreSQL", "Redis", "Google Maps API"],
    logo: MasqanyLogo,
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=700&q=80",
    link: "https://www.speqlink.com/products",
    category: "PropTech",
    type: "product",
    status: "In Development",
  },
  {
    title: "Speq",
    subtitle: "Coding Agent · Speqlink Product",
    description:
      "An intelligent coding agent built to accelerate software development workflows. Speq leverages AI to assist developers with code generation, debugging, and intelligent automation — making engineering faster and smarter.",
    technologies: ["React", "FastAPI", "Python", "LangChain", "PostgreSQL", "Tailwind CSS"],
    logo: SpeqLogo,
    image: null,
    link: "https://www.speqlink.com/products",
    category: "AI / ML",
    type: "product",
    status: "Live",
  },
  {
    title: "Octabell",
    subtitle: "Logistics / ConTech · Speqlink Product",
    description:
      "Construction logistics ecosystem connecting constructors, quarry suppliers, and transport drivers through intelligent realtime infrastructure. Features realtime tracking, driver matching, and supply chain optimisation for the Kenyan construction industry.",
    technologies: ["React", "Node.js", "FastAPI", "PostgreSQL", "Redis", "Google Maps API"],
    logo: OctabellLogo,
    image: "https://images.unsplash.com/photo-1569144157591-c60f3f82f137?w=700&q=80",
    link: "https://octabell.co.ke",
    category: "Logistics",
    type: "product",
    status: "Live",
  },

  // ── Client Projects ────────────────────────
  {
    title: "KCAA SRBS",
    subtitle: "Kenya Civil Aviation Authority",
    description:
      "Retirement Benefits Scheme System (RBSS) for the Kenya Civil Aviation Authority — a comprehensive enterprise system managing thousands of member records, financial reporting, and digital benefits administration. Handles thousands of member records seamlessly.",
    technologies: ["React", "Node.js", "Express", "PostgreSQL", "REST APIs", "TypeScript"],
    logo: KcaaLogo,
    image: "https://images.unsplash.com/photo-1568992687947-868a62a9f521?w=700&q=80",
    link: "https://kcaa-srbss.or.ke",
    category: "Enterprise",
    type: "client",
    status: "Live",
  },
  {
    title: "Anira Insurance Agency",
    subtitle: "Fintech / Insurance Platform",
    description:
      "Complete fintech infrastructure engineered from the ground up for Anira — streamlining digital payments, transaction management, financial operations, and client portal integration. Fast, secure, and scalable.",
    technologies: ["Next.js", "Tailwind CSS", "FastAPI", "PostgreSQL", "Figma"],
    logo: AniraLogo,
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=700&q=80",
    link: "https://anira.co.ke",
    category: "FinTech",
    type: "client",
    status: "Live",
  },
  // ── Personal / AI Projects ─────────────────
  {
    title: "AI-Driven Crop Disease Detection",
    subtitle: "Agricultural AI System",
    description:
      "AI-powered crop disease detection and prevention system using Python, machine learning, and computer vision to enable early identification and management of crop diseases — enhancing agricultural productivity and sustainability across Africa.",
    technologies: ["React", "Python", "TensorFlow", "CNN", "Computer Vision", "Django", "AWS"],
    logo: null,
    image: Aidriven,
    link: "https://ai-crop-guard.vercel.app/",
    category: "AI / ML",
    type: "personal",
    status: "Live",
  },
  {
    title: "AI Powered Dermatology Assistant",
    subtitle: "Healthcare AI · Azure",
    description:
      "Team-built AI dermatology assistant capable of diagnosing skin conditions and giving immediate, effective recommendations. Leverages Azure AI models, Microsoft Fabrics, and integrated AI agents with high diagnostic accuracy.",
    technologies: ["React JS", "Tailwind CSS", "Django", "Azure OpenAI", "LangChain", "ML/DL"],
    logo: null,
    image: Dermatology,
    link: "https://purple-river-00fd8ef0f.6.azurestaticapps.net/",
    category: "AI / ML",
    type: "personal",
    status: "Live",
  },
  {
    title: "Network Security Dashboard",
    subtitle: "Cybersecurity Tool",
    description:
      "Real-time network monitoring tool with threat detection capabilities using Wireshark integration and custom packet analysis algorithms. Developed as part of CISCO Networking coursework with penetration testing features.",
    technologies: ["React", "Node.js", "Python", "Wireshark", "Kali Linux", "Nmap"],
    logo: null,
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=700&q=80",
    link: "https://my-portfolio-omega-ruby-16.vercel.app/#projects",
    category: "Cybersecurity",
    type: "personal",
    status: "Completed",
  },
  {
    title: "Data Analysis & Visualisation",
    subtitle: "Data Science Project",
    description:
      "Analysed public datasets using Python (Pandas, NumPy, Matplotlib, Seaborn) to extract insights and create interactive visualisations, charts, and graphs for data-driven decision making.",
    technologies: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Jupyter"],
    logo: null,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=700&q=80",
    link: "https://my-portfolio-omega-ruby-16.vercel.app/#projects",
    category: "Data Science",
    type: "personal",
    status: "Completed",
  },
];

/* ─────────────────────────────────────────────
   FILTER TABS
───────────────────────────────────────────── */
const tabs = [
  { key: "all",      label: "All" },
  { key: "client",   label: "Client Work" },
  { key: "product",  label: "Speqlink & Products" },
  { key: "personal", label: "Personal / AI" },
];

/* ─────────────────────────────────────────────
   CATEGORY COLOURS
───────────────────────────────────────────── */
const catColor = {
  "AI / ML":      "bg-purple-500/15 text-purple-300 border-purple-500/30",
  "Full-Stack":   "bg-blue-500/15   text-blue-300   border-blue-500/30",
  "Cybersecurity":"bg-red-500/15    text-red-300    border-red-500/30",
  "Data Science": "bg-emerald-500/15 text-emerald-300 border-emerald-500/30",
  "PropTech":     "bg-orange-500/15 text-orange-300 border-orange-500/30",
  "Logistics":    "bg-yellow-500/15 text-yellow-300 border-yellow-500/30",
  "Enterprise":   "bg-sky-500/15   text-sky-300    border-sky-500/30",
  "FinTech":      "bg-green-500/15  text-green-300  border-green-500/30",
  "HealthTech":   "bg-pink-500/15   text-pink-300   border-pink-500/30",
};

const statusColor = {
  "Live":           "bg-green-500/15 text-green-300 border-green-500/30",
  "In Development": "bg-amber-500/15 text-amber-300 border-amber-500/30",
  "Completed":      "bg-slate-500/15 text-slate-300 border-slate-500/30",
};

/* ─────────────────────────────────────────────
   PROJECT CARD
───────────────────────────────────────────── */
const ProjectCard = ({ project }) => {
  const hasLogo  = !!project.logo;
  const hasImage = !!project.image;
  const showBoth = hasLogo && hasImage;

  return (
    <div className="glass rounded-2xl overflow-hidden group hover:border-indigo-500/50 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_24px_60px_rgba(99,102,241,0.18)] flex flex-col h-full">

      {/* Visual area */}
      <div className="relative bg-[#0d0b22] flex items-center justify-center overflow-hidden" style={{ minHeight: 180 }}>

        {/* Background image */}
        {hasImage && (
          <img
            src={project.image}
            alt={project.title}
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-70"
          />
        )}

        {/* Logo overlay (centered) */}
        {hasLogo && (
          <div className={`relative z-10 flex items-center justify-center w-full py-7 px-8 ${hasImage ? "bg-black/40 backdrop-blur-sm" : ""}`}>
            <img
              src={project.logo}
              alt={project.title + " logo"}
              className="max-h-16 max-w-[180px] object-contain drop-shadow-xl group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        )}

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d0b22]/90 via-transparent to-transparent" />

        {/* Category badge */}
        <span className={`absolute top-3 left-3 text-xs font-semibold px-3 py-1 rounded-full border ${catColor[project.category] || "bg-indigo-500/15 text-indigo-300 border-indigo-500/30"}`}>
          {project.category}
        </span>

        {/* Status badge */}
        <span className={`absolute top-3 right-3 text-xs font-semibold px-3 py-1 rounded-full border ${statusColor[project.status]}`}>
          {project.status === "Live" ? "🟢" : project.status === "In Development" ? "🔨" : "✅"} {project.status}
        </span>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        <p className="text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-1">{project.subtitle}</p>
        <h3 className="text-lg font-bold text-white mb-3 group-hover:text-indigo-300 transition-colors leading-snug">
          {project.title}
        </h3>
        <p className="text-slate-400 text-sm leading-relaxed mb-5 flex-1">
          {project.description}
        </p>

        {/* Tech pills */}
        <div className="flex flex-wrap gap-2 mb-5">
          {project.technologies.map((tech) => (
            <span key={tech} className="skill-pill">{tech}</span>
          ))}
        </div>

        {/* Link */}
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-400 hover:text-white transition-colors group/link"
        >
          View Project
          <FiExternalLink className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
        </a>
      </div>
    </div>
  );
};

/* ─────────────────────────────────────────────
   MAIN SECTION
───────────────────────────────────────────── */
const Projects = () => {
  const [activeTab, setActiveTab] = useState("all");

  const filtered = activeTab === "all"
    ? projects
    : projects.filter((p) => p.type === activeTab);

  return (
    <section id="projects" className="py-28 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-950/8 to-transparent pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-10">

        {/* Header */}
        <RevealOnSroll>
          <div className="text-center mb-14">
            <p className="text-indigo-400 text-sm font-semibold uppercase tracking-widest mb-3">What I've built</p>
            <h2 className="section-title grad-text mb-5">My Projects</h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
              Client systems, Speqlink products, and personal AI projects — all real, all shipped, all solving African challenges.
            </p>
          </div>
        </RevealOnSroll>

        {/* Filter tabs */}
        <RevealOnSroll>
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {tabs.map((tab) => {
              const count = tab.key === "all" ? projects.length : projects.filter(p => p.type === tab.key).length;
              return (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 border ${
                    activeTab === tab.key
                      ? "bg-indigo-600 text-white border-indigo-500 shadow-[0_0_20px_rgba(99,102,241,0.4)]"
                      : "glass text-slate-400 border-white/10 hover:text-white hover:border-indigo-500/40"
                  }`}
                >
                  {tab.label}
                  <span className={`ml-2 text-xs px-1.5 py-0.5 rounded-full ${activeTab === tab.key ? "bg-white/20" : "bg-white/5"}`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </RevealOnSroll>

        {/* Grid */}
        <RevealOnSroll>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {filtered.map((project, i) => (
              <ProjectCard key={i} project={project} />
            ))}
          </div>
        </RevealOnSroll>

        {/* Speqlink callout */}
        <RevealOnSroll>
          <div className="mt-16 glass rounded-2xl p-8 border border-indigo-500/20">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <img
                src={SpeqlinkLogo}
                alt="Speqlink"
                className="h-12 object-contain flex-shrink-0"
              />
              <div className="flex-1 text-center md:text-left">
                <p className="text-white font-bold text-lg mb-1">Speqlink — Architecturing Intelligent Solutions</p>
                <p className="text-slate-400 text-sm leading-relaxed">
                  A Kenyan technology company engineering intelligent software ecosystems, AI-powered systems, and scalable digital infrastructure for Africa's future. 20+ systems delivered · 98% client satisfaction.
                </p>
              </div>
              <a
                href="https://www.speqlink.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary flex-shrink-0 inline-flex items-center gap-2 text-sm"
              >
                Visit Speqlink <FiExternalLink />
              </a>
            </div>

            {/* Client logos */}
            <div className="mt-8 pt-6 border-t border-white/5">
              <p className="text-slate-500 text-xs uppercase tracking-widest font-medium text-center mb-5">Verified Client Projects</p>
              <div className="flex flex-wrap justify-center items-center gap-10">
                {[
                  { logo: KcaaLogo,     name: "KCAA SRBS" },
                  { logo: OctabellLogo, name: "Octabell" },
                  { logo: AniraLogo,    name: "Anira Insurance" },
                  { logo: AyotLogo,     name: "Ayot Health" },
                ].map((c) => (
                  <div key={c.name} className="flex flex-col items-center gap-2 opacity-50 hover:opacity-100 transition-opacity duration-300">
                    <img
                      src={c.logo}
                      alt={c.name}
                      className="h-10 max-w-[110px] object-contain grayscale hover:grayscale-0 transition-all duration-300"
                    />
                    <span className="text-xs text-slate-500">{c.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </RevealOnSroll>

      </div>
    </section>
  );
};

export default Projects;
