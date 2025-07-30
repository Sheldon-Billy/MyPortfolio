import RevealOnSroll from "./RevealOnSroll";
import { down } from "../assets/Pics";
import Sheldon from "../assets/Sheldon.jpeg";

const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col overflow-hidden"
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
        {[...Array(70)].map((_, i) => (
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
        <div className="relative mt-5 h-screen">

          {/* Profile image with glow effect on hover */}
          <div className="absolute left-30 top-40 group mx-auto w-48 h-80 mb-8 sm:w-40 sm:h-64 md:w-48 md:h-80">
            <img
              src={Sheldon}
              alt="Sheldon Billy"
              className="w-full h-full rounded-[30px] object-cover border-2 border-blue-500 shadow-lg transition-all duration-500 ease-in-out group-hover:shadow-[0_0_20px_#3b82f6]"
            />
            <div className="absolute inset-0 rounded-full border-2 border-transparent group-hover:border-blue-300 opacity-0 group-hover:opacity-100 transition-all duration-700 ease-out -z-10 animate-ping-slow" />
          </div>

          <h1 className="absolute top-40 left-90 bg-gradient-to-r from-blue-600 via-blue-200 to-blue-800 text-transparent bg-clip-text text-4xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold mb-5 font-serif tracking-tight">
            Hi, I'm Sheldon Billy.
          </h1>

          <p className="absolute top-60 left-90 mx-auto mb-8 max-w-lg text-sm sm:text-flex md:text-lg text-blue-100 leading-relaxed">
            I'm a developer who loves bringing ideas to life through code. I
            specialize in crafting intuitive user interfaces with React JS,
            Tailwind CSS, and JavaScript. My passion extends beyond the
            frontend, encompassing robust backend development with Django AI&ML
            and Express JS, and efficient data management using PostgreSQL and
            MongoDB.
          </p>

          {/* Buttons with improved hover effects */}
          <div className="absolute bottom-30 left-140 flex gap-4 sm:gap-3 md:gap-4">
            <a
              href="#projects"
              className="relative bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 sm:py-3 sm:px-6 rounded-lg font-medium transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-blue-500/30 group"
            >
              <span className="relative z-10 text-sm sm:text-base">View My Projects</span>
              <span className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
            </a>

            <a
              href="#contact"
              className="relative border-2 border-blue-500 text-blue-400 hover:text-white py-2 px-4 sm:py-3 sm:px-6 rounded-lg font-medium transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-blue-500/20 group overflow-hidden"
            >
              <span className="relative z-10 text-sm sm:text-base">Contact Me</span>
              <span className="absolute inset-0 bg-blue-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300 -z-10" />
              <span className="absolute inset-0 border-2 border-transparent group-hover:border-blue-300 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-lg -z-20" />
            </a>
          </div>

          {/* Quick Access Buttons */}
          <div className='absolute top-37 right-24 sm:top-32 sm:right-10 md:top-35 md:right-16 lg:top-37 lg:right-24 flex flex-col'>
            <h1 className='absolute right-15 w-40 sm:w-32 md:w-36 lg:w-40 font-extrabold text-sm sm:text-sm md:text-base lg:text-lg text-blue-300'>Quick Access</h1>

            {['My Projects', 'Pricing', 'Contact Sales', 'Consultants', 'Connect Me', 'Support Us', 'Reviews'].map((text, index) => (
              <button
                key={index}
                className={`
                  absolute 
                  ${index === 0 ? 'right-15 sm:right-12 md:right-14 lg:right-15' : ''}
                  ${index === 1 ? 'right-10 sm:right-8 md:right-10 lg:right-10' : ''}
                  ${index === 2 ? 'right-5 sm:right-4 md:right-6 lg:right-5' : ''}
                  ${index === 3 ? 'right-0 sm:right-0 md:right-2 lg:right-0' : ''}
                  ${index === 4 ? 'right-5 sm:right-4 md:right-6 lg:right-5' : ''}
                  ${index === 5 ? 'right-10 sm:right-8 md:right-10 lg:right-10' : ''}
                  ${index === 6 ? 'right-15 sm:right-12 md:right-14 lg:right-15' : ''}
                  top-${10 + index * 10} sm:top-${8 + index * 8} md:top-${9 + index * 9} lg:top-${10 + index * 10}
                  border-2 border-blue-400 rounded-xl px-3 py-1 sm:px-3 sm:py-1 md:px-4 md:py-2 w-40 sm:w-32 md:w-36 lg:w-40
                  text-xs sm:text-xs md:text-sm lg:text-base text-blue-100 font-medium
                  shadow-[0_0_15px_#3b82f6]
                  hover:shadow-[0_0_25px_#3b82f6]
                  hover:text-white
                  hover:border-blue-300
                  transition-all duration-150
                  bg-[#0a081a]/80 backdrop-blur-sm
                  hover:scale-110 hover:rotate-1 cursor-pointer
                  group
                `}
              >
                <span className='group-hover:text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-200'>
                  {text}
                </span>
              </button>
            ))}
          </div>
        </div>
      </RevealOnSroll>

      <div className="mt-10 z-10 absolute bottom-0 left-180 sm:left-1/2 sm:-translate-x-1/2 md:left-160 lg:left-180">
        <img
          src={down}
          alt="Scroll down"
          className="h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 animate-bounce opacity-80 hover:opacity-100 transition-opacity cursor-pointer"
        />
      </div>
    </section>
  );
};

export default Home;