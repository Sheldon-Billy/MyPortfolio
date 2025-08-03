import React from "react";
import RevealOnSroll from "./RevealOnSroll";
import CV from "../assets/CV.pdf";

const About = () => {
  const frontendSkills = [
    "React",
    "Tailwind CSS",
    "HTML/CSS",
    "TypeScript",
    "Next.js",
    "Redux",
  ];
  const backendSkills = [
    "Node.js",
    "Python Django",
    "FastAPI",
    "Express",
    "PostgreSQL",
    "MongoDB",
  ];
  const devOpsSkills = ["Docker", "AWS", "CI/CD", "Git", "Linux"];
  const aiMlSkills = ["TensorFlow", "PyTorch", "Scikit-learn", "NLP"];
  const cyberSecuritySkills = [
    "Kali Linux",
    "Airgeddon",
    "Wireshark",
    "Burp Suite",
    "Nmap",
    "Metasploit",
    "OWASP",
  ];
  const softSkills = [
    "Effective Communication",
    "Team Collaboration",
    "Problem Solving",
    "Adaptability",
    "Time Management",
  ];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20 bg-gradient-to-b from-[#15103a] to-[#080621]"
    >
      <RevealOnSroll>
        <div className="max-w-6xl mx-auto px-4">
          {/* Hero Section */}
          <div className="text-center mb-16 justify-center items-center flex-col flex">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-500 via-white to-blue-600 text-transparent bg-clip-text w-fit   ">
              About Me
            </h2>
            <p className="text-blue-100 text-lg max-w-3xl mx-auto">
              I'm a full-stack developer and cybersecurity enthusiast passionate
              about creating secure, intelligent solutions that bridge
              cutting-edge technology with real-world applications.
            </p>
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column */}
            <div className="lg:col-span-2 space-y-8">
              {/* Introduction Card */}
              <div className="bg-[#0a081a]/70 backdrop-blur-sm border border-blue-500 rounded-2xl p-8 hover:shadow-[0_0_30px_rgba(59,130,246,0.2)] transition-all duration-300">
                <h3 className="text-2xl font-bold mb-4 text-blue-300">
                  My Journey
                </h3>
                <p className="text-blue-100 leading-relaxed">
                  With expertise spanning full-stack development and
                  cybersecurity, I build responsive web applications with robust
                  security architectures. My academic background in Information
                  Technology fuels my passion for integrating AI/ML capabilities
                  with security best practices into practical solutions.
                </p>
                <p className="text-blue-100 mt-4 leading-relaxed">
                  My cybersecurity experience includes penetration testing,
                  vulnerability assessment, and implementing security protocols.
                  When I'm not coding or securing systems, you can find me
                  contributing to open-source projects or mentoring aspiring
                  developers in my community.
                </p>
              </div>

              {/* Skills Grid - Now 3 columns */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Frontend */}
                <div className="bg-[#0a081a]/70 backdrop-blur-sm border border-blue-500 rounded-2xl p-6 hover:shadow-[0_0_20px_rgba(59,130,246,0.2)] transition-all duration-300">
                  <h3 className="text-xl font-bold mb-4 text-blue-300 flex items-center gap-2">
                    <span className="text-2xl">🖥️</span> Frontend
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {frontendSkills.map((tech, index) => (
                      <span
                        key={index}
                        className="bg-blue-500/10 text-blue-400 py-2 px-4 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_0_10px_rgba(59,130,246,0.3)] transition-all"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Backend */}
                <div className="bg-[#0a081a]/70 backdrop-blur-sm border border-blue-500 rounded-2xl p-6 hover:shadow-[0_0_20px_rgba(59,130,246,0.2)] transition-all duration-300">
                  <h3 className="text-xl font-bold mb-4 text-blue-300 flex items-center gap-2">
                    <span className="text-2xl">🗄️</span> Backend
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {backendSkills.map((tech, index) => (
                      <span
                        key={index}
                        className="bg-blue-500/10 text-blue-400 py-2 px-4 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_0_10px_rgba(59,130,246,0.3)] transition-all"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Cybersecurity - New Section */}
                <div className="bg-[#0a081a]/70 backdrop-blur-sm border border-blue-500 rounded-2xl p-6 hover:shadow-[0_0_20px_rgba(59,130,246,0.2)] transition-all duration-300">
                  <h3 className="text-xl font-bold mb-4 text-blue-300 flex items-center gap-2">
                    <span className="text-2xl">🔒</span> Cybersecurity
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {cyberSecuritySkills.map((tech, index) => (
                      <span
                        key={index}
                        className="bg-blue-500/10 text-blue-400 py-2 px-4 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_0_10px_rgba(59,130,246,0.3)] transition-all"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* DevOps */}
                <div className="bg-[#0a081a]/70 backdrop-blur-sm border border-blue-500 rounded-2xl p-6 hover:shadow-[0_0_20px_rgba(59,130,246,0.2)] transition-all duration-300">
                  <h3 className="text-xl font-bold mb-4 text-blue-300 flex items-center gap-2">
                    <span className="text-2xl">⚙️</span> DevOps
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {devOpsSkills.map((tech, index) => (
                      <span
                        key={index}
                        className="bg-blue-500/10 text-blue-400 py-2 px-4 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_0_10px_rgba(59,130,246,0.3)] transition-all"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* AI/ML */}
                <div className="bg-[#0a081a]/70 backdrop-blur-sm border border-blue-500 rounded-2xl p-6 hover:shadow-[0_0_20px_rgba(59,130,246,0.2)] transition-all duration-300">
                  <h3 className="text-xl font-bold mb-4 text-blue-300 flex items-center gap-2">
                    <span className="text-2xl">🧠</span> AI/ML
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {aiMlSkills.map((tech, index) => (
                      <span
                        key={index}
                        className="bg-blue-500/10 text-blue-400 py-2 px-4 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_0_10px_rgba(59,130,246,0.3)] transition-all"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Soft Skills */}
                <div className="bg-[#0a081a]/70 backdrop-blur-sm border border-blue-500 rounded-2xl p-6 hover:shadow-[0_0_20px_rgba(59,130,246,0.2)] transition-all duration-300">
                  <h3 className="text-xl font-bold mb-4 text-blue-300 flex items-center gap-2">
                    <span className="text-2xl">🤝</span> Soft Skills
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {softSkills.map((skill, index) => (
                      <span
                        key={index}
                        className="bg-blue-500/10 text-blue-400 py-2 px-4 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_0_10px_rgba(59,130,246,0.3)] transition-all"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-8">
              {/* Experience - Updated with Security Focus */}
              <div className="bg-[#0a081a]/70 backdrop-blur-sm border border-blue-500 rounded-2xl p-6 hover:shadow-[0_0_20px_rgba(59,130,246,0.2)] transition-all duration-300">
                <h3 className="text-2xl font-bold mb-4 text-blue-300 flex items-center gap-2">
                  <span className="text-2xl">💼</span> Experience
                </h3>
                <div className="space-y-4 text-blue-100">
                  <div>
                    <div className="font-semibold text-blue-400">
                      Information Technology Attachee at Huduma Center Migori,
                      Kenya
                    </div>
                    <div className="text-sm">
                      9th June - 4th Aug 2025 (2 Months)
                    </div>
                    <ul className="list-disc list-inside space-y-1 mt-2 pl-2 text-sm">
                      <li>
                        Provided technical support across multiple government
                        service IT desks
                      </li>
                      <li>
                        Troubleshot and resolved hardware/software issues for
                        50+ workstations
                      </li>
                      <li>
                        Managed user accounts and access permissions in
                        government systems
                      </li>
                      <li>
                        Assisted in network maintenance and security
                        configurations
                      </li>
                    </ul>
                  </div>
                  <div>
                    <div className="font-semibold text-blue-400">
                      Attachee at Smart Touch Printers
                    </div>
                    <div className="text-sm">
                      5th May - 13th Aug 2024 (3 Months)
                    </div>
                    <ul className="list-disc list-inside space-y-1 mt-2 pl-2 text-sm">
                      <li>
                        Implemented security protocols for web applications
                      </li>
                      <li>
                        Conducted vulnerability assessments using Kali Linux
                        tools
                      </li>
                      <li>
                        Front-end integration with security considerations
                      </li>
                    </ul>
                  </div>
                  <div>
                    <div className="font-semibold text-blue-400">
                      Work Study Programme at MMU
                    </div>
                    <div className="text-sm">2023 (Whole semester)</div>
                    <ul className="list-disc list-inside space-y-1 mt-2 pl-2 text-sm">
                      <li>Network security configuration</li>
                      <li>IT security support and monitoring</li>
                    </ul>
                  </div>
                  <div>
                    <div className="font-semibold text-blue-400">
                      Personal Security Projects
                    </div>
                    <div className="text-sm">Ongoing</div>
                    <ul className="list-disc list-inside space-y-1 mt-2 pl-2 text-sm">
                      <li>Penetration testing with Metasploit</li>
                      <li>Network analysis with Wireshark</li>
                      <li>Web vulnerability scanning with Burp Suite</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Education */}
              <div className="bg-[#0a081a]/70 backdrop-blur-sm border border-blue-500 rounded-2xl p-6 hover:shadow-[0_0_20px_rgba(59,130,246,0.2)] transition-all duration-300">
                <h3 className="text-2xl font-bold mb-4 text-blue-300 flex items-center gap-2">
                  <span className="text-2xl">📚</span> Education
                </h3>
                <ul className="space-y-4 text-blue-100">
                  <li>
                    <div className="font-semibold text-blue-400">
                      B.S. in Information Technology
                    </div>
                    <div className="text-sm">
                      Multimedia University of Kenya (2022 - Present)
                    </div>
                    <div className="mt-2 text-sm">
                      <span className="font-medium">Relevant Coursework:</span>
                      <ul className="list-disc list-inside space-y-1 mt-1 pl-2">
                        <li>Cybersecurity Fundamentals</li>
                        <li>Ethical Hacking</li>
                        <li>Network Security</li>
                        <li>Data Structures & Algorithms</li>
                        <li>Web Development</li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <div className="font-semibold text-blue-400">K.C.S.E</div>
                    <div className="text-sm">
                      Kanyawanga High School (2018 - 2022)
                    </div>
                  </li>
                  <li>
                    <div className="font-semibold text-blue-400">K.C.P.E</div>
                    <div className="text-sm">Rongo Shinners Academy</div>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent">
              Want to Know More?
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href={CV}
                download="Sheldon_Billy_CV.pdf"
                className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white py-3 px-8 rounded-full font-medium transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_25px_rgba(59,130,246,0.6)]"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H5a2 2 0 01-2-2v-7a2 2 0 012-2h14a2 2 0 012 2v7a2 2 0 01-2 2z"
                  />
                </svg>
                Download CV
              </a>
              <a
                href="#contact"
                className="inline-flex items-center border-2 border-blue-500 text-blue-400 hover:text-white hover:bg-blue-500/10 py-3 px-8 rounded-full font-medium transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(59,130,246,0.3)]"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </RevealOnSroll>
    </section>
  );
};

export default About;
