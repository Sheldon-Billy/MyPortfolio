import RevealOnSroll from "./RevealOnSroll";
import { down } from "../assets/Pics";
import Sheldon from "../assets/Sheldon.jpeg";

const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col overflow-hidden relative"
    >
      {/* Subtle animated particles in the background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        {/* Large floating particles */}
        {[...Array(30)].map((_, i) => (
          <div
            key={`large-${i}`}
            className="absolute rounded-full"
            style={{
              width: `${Math.random() * 10 + 5}px`,
              height: `${Math.random() * 10 + 5}px`,
              background: `rgba(100, 200, 255, ${Math.random() * 0.3 + 0.1})`,
              top: `${Math.random() * 100}vh`,
              left: `${Math.random() * 100}vw`,
              animation: `float ${Math.random() * 20 + 50}s linear infinite`,
              filter: 'blur(1.5px)',
            }}
          />
        ))}

        {/* Small twinkling particles */}
        {[...Array(150)].map((_, i) => (
          <div
            key={`small-${i}`}
            className="absolute rounded-full"
            style={{
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              background: 'white',
              top: `${Math.random() * 100}vh`,
              left: `${Math.random() * 100}vw`,
              animation: `pulse ${Math.random() * 4 + 2}s ease-in-out infinite`,
              opacity: 0,
            }}
          />
        ))}
      </div>

      <RevealOnSroll>
        <div className="relative w-full h-screen px-4 md:px-8 lg:px-16 pt-2 md:pt-0">
          {/* Mobile layout - stacked */}
          <div className="md:hidden flex flex-col items-center pt-12">
            {/* Profile image */}
            <div className="w-48 h-48 mb-8 relative group ">
              <img
                src={Sheldon}
                alt="Sheldon Billy"
                className="w-full h-full rounded-[30px] object-cover border-2 border-blue-500 "
              />
            </div>

            {/* Content */}
            <h1 className="bg-gradient-to-r from-blue-600 via-blue-200 to-blue-800 text-transparent bg-clip-text font-extrabold text-[29px] mb-2 font-serif text-center">
              Hi, I'm Sheldon Billy.
            </h1>

            {/* For mobile */}
            <div className="md:hidden">
              <p className="text-sm text-blue-100 leading-relaxed mb-8 text-center">
                I'm a full-stack developer 🛡️ cybersecurity enthusiast with a passion for AI/ML 🤖.
                I specialize in crafting secure 🔒, intelligent interfaces with React JS ⚛️,
                Tailwind CSS, and JavaScript. My expertise bridges frontend magic ✨,
                AI-powered backend systems 🧠 (Django AI/ML + Express JS),
                secure data orchestration 💾 (PostgreSQL/MongoDB), and robust cyber defenses 🛡️.
                I build systems that don't just work – they learn 🔍, adapt 🔄, and protect 🔐.
              </p>
            </div>

            {/* For desktop - with original positioning */}
            <div className="hidden md:block">
              <p className="absolute top-60 left-90 w-lg text-lg text-blue-100 leading-relaxed">

                I'm a full-stack developer 🛡️ cybersecurity enthusiast with a passion for AI/ML 🤖.
                I specialize in crafting secure 🔒, intelligent interfaces with React JS ⚛️,
                Tailwind CSS, and JavaScript. My expertise bridges frontend magic ✨,
                AI-powered backend systems 🧠 (Django AI/ML + Express JS),
                secure data orchestration 💾 (PostgreSQL/MongoDB), and robust cyber defenses 🛡️.
                I build systems that don't just work – they learn 🔍, adapt 🔄, and protect 🔐.

              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <a
                href="#projects"
                className="relative bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-medium transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-blue-500/30 group"
              >
                <span className="relative z-10">View My Projects</span>
                <span className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
              </a>

              <a
                href="#contact"
                className="relative border-2 border-blue-500 text-blue-400 hover:text-white py-3 px-6 rounded-lg font-medium transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-blue-500/20 group overflow-hidden"
              >
                <span className="relative z-10">Contact Me</span>
                <span className="absolute inset-0 bg-blue-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300 -z-10" />
                <span className="absolute inset-0 border-2 border-transparent group-hover:border-blue-300 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-lg -z-20" />
              </a>
            </div>
          </div>

          {/* Desktop layout - original positioning */}
          <div className="hidden md:block relative h-full">
            {/* Profile image with original positioning */}
            <div className="absolute left-30 top-40 w-48 h-80">
              <img
                src={Sheldon}
                alt="Sheldon Billy"
                className="size-80 rounded-[30px] object-cover border-2 border-blue-500 shadow-lg transition-all duration-500 ease-in-out group-hover:shadow-[0_0_20px_#3b82f6]"
              />
              <div className="absolute inset-0 rounded-full border-2 border-transparent group-hover:border-blue-300 opacity-0 group-hover:opacity-100 transition-all duration-700 ease-out -z-10 animate-ping-slow" />
            </div>

            {/* Original text positioning */}
            <div>
              <h1 className="absolute top-40 left-90 bg-gradient-to-r from-blue-600 via-blue-200 to-blue-800 text-transparent bg-clip-text font-extrabold text-5xl mb-5 font-serif">
                Hi, I'm Sheldon Billy.
              </h1>
            </div>

            <p className="absolute top-60 left-90 w-lg text-lg text-blue-100 leading-relaxed">
              I'm a developer who loves bringing ideas to life through code. I
              specialize in crafting intuitive user interfaces with React JS,
              Tailwind CSS, and JavaScript. My passion extends beyond the
              frontend, encompassing robust backend development with Django AI&ML
              and Express JS, and efficient data management using PostgreSQL and
              MongoDB.
            </p>

            <div className="absolute bottom-30 left-140 flex gap-4">
              <a
                href="#projects"
                className="relative bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-medium transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-blue-500/30 group"
              >
                <span className="relative z-10">View My Projects</span>
                <span className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
              </a>

              <a
                href="#contact"
                className="relative border-2 border-blue-500 text-blue-400 hover:text-white py-3 px-6 rounded-lg font-medium transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-blue-500/20 group overflow-hidden"
              >
                <span className="relative z-10">Contact Me</span>
                <span className="absolute inset-0 bg-blue-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300 -z-10" />
                <span className="absolute inset-0 border-2 border-transparent group-hover:border-blue-300 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-lg -z-20" />
              </a>
            </div>

            {/* Original Quick Access buttons */}
            <div className='absolute top-37 right-24 flex flex-col'>
              <h1 className='absolute right-15 w-40 font-extrabold text-blue-300'>Quick Access</h1>

              <button className='absolute right-15 top-10 border-2 border-blue-400 rounded-xl px-4 py-2 w-50 text-blue-100 font-medium shadow-[0_0_15px_#3b82f6] hover:shadow-[0_0_25px_#3b82f6] hover:text-white hover:border-blue-300 transition-all duration-150 bg-[#0a081a]/80 ackdrop-blur-sm hover:scale-110 hover:rotate-1 cursor-pointer group'>
                <span className='group-hover:text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-200'>
                  My Projects
                </span>
              </button>

              <button className='absolute right-10 top-20 border-2 border-blue-400 rounded-xl px-4 py-2 w-50 text-blue-100 font-medium shadow-[0_0_15px_#3b82f6] hover:shadow-[0_0_25px_#3b82f6] hover:text-white hover:border-blue-300 transition-all duration-150 bg-[#0a081a]/80 backdrop-blur-sm hover:scale-110 hover:rotate-1 cursor-pointer group'>
                <span className='group-hover:text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-200'>
                  Pricing
                </span>
              </button>

              <button className='absolute right-5 top-30 border-2 border-blue-400 rounded-xl px-4 py-2 w-50 text-blue-100 font-medium shadow-[0_0_15px_#3b82f6] hover:shadow-[0_0_25px_#3b82f6] hover:text-white hover:border-blue-300 transition-all duration-150 bg-[#0a081a]/80 backdrop-blur-sm hover:scale-110 hover:rotate-1 cursor-pointer group'>
                <span className='group-hover:text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-200'>
                  Contact Sales
                </span>
              </button>

              <button className='absolute right-0 top-40 border-2 border-blue-400 rounded-xl px-4 py-2 w-50 text-blue-100 font-medium shadow-[0_0_15px_#3b82f6] hover:shadow-[0_0_25px_#3b82f6] hover:text-white hover:border-blue-300 transition-all duration-150 bg-[#0a081a]/80 backdrop-blur-sm hover:scale-110 hover:rotate-1 cursor-pointer group'>
                <span className='group-hover:text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-200'>
                  Consultants
                </span>
              </button>

              <button className='absolute right-5 top-50 border-2 border-blue-400 rounded-xl px-4 py-2 w-50 text-blue-100 font-medium shadow-[0_0_15px_#3b82f6] hover:shadow-[0_0_25px_#3b82f6] hover:text-white hover:border-blue-300 transition-all duration-150 bg-[#0a081a]/80 backdrop-blur-sm hover:scale-110 hover:rotate-1 cursor-pointer group'>
                <span className='group-hover:text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-200'>
                  Connect Me
                </span>
              </button>

              <button className='absolute right-10 top-60 border-2 border-blue-400 rounded-xl px-4 py-2 w-50 text-blue-100 font-medium shadow-[0_0_15px_#3b82f6] hover:shadow-[0_0_25px_#3b82f6] hover:text-white hover:border-blue-300 transition-all duration-150 bg-[#0a081a]/80 backdrop-blur-sm hover:scale-110 hover:rotate-1 cursor-pointer group'>
                <span className='group-hover:text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-200'>
                  Support Us
                </span>
              </button>

              <button className='absolute right-15 top-70 border-2 border-blue-400 rounded-xl px-4 py-2 w-50 text-blue-100 font-medium shadow-[0_0_15px_#3b82f6] hover:shadow-[0_0_25px_#3b82f6] hover:text-white hover:border-blue-300 transition-all duration-150 bg-[#0a081a]/80 backdrop-blur-sm hover:scale-110 hover:rotate-1 cursor-pointer group'>
                <span className='group-hover:text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-200'>
                  Reviews
                </span>
              </button>
            </div>
          </div>
        </div>
      </RevealOnSroll>

      {/* Scroll down indicator */}
      <div className="mt-10 z-10 absolute bottom-8 left-1/2 transform -translate-x-1/2 md:bottom-0 md:left-180 md:transform-none">
        <img
          src={down}
          alt="Scroll down"
          className="h-12 w-12 md:h-16 md:w-16 animate-bounce opacity-80 hover:opacity-100 transition-opacity cursor-pointer"
        />
      </div>
    </section>
  );
};

export default Home;