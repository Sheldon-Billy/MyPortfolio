import React from "react";
import RevealOnSroll from "./RevealOnSroll";

const About = () => {
  const frontendSkills = ["React", "Tailwindcss", "HTML, CSS", "Type Script"];

  const backendSkills = ["Node.js", "Python Django", "Fast API"];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center "
    >
      <RevealOnSroll>
        <div className="max-w-3xl mx-auto px-4 flex flex-col items-center justify-center">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 via-blue-200 to to-blue-600 w-fit text-transparent bg-clip-text text-center">
            About me
          </h2>

          <div className="rounded-2xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
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
                <h3 className="text-xl font-bold mb-4">Frontend</h3>
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
                <h3 className="text-xl font-bold mb-4">Backend</h3>
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
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> 📚 Education </h3>
              <ul className=" text-gray-300 space-y-2">
                <li>
                  <strong> 🎓 B.S. in Information Technology </strong> -
                  Multimedia UNiversity of Kenya University (2022 - OnGoing)
                </li>
                <li>
                  Relevant Coursework: <br /> ✨ Data Structures <br /> ✨ Web
                  Development <br /> ✨ Cloud Computing <br /> ✨ Networking{" "}
                  <br /> ✨ DBMS <br /> ✨ AI & ML Intergration
                </li>
                <li>
                  <strong> 🎓 K.C.S.E</strong> - Kanyawanga High Scool (2018 -
                  2022)
                </li>
                <li>
                  <strong> 🎓 K.C.P.E</strong> - Rongo Shinners Academy{" "}
                </li>
              </ul>
            </div>
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> 💼 Work Experience </h3>
              <div className="space-y-4 text-gray-300">
                <div>
                  <h4 className="font-semibold"> Student (2022 - Present) </h4>
                  <p>
                    📌 Still working on Projects, comleting course works etc.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold">
                    {" "}
                    Attachee at Smart Touch Printers (2024 - 2 Months){" "}
                  </h4>
                  <p>
                    📌 ssisted in building front-end components and integration
                    REST APIs <br /> 📌 Assistend in Customer care and attenance{" "}
                    <br /> 📌 Maintained and serviced Network cables in Sever
                    room <br /> 📌 Created and configured Network Models
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold">
                    {" "}
                    Work Study Programme at MMU (2023 - Whole semester){" "}
                  </h4>
                  <p>
                    📌 Maintained and serviced Network cables in Sever room{" "}
                    <br /> 📌 Created and configured Network Models
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnSroll>
    </section>
  );
};

export default About;
