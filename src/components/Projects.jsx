import { Aidriven, Dermatology } from "../assets/Pics";
import RevealOnSroll from "./RevealOnSroll";

const Projects = () => {
  const projects = [
    {
      title: "AI-driven crop disease detection and prevention system",
      description: "Utilizing Python, machine learning, and computer vision to enable early identification and management of crop diseases, with React and JavaScript for the front end.",
      technologies: ["React", "Node.js", "AWS", "Docker", "Python", "TensorFlow"],
      images: [Aidriven],
      link: "https://lively-smoke-0fda9f70f.6.azurestaticapps.net/"
    },
    {
      title: "AI Powered Dermatology Assistant",
      description: "A software capable of diagnosing and giving immediate recommendations by leveraging Azure AI models and APIs with integrated AI agents.",
      technologies: ["Python", "TensorFlow", "React", "TailwindCSS", "ML & DL", "Django"],
      images: [Dermatology],
      link: "https://purple-river-00fd8ef0f.6.azurestaticapps.net/"
    },
    {
      title: "Network Security Dashboard",
      description: "Real-time network monitoring tool with threat detection capabilities using Wireshark integration and custom analysis algorithms.",
      technologies: ["React", "Node.js", "Wireshark", "Kali Linux", "Python"],
      images: ["https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"],
      link: "https://www.kali.org/tools/wireshark/"
    },
    {
      title: "Smart Home Automation System",
      description: "IoT platform for controlling home devices with voice commands and predictive automation using machine learning.",
      technologies: ["React Native", "Node.js", "Python", "TensorFlow", "AWS IoT"],
      images: ["https://images.unsplash.com/photo-1558002038-1055907df827?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"],
      link: "https://aws.amazon.com/iot/"
    },
    {
      title: "Blockchain Voting System",
      description: "Secure decentralized voting platform with identity verification and transparent vote counting.",
      technologies: ["Solidity", "React", "Node.js", "Ethereum", "Web3.js"],
      images: ["https://images.pexels.com/photos/844124/pexels-photo-844124.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"],
      link: "https://ethereum.org/en/"
    },
    {
      title: "DevOps CI/CD Pipeline",
      description: "Automated deployment pipeline with integrated security scanning and performance monitoring.",
      technologies: ["Docker", "Kubernetes", "Jenkins", "AWS", "Terraform"],
      images: ["https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"],
      link: "https://www.jenkins.io/"
    }
  ];

  return (
    <section id="projects" className="min-h-screen flex items-center justify-center py-20 ">
      <RevealOnSroll>
        <div className="max-w-6xl mx-auto px-4">
          <div className="mb-20 justify-center items-center flex flex-col">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-600 bg-clip-text text-transparent text-center w-fit">
              My Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="
                    bg-[#0a081a]/70 backdrop-blur-sm border border-blue-500 rounded-2xl p-6
                    hover:-translate-y-10 hover:shadow-[0_0px_30px_blue]
                    transition-all duration-300
                    group
                  "
                >
                  <h3 className="text-xl font-bold mb-3  group-hover:text-white transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-blue-100 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, key) => (
                      <span
                        key={key}
                        className="
                          bg-blue-500/10 text-blue-400 py-1 px-3 rounded-full text-xs
                          hover:bg-blue-500/20 hover:shadow-[0_0_10px_rgba(59,130,246,0.3)]
                          transition-all
                        "
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex flex-col items-center">
                    {project.images.map((img, imgIndex) => (
                      <img
                        key={imgIndex}
                        src={img}
                        className="rounded-xl mb-3 w-full h-auto object-cover border border-blue-500/30"
                        alt={`Project ${index} screenshot ${imgIndex}`}
                      />
                    ))}
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        mt-2 px-4 py-2 bg-blue-600 text-white rounded-lg
                        hover:bg-blue-700 hover:shadow-[0_0_15px_rgba(59,130,246,0.6)]
                        transition-all duration-300
                        flex items-center gap-1
                      "
                    >
                      View Project
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </RevealOnSroll>
    </section>
  );
};

export default Projects;