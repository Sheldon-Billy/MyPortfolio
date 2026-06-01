import {
  Badge1, Badge2, Badge3, Badge4,
  Cert1, Cert2, Cert3, Cert4, Cert5, Cert6, Cert7,
} from "../assets/Pics";
import RevealOnSroll from "./RevealOnSroll";
import { FiExternalLink } from "react-icons/fi";

const certificateItems = [
  {
    title: "Python & Django",
    issuer: "Udemy",
    image: Cert5,
    date: "Dec 2024",
    link: "https://www.udemy.com/certificate/UC-a8fca9d9-e606-427e-b0e9-50b8e6ce8163/",
  },
  {
    title: "HTML & CSS Basics",
    issuer: "Sololearn",
    image: Cert1,
    date: "Jan 2024",
    link: "https://www.sololearn.com/certificates/CC-DP7VSLB4",
  },
  {
    title: "Introduction to Python",
    issuer: "Sololearn",
    image: Cert2,
    date: "Jan 2024",
    link: "https://www.sololearn.com/certificates/CC-BME39LYN",
  },
  {
    title: "Ethical Hacking",
    issuer: "Sololearn",
    image: Cert3,
    date: "May 2024",
    link: "https://www.sololearn.com/certificates/",
  },
  {
    title: "AI & ML Fundamentals",
    issuer: "Ethic CodersPro",
    image: Cert4,
    date: "Sep 2024",
    link: "https://learn.microsoft.com/en-us/certifications/",
  },
  {
    title: "AWS Generative AI & ML",
    issuer: "Udacity / AWS",
    image: Cert6,
    date: "Aug 2025",
    link: "https://www.udacity.com/certificate/e/fcb43cca-5000-11f0-b4f9-6f86a84deecc",
  },
  {
    title: "JavaScript Algorithms",
    issuer: "freeCodeCamp",
    image: Cert7,
    date: "Sep 2024",
    link: "https://www.freecodecamp.org/certification/",
  },
];

const badgeItems = [
  {
    title: "AI Agents Hackathon",
    issuer: "Microsoft",
    image: Badge3,
    link: "https://www.credly.com/badges/edf431be-3f22-4cfb-a4ab-f97b440ea357/public_url",
  },
  {
    title: "ML Foundations",
    issuer: "Amazon Web Services",
    image: Badge1,
    link: "https://www.credly.com/badges/8180cb89-f07a-4901-bf22-d42ff978ec1c/public_url",
  },
  {
    title: "Intro to Cybersecurity",
    issuer: "Cisco Networking Academy",
    image: Badge2,
    link: "https://www.credly.com/badges/64d77c47-313f-42d5-bbf6-7bfba8525afb/public_url",
  },
  {
    title: "AWS AI & ML Scholars",
    issuer: "Udacity / AWS",
    image: Badge4,
    link: "https://www.udacity.com/certificate/e/fcb43cca-5000-11f0-b4f9-6f86a84deecc",
  },
];

const CertCard = ({ cert }) => (
  <div className="glass rounded-xl overflow-hidden group hover:border-indigo-500/40 transition-all duration-300 hover:-translate-y-1 w-56 flex-shrink-0 mx-2.5">
    <div className="relative h-36 overflow-hidden">
      <img
        src={cert.image}
        alt={cert.title}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        onError={(e) => { e.target.src = "https://via.placeholder.com/224x144?text=Certificate"; }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#080714]/70 to-transparent" />
    </div>
    <div className="p-4">
      <h3 className="text-sm font-bold text-white mb-1 leading-tight">{cert.title}</h3>
      <div className="flex items-center justify-between mb-3">
        <span className="text-indigo-400 text-xs font-medium">{cert.issuer}</span>
        <span className="text-slate-500 text-xs">{cert.date}</span>
      </div>
      <a
        href={cert.link}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-1 text-xs text-indigo-400 hover:text-indigo-300 font-medium transition-colors"
      >
        Verify <FiExternalLink className="text-xs" />
      </a>
    </div>
  </div>
);

const BadgeCard = ({ badge }) => (
  <div className="glass rounded-2xl p-5 group hover:border-indigo-500/40 transition-all duration-300 hover:-translate-y-1 w-52 flex-shrink-0 mx-2.5 flex flex-col items-center text-center">
    <div className="relative mb-3">
      <div className="absolute inset-0 rounded-full bg-indigo-500/20 blur-lg scale-110 opacity-0 group-hover:opacity-100 transition-opacity" />
      <img
        src={badge.image}
        alt={badge.title}
        className="w-24 h-24 object-contain rounded-full border-2 border-indigo-500/40 group-hover:border-indigo-400 transition-colors relative z-10"
      />
    </div>
    <h3 className="text-sm font-bold text-white mb-1 leading-tight">{badge.title}</h3>
    <p className="text-indigo-400 text-xs mb-3">{badge.issuer}</p>
    <a
      href={badge.link}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-1 text-xs text-indigo-400 hover:text-indigo-300 font-medium transition-colors"
    >
      View Badge <FiExternalLink className="text-xs" />
    </a>
  </div>
);

const Certifications = () => {
  const certs = [...certificateItems, ...certificateItems];
  const badges = [...badgeItems, ...badgeItems];

  return (
    <section id="certifications" className="py-24 overflow-hidden relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-950/10 to-transparent pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-5 sm:px-8">
        <RevealOnSroll>
          <div className="text-center mb-16">
            <p className="text-indigo-400 text-sm font-semibold uppercase tracking-widest mb-3">Credentials</p>
            <h2 className="section-title grad-text mb-4">Certifications & Badges</h2>
            <p className="text-slate-400 max-w-xl mx-auto text-base">
              Verified credentials from leading platforms including AWS, Microsoft, Cisco, Udacity, and more.
            </p>
          </div>
        </RevealOnSroll>

        {/* Certificates scroll */}
        <RevealOnSroll>
          <div className="mb-14">
            <h3 className="text-base font-semibold text-slate-300 mb-6 flex items-center gap-2">
              <span className="w-1 h-4 bg-indigo-500 rounded-full" />
              Certificates
              <span className="text-slate-600 text-sm font-normal">({certificateItems.length} total)</span>
            </h3>
            <div className="relative overflow-hidden">
              {/* Fade edges */}
              <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[#080714] to-transparent z-10 pointer-events-none" />
              <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#080714] to-transparent z-10 pointer-events-none" />
              <div className="flex w-max animate-scroll-left py-2">
                {certs.map((cert, i) => (
                  <CertCard key={i} cert={cert} />
                ))}
              </div>
            </div>
          </div>
        </RevealOnSroll>

        {/* Badges scroll */}
        <RevealOnSroll>
          <div>
            <h3 className="text-base font-semibold text-slate-300 mb-6 flex items-center gap-2">
              <span className="w-1 h-4 bg-purple-500 rounded-full" />
              Achievement Badges
              <span className="text-slate-600 text-sm font-normal">({badgeItems.length} total)</span>
            </h3>
            <div className="relative overflow-hidden">
              <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[#080714] to-transparent z-10 pointer-events-none" />
              <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#080714] to-transparent z-10 pointer-events-none" />
              <div className="flex w-max animate-scroll-right py-2">
                {badges.map((badge, i) => (
                  <BadgeCard key={i} badge={badge} />
                ))}
              </div>
            </div>
          </div>
        </RevealOnSroll>

        {/* All certs list */}
        <RevealOnSroll>
          <div className="mt-14 glass rounded-2xl p-6">
            <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-widest mb-5">All Achievements</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {[
                { name: "HTML & CSS Basics", org: "Sololearn", link: "https://www.sololearn.com/certificates/CC-DP7VSLB4" },
                { name: "Introduction to Python", org: "Sololearn", link: "https://www.sololearn.com/certificates/CC-BME39LYN" },
                { name: "ML Foundations", org: "Amazon / Credly", link: "https://www.credly.com/badges/8180cb89-f07a-4901-bf22-d42ff978ec1c/public_url" },
                { name: "Computer Hardware Basics", org: "Cisco / Credly", link: "https://www.credly.com/badges/e02be975-e3cb-4944-8075-480bbfe79df6/public_url" },
                { name: "AI Agents Hackathon", org: "Microsoft / Credly", link: "https://www.credly.com/badges/edf431be-3f22-4cfb-a4ab-f97b440ea357/public_url" },
                { name: "Intro to Cybersecurity", org: "Cisco / Credly", link: "https://www.credly.com/badges/64d77c47-313f-42d5-bbf6-7bfba8525afb/public_url" },
                { name: "AWS Generative AI & ML", org: "Udacity / AWS", link: "https://www.udacity.com/certificate/e/fcb43cca-5000-11f0-b4f9-6f86a84deecc" },
                { name: "Yeastar Certified Technician", org: "Yeastar", link: "https://ppfile-s3.yeastar.com/ppv3-resource/certificate/YSCT-PSE_CT37251110467_926.png" },
                { name: "CompTIA A+", org: "Alison", link: "#" },
              ].map((item) => (
                <a
                  key={item.name}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-lg hover:bg-indigo-500/8 transition-colors group"
                >
                  <div>
                    <p className="text-sm text-white font-medium group-hover:text-indigo-300 transition-colors">{item.name}</p>
                    <p className="text-xs text-slate-500">{item.org}</p>
                  </div>
                  <FiExternalLink className="text-slate-600 group-hover:text-indigo-400 transition-colors flex-shrink-0" />
                </a>
              ))}
            </div>
          </div>
        </RevealOnSroll>
      </div>
    </section>
  );
};

export default Certifications;
