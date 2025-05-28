import { Aidriven, Aidriven2, Dermatology } from "../assets/Pics";
import RevealOnSroll from "./RevealOnSroll";

const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnSroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            {" "}
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2">
                {" "}
                AI-driven crop disease detection and prevention system
              </h3>
              <p className="text-gray-400 mb-4">
                utilizing Python, machine learning, and computer vision to
                enable early identification and management of crop diseases, as
                well as React and JavaScript for the front end.​
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["React", "Node.js", "AWS", "Docker"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center flex-col">
                <img src={Aidriven2} className="rounded-2xl mt-2" />
                <img src={Aidriven} className="rounded-2xl mt-2" />
                <a
                  href=" https://lively-smoke-0fda9f70f.6.azurestaticapps.net/"
                  target="_blank"
                  className="text-white hover:text-yellow-400 transition-colors my-4 bg-blue-600 p-2 rounded-2xl shadow-[0_0_10px_blue] hover:-translate-y-1"
                >
                  View Project →
                </a>
              </div>
            </div>
            <div
              className="
              glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-blue-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
            >
              <h3 className="text-xl font-bold mb-2">
                Ai Powered Dermatology Assistant
              </h3>
              <p className="text-gray-400 mb-4">
                With a team of three, we developed an Ai powered Dermatology
                assistant, a software capable of diagnosing and giving immediate
                and effective recommendations to the user. This was achieved by
                leveraging Azure AI models and Api(s) and integrating AI agents.
                Tech stack include, React JS, Tailwind CSS, JS, ML, DL, and
                Django.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {[
                  "Python",
                  "TensorFlow",
                  "React js, TailwindCSS",
                  "ML & DL",
                ].map((tech, key) => (
                  <span
                    key={key}
                    className="
                      bg-blue-500/10 text-blue-500 py-1 px-3 
                      rounded-full text-sm
                      transition
                      hover:bg-blue-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center flex-col">
                <img src={Dermatology} className="rounded-2xl mt-2" />
                <a
                  href="https://purple-river-00fd8ef0f.6.azurestaticapps.net/ "
                  target="_blank"
                  className="text-white hover:text-yellow-400 transition-colors my-4 bg-blue-600 p-2 rounded-2xl shadow-[0_0_10px_blue] hover:-translate-y-1"
                >
                  View Project →
                </a>
              </div>
            </div>

            <div
              className="
              glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-blue-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
            >
              <h3 className="text-xl font-bold mb-2">E-Commerce Web App</h3>
              <p className="text-gray-400 mb-4">
                Full-stack e-commerce prototype with modern UI, secure payment
                integration, and customizable product inventory.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["React.js", "Node.js", "PostgreSQL"].map((tech) => (
                  <span
                    key={tech}
                    className="
                      bg-blue-500/10 text-blue-500 py-1 px-3 
                      rounded-full text-sm
                      transition
                      hover:bg-blue-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="#"
                  target="_blank"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>

            <div
              className="
              glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-blue-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
            >
              <h3 className="text-xl font-bold mb-2">Teams Profile</h3>
              <p className="text-gray-400 mb-4">
                Profile of three; My fellows who we code together with.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["React"].map((tech, key) => (
                  <span
                    key={key}
                    className="
                      bg-blue-500/10 text-blue-500 py-1 px-3 
                      rounded-full text-sm
                      transition
                      hover:bg-blue-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center ">
                <a
                  href="#"
                  target="_blank"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>
          </div>
        </div>
      </RevealOnSroll>
    </section>
  );
};

export default Projects;
