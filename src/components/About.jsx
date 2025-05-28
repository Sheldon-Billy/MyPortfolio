import React from "react";
import RevealOnSroll from "./RevealOnSroll";
import CV from "../assets/CV.pdf";

const About = () => {
  const frontendSkills = ["React", "Tailwindcss", "HTML, CSS", "Type Script"];

  const backendSkills = ["Node.js", "Python Django", "Fast API"];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20" // Added py-20 for consistent spacing
    >
      <RevealOnSroll>
        <div className="max-w-3xl mx-auto px-4 flex flex-col items-center justify-center">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 via-blue-200 to to-blue-600 w-fit text-transparent bg-clip-text text-center">
            About me
          </h2>

          <div className="rounded-2xl p-8  border-[#7c7c7c] border-1 hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-8 text-center">
              I am passionate about leveraging the power of technology to create
              impactful and intelligent solutions that address real-world
              challenges. My enthusiasm lies in crafting intuitive user
              experiences through frontend development, while also diving deep
              into backend systems, machine learning, and AI to build innovative
              and comprehensive applications.
            </p>
            {/* frontend skills */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Frontend 🖥️</h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              {/* backend skills */}
              <div className="rounded-xl hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Backend 🗄️ </h3>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-xl border-[#a2a2a2] border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4 "> 📚 Education </h3>
              <ul className=" text-gray-300 space-y-2">
                <li>
                  <strong className="text-[#6666d9]">
                    {" "}
                    🎓 B.S. in Information Technology{" "}
                  </strong>{" "}
                  -
                  <span className="text-[#d5d5ff]">
                    {" "}
                    Multimedia UNiversity of Kenya University [cite: 1]
                  </span>{" "}
                  (2022 - OnGoing) [cite: 1]
                </li>
                <li>
                  Relevant Coursework: <br /> ✨ Data Structures <br /> ✨ Web
                  Development <br /> ✨ Cloud Computing <br /> ✨ Networking{" "}
                  <br /> ✨ DBMS <br /> ✨ AI & ML Intergration
                </li>
                <li>
                  <strong className="text-[#6666d9]"> 🎓 K.C.S.E</strong> -
                  Kanyawanga High Scool (2018 - 2022)
                </li>
                <li>
                  <strong className="text-[#6666d9]"> 🎓 K.C.P.E</strong> -
                  Rongo Shinners Academy{" "}
                </li>
              </ul>
            </div>
            <div className="p-6 rounded-xl border-[#959595] border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> 💼 Work Experience </h3>
              <div className="space-y-4 text-gray-300">
                <div>
                  <h4 className="font-semibold text-[#6666d9]">
                    {" "}
                    Student (2022 - Present){" "}
                  </h4>
                  <p>
                    📌 Still working on Projects, comleting course works etc.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-[#6666d9]">
                    {" "}
                    Attachee at Smart Touch Printers (2024 - 2 Months){" "}
                  </h4>
                  <p>
                    📌 Front-end integration & REST APIs <br /> 📌 Customer care
                    and attenance <br /> 📌 Network Configuration Models <br />{" "}
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-[#6666d9]">
                    {" "}
                    Work Study Programme at MMU (2023 - Whole semester){" "}
                  </h4>
                  <p>
                    📌 Network Configuration [cite: 2] <br /> 📌 IT Related
                    Tasks assigned [cite: 2]
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Download CV Section - Added at the bottom */}
          <div className="mt-12 text-center">
            <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent">
              Want to learn more?
            </h3>
            <a
              href={CV}
              download="Sheldon_Billy_CV.pdf" // This will suggest the download filename
              className="inline-flex items-center bg-blue-600 text-white py-3 px-8 rounded-full font-medium transition-all duration-300
                         hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(59,130,246,0.6)] hover:bg-blue-700
                         focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75"
            >
              <svg
                className="w-5 h-5 mr-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H5a2 2 0 01-2-2v-7a2 2 0 012-2h14a2 2 0 012 2v7a2 2 0 01-2 2z"
                ></path>
              </svg>
              Download My CV
            </a>
          </div>
          {/* End of Download CV Section */}
        </div>
      </RevealOnSroll>
    </section>
  );
};

export default About;
