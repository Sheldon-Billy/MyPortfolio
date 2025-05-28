import { useState } from "react";
import emailjs from "emailjs-com";
import RevealOnSroll from "./RevealOnSroll";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then((result) => {
        alert("Message Sent!");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => alert("Oops! Something went wrong. Please try again."));
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnSroll>
        <div className="px-4 w-full min-w-[300px] md:w-[500px] sm:w-2/3 p-6">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-600 via-cyan-400 to-blue-600 bg-clip-text text-transparent text-center">
            {" "}
            Get In Touch
          </h2>
          <form className="space-y-6 mb-8" onSubmit={handleSubmit}>
            <div className="relative">
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                className="w-full bg-white/5 border border-[#6f6400] rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                placeholder="Name..."
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
            </div>

            <div className="relative">
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                className="w-full bg-white/5 border border-[#6f6400] rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                placeholder="example@gmail.com"
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </div>

            <div className="relative">
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={formData.message}
                className="w-full bg-white/5 border border-[#6f6400] rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                placeholder="Your Message..."
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
            >
              Send Message
            </button>
          </form>

          {/* Social Media Links Section - Added Below the form */}
          <div className="text-center mt-8">
            <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Or Connect Directly
            </h3>
            <div className="flex justify-center space-x-6">
              {/* GitHub Link */}
              <a
                href="https://github.com/Sheldon-Billy"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-400 text-white transition-colors duration-300"
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

              {/* LinkedIn Link */}
              <a
                href="https://www.linkedin.com/in/sheldon-billy-151b662b3/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-400 text-blue-500 transition-colors duration-300"
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

              {/* WhatsApp Link */}
              <a
                href="https://wa.me/+254757161754"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-400 text-green-500 transition-colors duration-300"
                aria-label="WhatsApp"
              >
                <svg
                  className="w-8 h-8"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M12.04 2c-5.45 0-9.91 4.46-9.91 9.91 0 1.75.5 3.44 1.45 4.96L2 22l5.25-1.38c1.47.8 3.12 1.25 4.79 1.25 5.45 0 9.91-4.46 9.91-9.91S17.49 2 12.04 2zm0 18c-1.54 0-3-.42-4.29-1.18l-.3-.18-3.14.82.84-3.04-.2-.31c-.88-1.39-1.35-2.99-1.35-4.66 0-4.5 3.68-8.19 8.19-8.19s8.19 3.68 8.19 8.19c0 4.5-3.67 8.19-8.19 8.19zm4.56-6.16c-.25-.12-.8-.4-.92-.45-.12-.04-.26-.06-.37.04-.11.12-.42.45-.52.54-.1.1-.2.12-.37.04-.18-.06-.74-.27-1.42-.87-.52-.47-.87-1.05-.98-1.22-.11-.17-.01-.26.09-.35.09-.09.2-.25.3-.37.1-.12.14-.2.2-.31.06-.11.03-.2.01-.31-.02-.12-.37-.9-.52-1.22-.16-.31-.32-.26-.45-.26-.12 0-.25-.02-.37-.02-.12 0-.31.04-.48.2-.17.16-.65.64-.65 1.56 0 .92.67 1.8.76 1.94.09.14 1.34 2.06 3.25 2.89.43.19.77.3 1.04.39.29.1.56.08.77.05.21-.02.6-.25.69-.47.09-.23.09-.4.06-.47-.02-.07-.08-.12-.17-.16z" />
                </svg>
              </a>

              {/* Email Link */}
              <a
                href="mailto:Sheldonbilly0723@gmail.com"
                className="hover:text-gray-400 text-red-500 transition-colors duration-300"
                aria-label="Email Address"
              >
                <svg
                  className="w-8 h-8"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M22 4H2C0.89 4 0 4.89 0 6V18C0 19.11 0.89 20 2 20H22C23.11 20 24 19.11 24 18V6C24 4.89 23.11 4 22 4ZM20 6L12 11L4 6H20ZM2 18V6L12 13L22 6V18H2Z" />
                </svg>
              </a>
            </div>
          </div>
          {/* End of Social Media Links Section */}
        </div>
      </RevealOnSroll>
    </section>
  );
};

export default Contact;
