import { useState } from "react";
import emailjs from "emailjs-com";
import RevealOnSroll from "./RevealOnSroll";
import { FaGithub, FaLinkedin, FaWhatsapp, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { FiSend } from "react-icons/fi";

const contactInfo = [
  {
    icon: <FaEnvelope className="text-indigo-400 text-lg" />,
    label: "Email",
    value: "Sheldonbilly0723@gmail.com",
    href: "mailto:Sheldonbilly0723@gmail.com",
  },
  {
    icon: <FaWhatsapp className="text-green-400 text-lg" />,
    label: "WhatsApp",
    value: "+254 757 161 754",
    href: "https://wa.me/+254757161754",
  },
  {
    icon: <FaMapMarkerAlt className="text-red-400 text-lg" />,
    label: "Location",
    value: "Nairobi, Kenya",
    href: null,
  },
];

const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/Sheldon-Billy",
    icon: <FaGithub className="text-xl" />,
    bg: "hover:bg-slate-700 hover:text-white",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/sheldon-billy-151b662b3/",
    icon: <FaLinkedin className="text-xl" />,
    bg: "hover:bg-blue-600 hover:text-white",
  },
  {
    name: "WhatsApp",
    url: "https://wa.me/+254757161754",
    icon: <FaWhatsapp className="text-xl" />,
    bg: "hover:bg-green-600 hover:text-white",
  },
  {
    name: "Email",
    url: "mailto:Sheldonbilly0723@gmail.com",
    icon: <FaEnvelope className="text-xl" />,
    bg: "hover:bg-red-600 hover:text-white",
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus(null);
    try {
      await emailjs.sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_PUBLIC_KEY
      );
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-950/10 to-transparent pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-5 sm:px-8">

        {/* Header */}
        <RevealOnSroll>
          <div className="text-center mb-16">
            <p className="text-indigo-400 text-sm font-semibold uppercase tracking-widest mb-3">Let's talk</p>
            <h2 className="section-title grad-text mb-4">Get In Touch</h2>
            <p className="text-slate-400 max-w-xl mx-auto text-base leading-relaxed">
              Have a project in mind, a job opportunity, or just want to say hi? I'd love to hear from you.
            </p>
          </div>
        </RevealOnSroll>

        {/* Two equal columns */}
        <div className="grid lg:grid-cols-2 gap-10 items-start">

          {/* ── Left column ── */}
          <RevealOnSroll>
            <div className="space-y-6">

              {/* Contact details card */}
              <div className="glass rounded-2xl p-7">
                <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                  <span className="w-1 h-5 bg-indigo-500 rounded-full" />
                  Contact Details
                </h3>
                <div className="space-y-5">
                  {contactInfo.map((item) => (
                    <div key={item.label} className="flex items-center gap-4">
                      <div className="w-11 h-11 glass rounded-xl flex items-center justify-center flex-shrink-0">
                        {item.icon}
                      </div>
                      <div>
                        <p className="text-xs text-slate-500 mb-0.5">{item.label}</p>
                        {item.href ? (
                          <a
                            href={item.href}
                            className="text-base text-white hover:text-indigo-300 transition-colors font-medium"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-base text-white font-medium">{item.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social links card */}
              <div className="glass rounded-2xl p-7">
                <h3 className="text-lg font-bold text-white mb-5 flex items-center gap-2">
                  <span className="w-1 h-5 bg-indigo-500 rounded-full" />
                  Find Me Online
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {socialLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-3 p-4 glass rounded-xl text-slate-300 font-medium transition-all duration-200 ${link.bg}`}
                    >
                      {link.icon}
                      <span className="text-base">{link.name}</span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Availability badge */}
              <div className="glass rounded-2xl p-5 border border-green-500/25">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-2.5 h-2.5 bg-green-400 rounded-full animate-pulse" />
                  <span className="text-green-400 font-semibold">Available for Work</span>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Open to full-time roles, freelance projects, and collaborations.
                  Response time: within 24 hours.
                </p>
              </div>

            </div>
          </RevealOnSroll>

          {/* ── Right column — Form ── */}
          <RevealOnSroll>
            <div className="glass rounded-2xl p-7">
              <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                <span className="w-1 h-5 bg-indigo-500 rounded-full" />
                Send a Message
              </h3>

              {status === "success" && (
                <div className="mb-5 p-4 rounded-xl bg-green-500/10 border border-green-500/30 text-green-300">
                  ✅ Message sent! I'll get back to you soon.
                </div>
              )}
              {status === "error" && (
                <div className="mb-5 p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-300">
                  ❌ Something went wrong. Please try again or email me directly.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name + Email side by side */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-slate-400 mb-2 font-medium">Your Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      required
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-slate-600 text-base focus:outline-none focus:border-indigo-500/70 focus:bg-indigo-500/5 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-slate-400 mb-2 font-medium">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      required
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-slate-600 text-base focus:outline-none focus:border-indigo-500/70 focus:bg-indigo-500/5 transition-all"
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm text-slate-400 mb-2 font-medium">Message</label>
                  <textarea
                    name="message"
                    rows={7}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project or opportunity..."
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-slate-600 text-base focus:outline-none focus:border-indigo-500/70 focus:bg-indigo-500/5 transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full btn-primary flex items-center justify-center gap-2 py-4 text-base ${
                    isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      <FiSend className="text-lg" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </RevealOnSroll>

        </div>
      </div>
    </section>
  );
};

export default Contact;
