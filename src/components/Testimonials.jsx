import React, { useRef, useEffect } from "react";
import RevealOnScroll from "./RevealOnSroll";

const Testimonials = () => {
    const testimonials = [
        {
            id: 1,
            name: "John Vetans",
            handle: "@TechLeader",
            text: "Sheldon isn't your average developer - he actually builds useful features that solve real problems. His AI disease detection system is revolutionary!",
            date: "2 days ago",
            emoji: "💡",
            likes: "105k",
            retweets: "5",
            avatar: "https://randomuser.me/api/portraits/men/32.jpg"
        },
        {
            id: 2,
            name: "Elizabeth M.",
            handle: "@HealthTechDirector",
            text: "I'm so impressed with Sheldon's work. Developer + AI skills = Magic 💫 Transformed our clinic's workflow with his dermatology assistant.",
            date: "1 week ago",
            emoji: "💫",
            likes: "42",
            retweets: "12",
            avatar: "https://randomuser.me/api/portraits/women/44.jpg"
        },
        {
            id: 3,
            name: "Aadi Sheth",
            handle: "@StartupFounder",
            text: "Developers, don't walk, run to work with Sheldon! No design skills? No problem. He prototyped in minutes what took others weeks.",
            date: "3 weeks ago",
            emoji: "🚀",
            likes: "18",
            retweets: "3",
            avatar: "https://randomuser.me/api/portraits/men/22.jpg"
        },
        {
            id: 4,
            name: "Joanna K.",
            handle: "@DevOpsLead",
            text: "One of my favourite developers. His CI/CD pipeline is only 1 of 9 amazing skills he brings. The technical skills are just a small sliver of what he can do.",
            date: "1 month ago",
            emoji: "✨",
            likes: "31",
            retweets: "8",
            avatar: "https://randomuser.me/api/portraits/women/68.jpg"
        },
        {
            id: 5,
            name: "Michael T.",
            handle: "@BlockchainExpert",
            text: "Great developers like Sheldon empower teams. From zero to functional blockchain prototype in days, that's unbelievable.",
            date: "2 months ago",
            emoji: "🔥",
            likes: "56",
            retweets: "15",
            avatar: "https://randomuser.me/api/portraits/men/75.jpg"
        }
    ];

    const containerRef = useRef(null);
    const contentRef = useRef(null);

    useEffect(() => {
        const container = containerRef.current;
        const content = contentRef.current;

        // Clone the content for seamless looping
        content.innerHTML += content.innerHTML;

        let scrollPos = 0;
        const speed = 30; // pixels per second

        const scroll = () => {
            scrollPos += speed / 60;
            if (scrollPos >= content.scrollHeight / 2) {
                scrollPos = 0;
            }
            container.scrollTop = scrollPos;
            requestAnimationFrame(scroll);
        };

        scroll();

        return () => cancelAnimationFrame(scroll);
    }, []);

    return (
        <section id="testimonials" className="py-20 bg-gradient-to-br from-[#130d41] to-[#070420]">
            <RevealOnScroll>
                <div className="max-w-7xl mx-auto px-4">
                    <h2 className="text-4xl md:text-4xl font-bold mb-16 bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-600 bg-clip-text text-transparent text-center">
                        What People Are Saying about my Work
                    </h2>

                    {/* Main content with two columns */}
                    <div className="flex flex-col lg:flex-row gap-8">
                        {/* Left column - Process steps */}
                        <div className="w-60 space-y-8">
                            <div className="bg-[#0a081a]/70 backdrop-blur-sm border border-blue-500 rounded-xl p-6 hover:shadow-[0_0_30px_rgba(59,130,246,0.2)] transition-all duration-300">
                                <h3 className="text-2xl font-bold text-[#0aff0a] mb-4">Choose the device</h3>
                                <p className="text-blue-100">Select whether you're designing for mobile, tablet, or desktop.</p>
                            </div>

                            <div className="bg-[#0a081a]/70 backdrop-blur-sm border border-blue-500 rounded-xl p-6 hover:shadow-[0_0_30px_rgba(59,130,246,0.2)] transition-all duration-300">
                                <h3 className="text-2xl font-bold text-[#0aff0a] mb-4">Write prompt</h3>
                                <p className="text-blue-100">Describe what you want to create in natural language.</p>
                            </div>

                            <div className="bg-[#0a081a]/70 backdrop-blur-sm border border-blue-500 rounded-xl p-6 hover:shadow-[0_0_30px_rgba(59,130,246,0.2)] transition-all duration-300">
                                <h3 className="text-2xl font-bold text-[#0aff0a] mb-4">Choose the design style</h3>
                                <p className="text-blue-100">Pick from modern, minimalist, professional, or other styles.</p>
                            </div>

                            <div className="bg-[#0a081a]/70 backdrop-blur-sm border border-blue-500 rounded-xl p-6 hover:shadow-[0_0_30px_rgba(59,130,246,0.2)] transition-all duration-300">
                                <h3 className="text-2xl font-bold text-[#0aff0a] mb-4">Generate</h3>
                                <p className="text-blue-100">Let the AI create your design in seconds.</p>
                            </div>
                        </div>

                        {/* Right column - Testimonials */}
                        <div className="w-250">
                            <div
                                ref={containerRef}
                                className="relative h-[815px] overflow-hidden shadow-[10px_0px_30px_blue]"
                            >
                                <div
                                    ref={contentRef}
                                    className="grid grid-cols-1 md:grid-cols-2 gap-6"
                                >
                                    {[...testimonials, ...testimonials].map((testimonial, index) => (
                                        <div
                                            key={`${testimonial.id}-${index}`}
                                            className="bg-[#0a081a]/70 backdrop-blur-sm border border-blue-500 rounded-xl p-5 hover:shadow-[0_0_30px_rgba(59,130,246,0.2)] transition-all duration-300"
                                        >
                                            <div className="flex items-start gap-3 mb-3">
                                                <img
                                                    src={testimonial.avatar}
                                                    alt={testimonial.name}
                                                    className="w-12 h-12 rounded-full object-cover border border-blue-500"
                                                />
                                                <div className="flex-1 min-w-0">
                                                    <div className="flex items-center gap-2 flex-wrap">
                                                        <h3 className="font-bold text-[#0aff0a]">{testimonial.name}</h3>
                                                        <span className="text-blue-400 text-sm">{testimonial.handle}</span>
                                                        <span className="text-blue-400/60 text-sm">{testimonial.date}</span>
                                                    </div>
                                                    <p className="text-blue-100 mt-2 mb-3">
                                                        {testimonial.text} {testimonial.emoji}
                                                    </p>
                                                    <div className="flex gap-4 text-blue-400 text-sm">
                                                        <button className="flex items-center gap-1 hover:text-blue-300 text-[orange]">
                                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                                            </svg>
                                                            <span>Reply</span>
                                                        </button>
                                                        <button className="flex items-center gap-1 hover:text-blue-300 text-[#009700]">
                                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                                                            </svg>
                                                            <span>{testimonial.retweets}</span>
                                                        </button>
                                                        <button className="flex items-center gap-1 hover:text-blue-300 text-[#c02b2b]">
                                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                                            </svg>
                                                            <span>{testimonial.likes}</span>
                                                        </button>
                                                        <button className="flex items-center gap-1 hover:text-blue-300 text-purple-700">
                                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                                                            </svg>
                                                            <span>Share</span>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* Gradient fades */}
                                <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-[#120c45] to-transparent z-10"></div>
                                <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#120c45] to-transparent z-10"></div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-12 text-center">
                        <a
                            href="#contact"
                            className="inline-flex items-center border-2 border-blue-500 text-blue-400 hover:text-white hover:bg-blue-500/10 py-3 px-8 rounded-full font-medium transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(59,130,246,0.3)]"
                        >
                            <svg
                                className="w-5 h-5 mr-2"
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