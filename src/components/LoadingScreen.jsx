const LoadingScreen = () => {
  return (
    // Container
    <div className="flex flex-col gap-5 inset-0 fixed items-center justify-center ">
      {/* loading text */}
      <div className="text-3xl text-white ">
        {" "}
        Hi 👋, Happy to visit my portfolio...{" "}
        <span className="animate-spin text-blue-500 "> | </span>
      </div>

      {/* progress bar */}
      <div className="w-[350px] h-[2px] bg-gray-800 rounded-2xl">
        <div className="bg-blue-500 shadow-[0_0_15px_blue] h-full w-[30%] animate-loading-bar"></div>
      </div>
    </div>
  );
};

export default LoadingScreen;
