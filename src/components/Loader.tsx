import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code, Palette, Smartphone, Cpu, Globe, Database, Layers, Zap } from "lucide-react";
import loaderImg from "../assets/loader.png";

interface LoaderProps {
  onFinished?: () => void;
}

// Dynamically import all icons from ring-icon folder
const iconImages = Object.values(
  import.meta.glob("../ring-icon/*.png", { eager: true, import: "default" })
) as string[];

const Loader: React.FC<LoaderProps> = ({ onFinished }) => {
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsExiting(true), 500);
          return 100;
        }
        const diff = 100 - prev;
        const increment = Math.max(1, Math.floor(diff / 10 + Math.random() * 5));
        return Math.min(100, prev + increment);
      });
    }, 150);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (isExiting) {
      const timer = setTimeout(() => {
        if (onFinished) onFinished();
      }, 1200);
      return () => clearTimeout(timer);
    }
  }, [isExiting, onFinished]);

  // Split icons for inner and outer rings (assuming at least 8-12 icons)
  const innerIcons = iconImages.slice(0, 6);
  const outerIcons = iconImages.slice(6, 12);

  const panels = Array.from({ length: 10 });

  return (
    <div className="fixed inset-0 z-[9999] overflow-hidden pointer-events-none">
      {/* Background Panels */}
      <div className="absolute inset-0 flex">
        {panels.map((_, i) => (
          <motion.div
            key={i}
            initial={{ y: 0 }}
            animate={isExiting ? { y: "-100%" } : { y: 0 }}
            transition={{
              duration: 0.8,
              ease: [0.76, 0, 0.24, 1],
              delay: i * 0.05,
            }}
            className="relative h-full w-full bg-[#050505] border-x border-white/[0.02]"
          />
        ))}
      </div>

      {/* Center Content */}
      <AnimatePresence>
        {!isExiting && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
            className="absolute inset-0 flex flex-col items-center justify-center pointer-events-auto"
          >
            <div className="relative w-80 h-80 md:w-[500px] md:h-[500px] flex items-center justify-center mb-6 md:mb-8">
              {/* Outer Skill Ring (Counter-Clockwise) */}
              <motion.div 
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute w-72 h-72 md:w-[450px] md:h-[450px] rounded-full border border-white/5"
              >
                {outerIcons.map((img, i) => (
                  <div 
                    key={i}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full"
                    style={{ transform: `translate(-50%, -50%) rotate(${(i * 360) / outerIcons.length}deg)` }}
                  >
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                      <div className="p-1">
                        <img src={img} alt="skill" className="w-16 h-16 md:w-24 md:h-24 object-contain drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]" />
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>

              {/* Inner Skill Ring (Clockwise) */}
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute w-52 h-52 md:w-[320px] md:h-[320px] rounded-full border border-orange-500/20"
              >
                {innerIcons.map((img, i) => (
                  <div 
                    key={i}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full"
                    style={{ transform: `translate(-50%, -50%) rotate(${(i * 360) / innerIcons.length + 30}deg)` }}
                  >
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                      <div className="p-1">
                        <img src={img} alt="skill" className="w-14 h-14 md:w-20 md:h-20 object-contain drop-shadow-[0_0_20px_rgba(249,115,22,0.3)]" />
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>

              {/* Central Image */}
              <div className="relative z-10">
                <div className="w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-white/10 shadow-2xl">
                  <img 
                    src={loaderImg} 
                    alt="Saif Ali" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <motion.div 
                  animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute inset-0 bg-white/5 blur-3xl rounded-full -z-10"
                />
              </div>
            </div>

            {/* Progress Counter - Balanced Spacing */}
            <div className="text-center w-full">
              <div className="relative h-24 md:h-32 flex items-center justify-center">
                <motion.span 
                  className="absolute text-7xl md:text-9xl font-black text-white/5 italic leading-none select-none"
                  animate={{ opacity: [0.05, 0.1, 0.05] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  {Math.round(progress)}%
                </motion.span>
                <span className="relative text-5xl md:text-7xl font-bold text-white tracking-tighter italic">
                  {Math.round(progress)}%
                </span>
              </div>
              
              {/* Modern Progress Bar */}
              <div className="w-40 md:w-56 h-1 bg-white/10 mx-auto mt-2 rounded-full overflow-hidden">
                <motion.div 
                  className="h-full bg-gradient-to-r from-orange-500 to-rose-600 shadow-[0_0_15px_rgba(249,115,22,0.5)]"
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Loader;
