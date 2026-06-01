import RevealOnSroll from "./RevealOnSroll";
import { Comfortine, Esther, Leon, Me, Simo, Babe } from "../assets/Pics";

const testimonials = [
  {
    id: 0,
    name: "Sheldon Billy O.",
    handle: "@Hammattan.Tech",
    text: "Grateful for your support y'all. Through your encouragement, I keep pushing to the heights! 🚀",
    date: "2 days ago",
    likes: "10M",
    retweets: "500k",
    avatar: Me,
  },
  {
    id: 1,
    name: "John Vetans N.",
    handle: "@TechLeader",
    text: "Sheldon isn't your average developer — he actually builds useful features that solve real problems. His AI disease detection system is revolutionary!",
    date: "6 days ago",
    likes: "105k",
    retweets: "3k",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 2,
    name: "Elizabeth Mack E.",
    handle: "@HealthTechDirector",
    text: "I'm so impressed with Sheldon's work. Developer + AI skills = Magic 💫 Transformed our clinic's workflow with his dermatology assistant.",
    date: "1 week ago",
    likes: "42k",
    retweets: "12k",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: 3,
    name: "Hagai Leon O.",
    handle: "@IntroTech",
    text: "Developers, don't walk — run to work with Sheldon! No design skills? No problem. He prototyped in minutes what took others weeks.",
    date: "2 days ago",
    likes: "550k",
    retweets: "30k",
    avatar: Leon,
  },
  {
    id: 4,
    name: "Joanna K.",
    handle: "@DevOpsLead",
    text: "One of my favourite developers. His CI/CD pipeline is only 1 of 9 amazing skills he brings. The technical skills are just a small sliver of what he can do.",
    date: "1 month ago",
    likes: "31k",
    retweets: "8k",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    id: 5,
    name: "Michael T.",
    handle: "@BlockchainExpert",
    text: "Great developers like Sheldon empower teams. From zero to functional prototype in days — that's unbelievable.",
    date: "2 months ago",
    likes: "56k",
    retweets: "15k",
    avatar: "https://randomuser.me/api/portraits/men/75.jpg",
  },
];

const supporters = [
  {
    name: "Christine Kerubo M.",
    role: "Primary Supporter",
    company: "@GabiGeeks",
    avatar: Babe,
    quote: "Believed in his vision from day one.",
  },
  {
    name: "Comfortine Siwende",
    role: "Technical Advisor",
    company: "@NestLink",
    avatar: Comfortine,
    quote: "Provided invaluable AI guidance.",
  },
  {
    name: "Melvin Simon O.",
    role: "Career Supporter",
    company: "@XenixTechnologies",
    avatar: Simo,
    quote: "Helped shape my developer journey.",
  },
  {
    name: "Esther Wangui G.",
    role: "Technical Supporter",
    company: "@PomyYans",
    avatar: Esther,
    quote: "First to test his prototypes. Damn Crazy.",
  },
  {
    name: "Hagai Leon O.",
    role: "Legendary Developer",
    company: "@IntroTech",
    avatar: Leon,
    quote: "He's my senior junior. Keep pushing bruv!",
  },
];

const TestimonialCard = ({ t }) => (
  <div className="glass rounded-2xl p-6 hover:border-indigo-500/50 transition-all duration-300 mb-5">
    {/* Big quote mark */}
    <div className="text-indigo-400/40 text-5xl font-serif leading-none mb-3 select-none">"</div>

    {/* Text */}
    <p className="text-slate-200 text-base leading-relaxed mb-5">{t.text}</p>

    {/* Author row */}
    <div className="flex items-center gap-3 mb-4">
      <img
        src={t.avatar}
        alt={t.name}
        className="w-11 h-11 rounded-full object-cover border-2 border-indigo-500/40 flex-shrink-0"
        onError={(e) => { e.target.src = "https://randomuser.me/api/portraits/lego/1.jpg"; }}
      />
      <div>
        <p className="font-bold text-white text-sm">{t.name}</p>
        <p className="text-indigo-400 text-xs">{t.handle} · {t.date}</p>
      </div>
    </div>

    {/* Engagement */}
    <div className="flex gap-5 pt-3 border-t border-white/5 text-xs text-slate-500">
      <button className="flex items-center gap-1.5 hover:text-red-400 transition-colors">
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
        {t.likes}
      </button>
      <button className="flex items-center gap-1.5 hover:text-green-400 transition-colors">
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
        </svg>
        {t.retweets}
      </button>
      <button className="flex items-center gap-1.5 hover:text-indigo-400 transition-colors">
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 12h.01M12 12h.01M16 12h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
        Reply
      </button>
    </div>
  </div>
);

const SupporterCard = ({ s }) => (
  <div className="glass rounded-2xl p-5 hover:border-indigo-500/50 transition-all duration-300 group">
    <div className="flex items-center gap-4">
      <div className="relative flex-shrink-0">
        <img
          src={s.avatar}
          alt={s.name}
          className="w-16 h-16 rounded-full object-cover border-2 border-indigo-500/40 group-hover:border-indigo-400 transition-colors"
          onError={(e) => { e.target.src = "https://randomuser.me/api/portraits/lego/1.jpg"; }}
        />
        <span className="absolute bottom-0 right-0 w-4 h-4 bg-green-500 rounded-full border-2 border-[#080714]" />
      </div>
      <div className="min-w-0">
        <p className="font-bold text-white text-base truncate">{s.name}</p>
        <p className="text-indigo-400 text-sm">{s.company}</p>
        <p className="text-slate-500 text-xs mt-0.5">{s.role}</p>
      </div>
    </div>
    <p className="text-slate-400 text-sm italic mt-3 leading-relaxed">"{s.quote}"</p>
  </div>
);

/* Inline keyframes injected once */
const scrollStyles = `
  @keyframes scrollDown {
    0%   { transform: translateY(0); }
    100% { transform: translateY(-50%); }
  }
  @keyframes scrollUp {
    0%   { transform: translateY(-50%); }
    100% { transform: translateY(0); }
  }
`;

const ScrollColumn = ({ items, direction = "down" }) => {
  const doubled = [...items, ...items];
  const duration = `${items.length * 9}s`;
  return (
    <div className="relative overflow-hidden" style={{ height: 560 }}>
      <div className="absolute top-0 inset-x-0 h-14 bg-gradient-to-b from-[#080714] to-transparent z-10 pointer-events-none" />
      <div className="absolute bottom-0 inset-x-0 h-14 bg-gradient-to-t from-[#080714] to-transparent z-10 pointer-events-none" />
      <div
        style={{
          animation: `${direction === "down" ? "scrollDown" : "scrollUp"} ${duration} linear infinite`,
        }}
      >
        {doubled.map((t, i) => (
          <TestimonialCard key={`${t.id}-${i}`} t={t} />
        ))}
      </div>
    </div>
  );
};

const col1 = testimonials.filter((_, i) => i % 2 === 0);
const col2 = testimonials.filter((_, i) => i % 2 !== 0);

const Testimonials = () => (
  <section id="testimonials" className="py-24 relative">
    <style>{scrollStyles}</style>
    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-950/8 to-transparent pointer-events-none" />

    <div className="relative max-w-6xl mx-auto px-5 sm:px-8">

      {/* Header */}
      <RevealOnSroll>
        <div className="text-center mb-16">
          <p className="text-indigo-400 text-sm font-semibold uppercase tracking-widest mb-3">Social proof</p>
          <h2 className="section-title grad-text mb-4">What People Say</h2>
          <p className="text-slate-400 max-w-xl mx-auto text-base leading-relaxed">
            Feedback from colleagues, clients, and collaborators who've worked with me.
          </p>
        </div>
      </RevealOnSroll>

      {/* Supporters row — full width, horizontal scroll on mobile */}
      <RevealOnSroll>
        <div className="mb-14">
          <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-5 flex items-center gap-2">
            <span className="w-1 h-3.5 bg-indigo-500 rounded-full" />
            Supporters
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
            {supporters.map((s, i) => (
              <SupporterCard key={i} s={s} />
            ))}
          </div>
        </div>
      </RevealOnSroll>

      {/* Testimonials — two scrolling columns */}
      <RevealOnSroll>
        <div>
          <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-5 flex items-center gap-2">
            <span className="w-1 h-3.5 bg-purple-500 rounded-full" />
            Testimonials
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ScrollColumn items={col1} direction="down" />
            <ScrollColumn items={col2} direction="up" />
          </div>
        </div>
      </RevealOnSroll>

      {/* CTA */}
      <RevealOnSroll>
        <div className="mt-12 text-center">
          <a href="#contact" className="btn-outline inline-flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
            </svg>
            Leave a Review
          </a>
        </div>
      </RevealOnSroll>

    </div>
  </section>
);

export default Testimonials;
