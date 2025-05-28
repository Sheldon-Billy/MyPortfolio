import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-16">
      <div className="container mx-auto px-4 flex flex-col items-center">
        <div className="flex space-x-6 mb-4">
          {/* LinkedIn Icon and Link */}
          <a
            href="https://www.linkedin.com/in/sheldon-billy-151b662b3/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors duration-300"
            aria-label="LinkedIn Profile"
          >
            <svg
              className="w-8 h-8"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M19 0H5a5 5 0 00-5 5v14a5 5 0 005 5h14a5 5 0 005-5V5a5 5 0 00-5-5zM8.297 20.375h-2.92v-9.525h2.92v9.525zM6.83 9.47A1.674 1.674 0 015.155 7.72c.002-.924.764-1.674 1.676-1.674.912 0 1.652.75 1.674 1.674a1.674 1.674 0 01-1.675 1.75zM20.375 20.375h-2.918v-4.996c0-1.19-.023-2.722-1.657-2.722-1.658 0-1.914 1.29-1.914 2.637v5.081h-2.918v-9.525h2.793v1.282h.04c.387-.732 1.332-1.498 2.756-1.498C20.038 11.634 21 13.064 21 15.01v5.365z"
                clipRule="evenodd"
              />
            </svg>
          </a>

          {/* GitHub Icon and Link */}
          <a
            href="https://github.com/Sheldon-Billy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors duration-300"
            aria-label="GitHub Profile"
          >
            <svg
              className="w-8 h-8"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.499.09.682-.217.682-.483 0-.237-.008-.865-.013-1.697-2.782.602-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.618.068-.606.068-.606 1.004.07 1.532 1.03 1.532 1.03.892 1.529 2.341 1.088 2.91.83.091-.645.352-1.088.639-1.338-2.22-.253-4.555-1.116-4.555-4.954 0-1.096.391-1.996 1.03-2.7-.104-.253-.447-1.275.097-2.668 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.026 2.747-1.026.546 1.393.202 2.415.097 2.668.64.704 1.026 1.604 1.026 2.7 0 3.847-2.339 4.695-4.566 4.942.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.579.688.481C21.137 20.19 24 16.425 24 12.017 24 6.484 19.522 2 14 2h-2z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </div>
        <p className="text-gray-400 text-sm mb-2">
          &copy; {new Date().getFullYear()} Okoth Sheldon Billy. All rights
          reserved.
        </p>
        <p className="text-gray-500 text-xs">
          Built with React and Tailwind CSS
        </p>
      </div>
    </footer>
  );
};

export default Footer;
