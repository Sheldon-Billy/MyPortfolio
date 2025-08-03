import React from "react";
import RevealOnScroll from "./RevealOnSroll";
import {
  Babe,
  Comfortine,
  Esther,
  Leon,
  Me,
  Sheldon,
  Simo,
} from "../assets/Pics";

const Testimonials = () => {
  const testimonials = [
    {
      id: 0,
      name: "Sheldon Billy O.",
      handle: "~ @Hammattan.Tech",
      text: "Am Greatfull for your support y'all. Through your encouragement, i keep on pushing to the heights!🚀",
      date: "2 days ago",
      emoji: "💡",
      likes: "10M",
      retweets: "500k",
      avatar: Me,
    },
    {
      id: 1,
      name: "John Vetans N.",
      handle: "~ @TechLeader",
      text: "Sheldon isn't your average developer - he actually builds useful features that solve real problems. His AI disease detection system is revolutionary!",
      date: "6 days ago",
      emoji: "💡",
      likes: "105k",
      retweets: "3k",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      id: 2,
      name: "Elizabeth Mack E.",
      handle: "~ @HealthTechDirector",
      text: "I'm so impressed with Sheldon's work. Developer + AI skills = Magic 💫 Transformed our clinic's workflow with his dermatology assistant.",
      date: "1 week ago",
      emoji: "💫",
      likes: "42k",
      retweets: "12k",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      id: 3,
      name: "Hagai Leon O.",
      handle: "~ @IntroTech",
      text: "Developers, don't walk, run to work with Sheldon! No design skills? No problem. He prototyped in minutes what took others weeks.",
      date: "2 days ago",
      emoji: "🚀",
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
      emoji: "✨",
      likes: "31k",
      retweets: "8k",
      avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    },
    {
      id: 5,
      name: "Michael T.",
      handle: "@BlockchainExpert",
      text: "Great developers like Sheldon empower teams. From zero to functional blockchain prototype in days, that's unbelievable.",
      date: "2 months ago",
      emoji: "🔥",
      likes: "56k",
      retweets: "15k",
      avatar: "https://randomuser.me/api/portraits/men/75.jpg",
    },
  ];

  const supporters = [
    {
      name: "Data Analyst Leader Inc.",
      jina: "Christine Kerubo M.",
      role: "Primary Supporter",
      company: "@GabiGeeks",
      avatar: Babe,
      quote: "Believed in his vision from day one.",
      stats: {
        likes: "42k",
        retweets: "12k",
        shares: "8k",
        replies: "5k",
      },
    },
    {
      name: "OpenAI Community",
      jina: "Comfortine Siwende O.",
      role: "Technical Advisor",
      company: "@NestLink",
      avatar: Comfortine,
      quote: "Provided invaluable AI guidance",
      stats: {
        likes: "38k",
        retweets: "15k",
        shares: "6k",
        replies: "3k",
      },
    },
    {
      name: "Dev Mentors Group",
      jina: "Melvin Simon O.",
      role: "Career Supporter",
      company: "@XenixTechnologies",
      avatar: Simo,
      quote: "Helped shape my developer journey",
      stats: {
        likes: "56k",
        retweets: "18k",
        shares: "9k",
        replies: "7k",
      },
    },
    {
      name: "Data Enthusiast",
      jina: "Esther Wangui G.",
      role: "Technical Supporter",
      company: "@PomyYans",
      avatar: Esther,
      quote: "First to test his prototypes. Damn Crazy",
      stats: {
        likes: "129k",
        retweets: "7k",
        shares: "4k",
        replies: "2k",
      },
    },
    {
      name: "ICT Pro.Expert",
      jina: "Hagai Leon O.",
      role: "Lengendary developer",
      company: "@IntroTech",
      avatar: Leon,
      quote: "He's My senior Junior. Keep Pushing Bruv!",
      stats: {
        likes: "129k",
        retweets: "7k",
        shares: "4k",
        replies: "2k",
      },
    },
  ];

  return (
    <section
      id="testimonials"
      className="py-12 md:py-20 bg-gradient-to-br from-[#130d41] to-[#070420]"
    >
      <RevealOnScroll>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-600 bg-clip-text text-transparent text-center">
            What People Are Saying about my Work
          </h2>

          <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
            {/* Left column - Supporters */}
            <div className="lg:block lg:w-1/4 xl:w-90 space-y-6 shadow-[0_0_30px_blue]">
              {supporters.map((supporter, index) => (
                <div
                  key={index}
                  className="bg-[#0a081a]/70 backdrop-blur-sm border border-blue-500 rounded-xl p-4 hover:shadow-[0_0_30px_rgba(59,130,246,0.2)] transition-all duration-300 group"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <img
                      src={supporter.avatar}
                      alt={supporter.name}
                      className="w-20 h-20 rounded-full object-cover border border-blue-500 transition-transform duration-500"
                    />
                    <div>
                      <h3 className="text-lg font-bold text-[#0aff0a] group-hover:text-white transition-colors duration-300">
                        {supporter.name}
                      </h3>
                      <p className="text-blue-400 text-[20px]">
                        {supporter.jina}
                      </p>
                      <p className="text-blue-200 text-[15px] cursor-pointer hover:underline">
                        {supporter.company}
                      </p>
                      <p className="text-blue-400 text-xs">{supporter.role}</p>
                    </div>
                  </div>

                  <div className="relative overflow-hidden mb-3 h-8">
                    <div className="flex w-max animate-scroll-quote">
                      <p className="text-blue-100 text-sm italic whitespace-nowrap pr-8">
                        "{supporter.quote}" • "{supporter.quote}" •
                      </p>
                    </div>
                  </div>

                  <div className="flex justify-between text-xs border-t border-blue-500/30 pt-3">
                    <button
                      className="social-btn hover:text-red-400"
                      aria-label="Like"
                    >
                      <span className="emoji animate-heartbeat">❤️</span>
                      <span>{supporter.stats.likes}</span>
                    </button>
                    <button
                      className="social-btn hover:text-green-400"
                      aria-label="Retweet"
                    >
                      <span className="emoji animate-spin-slow">🔁</span>
                      <span>{supporter.stats.retweets}</span>
                    </button>
                    <button
                      className="social-btn hover:text-blue-300"
                      aria-label="Share"
                    >
                      <span className="emoji animate-bounce-slow">📤</span>
                      <span>{supporter.stats.shares}</span>
                    </button>
                    <button
                      className="social-btn hover:text-yellow-300"
                      aria-label="Reply"
                    >
                      <span className="emoji animate-wiggle">💬</span>
                      <span>{supporter.stats.replies}</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Right column - Testimonials */}
            <div className="w-full lg:w-3/4 xl:w-4/5">
              <div className="testimonials-container h-[400px] md:h-[1150px] overflow-hidden shadow-[0_0_30px_blue] rounded-xl">
                <div className="testimonials-content">
                  {[...testimonials, ...testimonials].map(
                    (testimonial, index) => (
                      <div
                        key={`${testimonial.id}-${index}`}
                        className="testimonial-card bg-[#0a081a]/70 backdrop-blur-sm border border-blue-500 rounded-lg md:rounded-xl p-4 md:p-5 hover:shadow-[0_0_20px_rgba(59,130,246,0.2)] transition-all duration-300"
                      >
                        <div className="flex items-start gap-3 mb-3">
                          <img
                            src={testimonial.avatar}
                            alt={testimonial.name}
                            className="w-10 h-10 md:w-15 md:h-15 rounded-full object-cover"
                          />
                          <div className="flex-1 min-w-0">
                            <div className="flex flex-wrap items-center gap-1 md:gap-2">
                              <h3 className="font-bold text-[#0aff0a] text-sm md:text-base">
                                {testimonial.name}
                              </h3>
                              <span className="text-blue-400 text-xs md:text-xl">
                                {testimonial.handle}
                              </span>
                              <span className="text-blue-400/60 text-xs md:text-sm">
                                {testimonial.date}
                              </span>
                            </div>
                            <p className="text-blue-100 mt-2 mb-3 text-sm md:text-base">
                              {testimonial.text} {testimonial.emoji}
                            </p>
                            <div className="flex gap-3 md:gap-4 text-blue-400 text-xs md:text-sm">
                              <button className="flex items-center gap-1 hover:text-blue-300 text-[orange]">
                                <svg
                                  className="w-3 h-3 md:w-4 md:h-4"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="1.5"
                                    d="M8 12h.01M12 12h.01M16 12h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                                  />
                                </svg>
                                <span>Reply</span>
                              </button>
                              <button className="flex items-center gap-1 hover:text-blue-300 text-[#009700]">
                                <svg
                                  className="w-3 h-3 md:w-4 md:h-4"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="1.5"
                                    d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
                                  />
                                </svg>
                                <span>{testimonial.retweets}</span>
                              </button>
                              <button className="flex items-center gap-1 hover:text-blue-300 text-[#c02b2b]">
                                <svg
                                  className="w-3 h-3 md:w-4 animate-heartbeat"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="1.5"
                                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                                  />
                                </svg>
                                <span>{testimonial.likes}</span>
                              </button>
                              <button className="flex items-center gap-1 hover:text-blue-300 text-purple-700">
                                <svg
                                  className="w-3 h-3 md:w-4 md:h-4"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="1.5"
                                    d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                                  />
                                </svg>
                                <span>Share</span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 text-center">
            <a
              href="#contact"
              className="inline-flex items-center border-2 border-blue-500 text-blue-400 hover:text-white hover:bg-blue-500/10 py-2 px-6 md:py-3 md:px-8 rounded-full font-medium transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] text-sm md:text-base"
            >
              <svg
                className="w-4 h-4 md:w-5 md:h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                />
              </svg>
              See More Testimonials
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default Testimonials;
