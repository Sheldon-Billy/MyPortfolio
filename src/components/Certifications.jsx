import { Badge1, Badge2, Badge3, Cert1, Cert2, Cert3, Cert4, Cert5 } from "../assets/Pics";
import RevealOnSroll from "./RevealOnSroll";

const Certifications = () => {
    // Certificates Data - properly duplicated for seamless animation
    const certificateItems = [
        {
            title: "Python & Django",
            issuer: "Udemy",
            image: Cert5,
            date: "Dec 4th 2024",
            credentialId: "UC-a8fca9d9-e606-427e-b0e9-50b8e6ce8163",
            link: "https://www.udemy.com/certificate/UC-a8fca9d9-e606-427e-b0e9-50b8e6ce8163/"
        },
        {
            title: "Introduction to HTML",
            issuer: "Sololearn",
            image: Cert1,
            date: "Jan 2024",
            credentialId: "CC-DP7V5LB4",
            link: "https://www.sololearn.com/certificates/CC-DP7V5LB4"
        },
        {
            title: "Introduction to Python",
            issuer: "Sololearn",
            image: Cert2,
            date: "Jan 2024",
            credentialId: "CC-BME39LYN",
            link: "https://www.sololearn.com/certificates/CC-BME39LYN"
        },
        {
            title: "Certified Ethical Hacker",
            issuer: "Cisco Networking Academy",
            image: Cert3,
            date: "2023",
            credentialId: "CEH-123456",
            link: "https://www.eccouncil.org/programs/certified-ethical-hacker-ceh/"
        },
        {
            title: "AI & Machine Learning Fundamentals",
            issuer: "Microsoft",
            image: Cert4,
            date: "2023",
            credentialId: "AI-ML-7890",
            link: "https://learn.microsoft.com/en-us/certifications/exams/ai-900/"
        },
        {
            title: "Advanced CSS Certification",
            issuer: "freeCodeCamp",
            image: Cert2,
            date: "2023",
            credentialId: "CSS-2023",
            link: "https://www.freecodecamp.org/certification/"
        },
        {
            title: "JavaScript Algorithms",
            issuer: "freeCodeCamp",
            image: Cert2,
            date: "2023",
            credentialId: "JS-ALGO-2023",
            link: "https://www.freecodecamp.org/certification/"
        }
    ];

    // Create properly duplicated array for seamless animation
    const certificates = [...certificateItems, ...certificateItems];

    // Badges Data
    const badgeItems = [
        {
            title: "Hack Together: AI Agents Hackathon",
            issuer: "Microsoft",
            image: Badge3,
            link: "https://www.credly.com/badges/edf431be-3f22-4cfb-a4ab-f97b440ea357/public_url"
        },
        {
            title: "AWS Educate Machine Learning Foundations",
            issuer: "Amazon Web Services",
            image: Badge1,
            link: "https://www.credly.com/badges/8180cb89-f07a-4901-bf22-d42ff978ec1c/public_url"
        },
        {
            title: "Certified Ethical Hacker",
            issuer: "Cisco Networking Academy",
            image: Badge2,
            link: "https://www.netacad.com/courses/ethical-hacker"
        }
    ];

    // Create duplicated array for badges
    const badges = [...badgeItems, ...badgeItems];

    return (
        <section id="certifications" className="min-h-screen flex items-center justify-center py-20 bg-gradient-to-b from-[#0a081a]/50 to-[#0a081a]/80 overflow-hidden">
            <RevealOnSroll>
                <div className="max-w-6xl mx-auto px-4 w-full">
                    {/* Certificates Section - Scroll Left */}
                    <div className="mb-20">
                        <h2 className="text-4xl md:text-5xl font-bold mb-12 bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-600 bg-clip-text text-transparent text-center">
                            My Certificates
                        </h2>
                        <div className="relative w-full overflow-hidden">
                            <div className="animate-infinite-scroll flex w-max gap-6 py-2">
                                {certificates.map((cert, index) => (
                                    <CertificateCard key={`cert-${index}`} cert={cert} />
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Badges Section - Scroll Right */}
                    <div>
                        <h2 className="text-4xl md:text-5xl font-bold mb-12 bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-600 bg-clip-text text-transparent text-center">
                            Achievement Badges
                        </h2>
                        <div className="relative w-full overflow-hidden">
                            <div className="animate-infinite-scroll-reverse flex w-max gap-8 py-2">
                                {badges.map((badge, index) => (
                                    <BadgeCard key={`badge-${index}`} badge={badge} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </RevealOnSroll>

        </section>
    );
};

// Certificate Card Component
const CertificateCard = ({ cert }) => (
    <div className="bg-[#0a081a]/70 backdrop-blur-sm border border-blue-500 rounded-xl p-5 hover:-translate-y-2 hover:shadow-[0_0px_30px_blue] transition-all duration-300 group w-75 flex-shrink-0 mx-3">
        <div className="relative h-40 mb-4 overflow-hidden rounded-lg border border-blue-500/20">
            <img
                src={cert.image}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200 "
                alt={cert.title}
                onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://via.placeholder.com/256?text=Certificate+Image";
                }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <span className="text-blue-300 text-sm">ID: {cert.credentialId}</span>
            </div>
        </div>
        <h3 className="text-lg font-bold text-blue-300 mb-1">{cert.title}</h3>
        <div className="flex justify-between items-center text-sm">
            <span className="text-blue-400">{cert.issuer}</span>
            <span className="text-cyan-300">{cert.date}</span>
        </div>
        <a
            href={cert.link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 w-full py-2 bg-blue-600/80 text-white rounded-lg hover:bg-blue-700 hover:shadow-[0_0_15px_rgba(59,130,246,0.6)] transition-all duration-300 flex items-center justify-center gap-1 text-sm"
        >
            Verify Credential
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
        </a>
    </div>
);

// Badge Card Component
const BadgeCard = ({ badge }) => (
    <div className="bg-[#0a081a]/70 backdrop-blur-sm border border-blue-500 rounded-full p-6 hover:-translate-y-2 hover:shadow-[0_10px_30px_blue] transition-all duration-300 group flex flex-col items-center w-64 flex-shrink-0 mx-4">
        <div className="relative mb-4">
            <img
                src={badge.image}
                className="w-40 h-40 object-contain rounded-full border-2 border-blue-500 group-hover:border-blue-400 transition-all shadow-[0_0px_30px_blue]"
                alt={badge.title}
            />
        </div>
        <h3 className="text-lg font-bold text-center text-blue-300 mb-1">{badge.title}</h3>
        <p className="text-blue-100 text-sm text-center mb-3">{badge.issuer}</p>
        <a
            href={badge.link}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-transparent border border-blue-500 text-blue-400 rounded-lg hover:bg-blue-500/20 hover:text-white hover:shadow-[0_0_10px_rgba(59,130,246,0.3)] transition-all duration-300 text-sm"
        >
            View Credentials
        </a>
    </div>
);

export default Certifications;