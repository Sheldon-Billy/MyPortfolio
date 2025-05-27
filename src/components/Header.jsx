const Header = () => {
  return (
    <nav className="fixed top-0 w-full z-40 backdrop-blur-2xl shadow-lg sm:text-[10px] md:text-[15px] lg:text-[17px]">
      <div className="px-4 mx-auto max-w-5xl border-b border-white/20">
        <div className="flex justify-between items-center h-16">
          <a href="#home" className="hover:underline hover:text-blue-500">
            Hammattan{" "}
            <span className="text-blue-600 text-2xl font-[cursive]">.tech</span>
          </a>
          <ul className="flex gap-5 text-gray-300">
            <li className="hover:text-blue-600 hover:underline transition-colors cursor-pointer">
              <a href="#home">Home</a>
            </li>
            <li className="hover:text-blue-600 hover:underline transition-colors cursor-pointer">
              <a href="#about">About</a>
            </li>
            <li className="hover:text-blue-600 hover:underline transition-colors cursor-pointer">
              <a href="#projects">Projects</a>
            </li>
            <li className="hover:text-blue-600 hover:underline transition-colors cursor-pointer">
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
