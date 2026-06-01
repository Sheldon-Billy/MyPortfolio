import RevealOnSroll from "./RevealOnSroll";
import CV from "../assets/CV.pdf";
import { FaDownload, FaEnvelope } from "react-icons/fa";

const skillGroups = [
  {
    icon: "🖥️",
    label: "Frontend",
    skills: ["React JS", "Next.js", "HTML/CSS", "JavaScript", "Tailwind CSS", "TypeScript"],
  },
  {
    icon: "🗄️",
    label: "Backend",
    skills: ["FastAPI", "Django", "Express JS", "Node.js", "REST APIs"],
  },
  {
    icon: "🧠",
    label: "AI / ML",
    skills: ["TensorFlow", "CNN Models", "LangChain", "LangGraph", "Azure OpenAI", "Scikit-learn"],
  },
  {
    icon: "💾",
    label: "Databases",
    skills: ["PostgreSQL", "MongoDB", "MySQL"],
  },
  {
    icon: "🔒",
    label: "Cybersecurity",
    skills: ["Kali Linux", "Wireshark", "Burp Suite", "Nmap", "Metasploit", "OWASP"],
  },
  {
    icon: "⚙️",
    label: "Tools & DevOps",
    skills: ["Git", "Docker", "AWS", "Figma", "Canva", "Linux"],
  },
];

const experience = [
  {
    role: "Lead Software Engineer",
    company: "Speqlink Organisation",
    period: "June 2024 – Present",
    location: "Nairobi, Kenya",
    points: [
      "Led end-to-end development of the Speqlink web platform from concept to deployment",
      "Managed system architecture, database design, APIs, and performance optimization",
      "Provided technical leadership driving scalability and long-term platform sustainability",
    ],
  },
  {
    role: "Software Developer",
    company: "Ayot Health Solutions",
    period: "June 2024 – October 2024",
    location: "Migori, Kenya",
    points: [
      "Built and maintained scalable healthcare web and system applications",
      "Collaborated with cross-functional teams to design and optimize software features",
      "Delivered secure, efficient digital health solutions using full-stack best practices",
    ],
  },
  {
    role: "ICT & Service Support Attachment",
    company: "Huduma Centre Kenya",
    period: "June 2025 – August 2025",
    location: "Migori, Kenya",
    points: [
      "Provided frontline digital support across ICT, Births & Deaths, and NCA desks",
      "Assisted with data entry, system updates, and network troubleshooting",
      "Strengthened skills in government digital systems and ICT operations",
    ],
  },
  {
    role: "University Work Study Program",
    company: "Multimedia University of Kenya",
    period: "2023 – Present",
    location: "Nairobi, Kenya",
    points: [
      "Built foundational skills in coding, web design, and software development",
      "Worked in a team-driven environment under the Dean of Students",
    ],
  },
];

const About = () => {
  return (
    <section
      id="about"
      className="py-24 relative"
    >
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-950/10 to-transparent pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-5 sm:px-8">
        <RevealOnSroll>
          {/* Section header */}
          <div className="text-center mb-16">
            <p className="text-indigo-400 text-sm font-semibold uppercase tracking-widest mb-3">Get to know me</p>
            <h2 className="section-title grad-text mb-4">About Me</h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-base leading-relaxed">
              Highly motivated Full-Stack Developer, AI Specialist, and Mobile Development Engineer
              with expertise in designing, developing, and deploying scalable software solutions.
            </p>
          </div>
        </RevealOnSroll>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Left — Bio + Experience */}
          <div className="lg:col-span-3 space-y-8">
            <RevealOnSroll>
              <div className="glass rounded-2xl p-7">
                <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                  <span className="w-1 h-5 bg-indigo-500 rounded-full" />
                  My Story
                </h3>
                <p className="text-slate-400 leading-relaxed mb-3">
                  I'm a passionate developer from Nairobi, Kenya, currently pursuing a degree in
                  Information Technology at Multimedia University of Kenya. I specialize in building
                  intelligent, user-centered digital products that bridge modern web technologies
                  with AI/ML capabilities.
                </p>
                <p className="text-slate-400 leading-relaxed">
                  From leading the full-stack development of the Speqlink platform to building
                  AI-powered healthcare tools, I thrive on solving real-world problems with clean,
                  scalable code. I'm passionate about leveraging artificial intelligence and
                  cross-platform technologies to create impactful digital experiences.
                </p>
              </div>
            </RevealOnSroll>

            {/* Experience Timeline */}
            <RevealOnSroll>
              <div>
                <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                  <span className="w-1 h-5 bg-indigo-500 rounded-full" />
                  Experience
                </h3>
                <div className="relative space-y-0">
                  {/* Vertical line */}
                  <div className="absolute left-3 top-2 bottom-2 w-px bg-indigo-500/20" />

                  {experience.map((exp, i) => (
                    <div key={i} className="relative pl-10 pb-8 last:pb-0">
                      {/* Dot */}
                      <div className="absolute left-0 top-1.5 w-6 h-6 rounded-full bg-[#080714] border-2 border-indigo-500 flex items-center justify-center dot-pulse">
                        <div className="w-2 h-2 rounded-full bg-indigo-400" />
                      </div>

                      <div className="glass rounded-xl p-5 hover:border-indigo-500/40 transition-colors">
                        <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                          <div>
                            <h4 className="font-bold text-white text-sm">{exp.role}</h4>
                            <p className="text-indigo-400 text-sm font-medium">{exp.company}</p>
                          </div>
                          <div className="text-right">
                            <span className="text-xs text-slate-500 bg-slate-800/60 px-2 py-0.5 rounded-full">{exp.period}</span>
                            <p className="text-xs text-slate-600 mt-1">{exp.location}</p>
                          </div>
                        </div>
                        <ul className="space-y-1 mt-3">
                          {exp.points.map((pt, j) => (
                            <li key={j} className="text-slate-400 text-xs flex gap-2">
                              <span className="text-indigo-500 mt-0.5 flex-shrink-0">▸</span>
                              {pt}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </RevealOnSroll>
          </div>

          {/* Right — Skills + Education */}
          <div className="lg:col-span-2 space-y-8">
            <RevealOnSroll>
              <div>
                <h3 className="text-lg font-bold text-white mb-5 flex items-center gap-2">
                  <span className="w-1 h-5 bg-indigo-500 rounded-full" />
                  Skills
                </h3>
                <div className="space-y-4">
                  {skillGroups.map((group) => (
                    <div key={group.label} className="glass rounded-xl p-4 hover:border-indigo-500/40 transition-colors">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-base">{group.icon}</span>
                        <span className="text-sm font-semibold text-slate-300">{group.label}</span>
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {group.skills.map((s) => (
                          <span key={s} className="skill-pill">{s}</span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </RevealOnSroll>

            {/* Education */}
            <RevealOnSroll>
              <div className="glass rounded-2xl p-6">
                <h3 className="text-lg font-bold text-white mb-5 flex items-center gap-2">
                  <span className="w-1 h-5 bg-indigo-500 rounded-full" />
                  Education
                </h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm font-semibold text-white">B.S. Information Technology</p>
                    <p className="text-indigo-400 text-xs mt-0.5">Multimedia University of Kenya</p>
                    <p className="text-slate-500 text-xs">2022 – Present · Rongai, Kenya</p>
                  </div>
                  <div className="border-t border-white/5 pt-4">
                    <p className="text-sm font-semibold text-white">K.C.S.E</p>
                    <p className="text-indigo-400 text-xs mt-0.5">Kanyawanga High School</p>
                    <p className="text-slate-500 text-xs">2018 – 2022</p>
                  </div>
                  <div className="border-t border-white/5 pt-4">
                    <p className="text-sm font-semibold text-white">K.C.P.E</p>
                    <p className="text-indigo-400 text-xs mt-0.5">Rongo Shinners Academy</p>
                  </div>
                </div>
              </div>
            </RevealOnSroll>

            {/* CTA */}
            <RevealOnSroll>
              <div className="flex flex-col gap-3">
                <a
                  href={CV}
                  download="Sheldon_Billy_CV.pdf"
                  className="btn-primary flex items-center justify-center gap-2 text-sm"
                >
                  <FaDownload />
                  Download CV
                </a>
                <a
                  href="#contact"
                  className="btn-outline flex items-center justify-center gap-2 text-sm"
                >
                  <FaEnvelope />
                  Get In Touch
                </a>
              </div>
            </RevealOnSroll>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
