import { useState, useEffect } from "react";
import TypingEffect from "./TypingEffect";
import Sheldon from "../assets/sheldon.png";
import { FaCode } from "react-icons/fa";

const LoadingScreen = ({ onComplete }) => {
  const [typingComplete, setTypingComplete] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) { clearInterval(interval); return 100; }
        return p + 2;
      });
    }, 40);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (typingComplete) {
      const timeout = setTimeout(() => onComplete(), 1200);
      return () => clearTimeout(timeout);
    }
  }, [typingComplete, onComplete]);

  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#080714]">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative flex flex-col items-center gap-6 z-10">
        {/* Logo + photo */}
        <div className="relative">
          <div className="w-20 h-20 rounded-2xl overflow-hidden border-2 border-indigo-500/50 shadow-[0_0_30px_rgba(99,102,241,0.3)]">
            <img
              src={Sheldon}
              alt="Sheldon Billy"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-2 -right-2 w-7 h-7 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg">
            <FaCode className="text-white text-xs" />
          </div>
        </div>

        {/* Name */}
        <div className="text-center">
          <h1 className="text-xl font-bold text-white mb-1">Sheldon Billy</h1>
          <p className="text-indigo-400 text-xs font-medium uppercase tracking-widest">Full-Stack Developer · AI Specialist</p>
        </div>

        {/* Typing text */}
        <div className="text-slate-400 text-sm font-mono flex items-center gap-1 h-6">
          <TypingEffect
            text="Initializing portfolio..."
            delay={55}
            onTypingComplete={() => setTypingComplete(true)}
          />
          <span className="animate-blink text-indigo-400">|</span>
        </div>

        {/* Progress bar */}
        <div className="w-64 h-1 bg-white/5 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full transition-all duration-100 shadow-[0_0_10px_rgba(99,102,241,0.6)]"
            style={{ width: `${progress}%` }}
          />
        </div>

        <p className="text-slate-600 text-xs">{progress}%</p>
      </div>
    </div>
  );
};

export default LoadingScreen;
