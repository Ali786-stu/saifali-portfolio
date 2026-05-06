import { useEffect, useState } from "react";
import {
  ChevronDown,
  Github,
  Linkedin,
  Mail,
  Download,
  Code,
  Palette,
  Smartphone,
  Award,
  Users,
  Coffee,
  Cpu,
} from "lucide-react";
import myCV from "../assets/Saif_Ali-resume.pdf";
import { AnimatePresence, motion } from "framer-motion";
import myPic from "../assets/heroMainlogo.png";
import { useNavigate } from "react-router-dom";
import AcademicTimeline from "../AcademicTimeline";
import { Icon } from "@iconify/react";

// Dynamically import all icons from ring-icon folder
const iconImages = Object.values(
  import.meta.glob("../ring-icon/*.png", { eager: true, import: "default" })
) as string[];

const Hero = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const [text, setText] = useState("");
  const fullText = "Full-Stack Developer & UI/UX Designer";
  const [currentSkill, setCurrentSkill] = useState(0);

  // Split icons for inner and outer rings
  const innerIcons = iconImages.slice(0, 6);
  const outerIcons = iconImages.slice(6, 12);

  const skills = [
    "React js Development",
    "UI/UX Design & Prototyping",
    "E-commerce Solutions",
    "Single-Page Solutions",
  ];

  const stats = [
    {
      icon: Code,
      number: "10+",
      label: "Projects Completed",
      link: "/allProjects",
    },
    { icon: Users, number: "5+", label: "Happy Clients", link: "/" },
    { icon: Award, number: "1+", label: "Years Experience", link: "/" },
    { icon: Coffee, number: "150+", label: "Cups of Coffee", link: "/" },
  ];

  useEffect(() => {
    setIsVisible(true);

    // Typewriter effect
    let index = 0;
    const timer = setInterval(() => {
      setText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) clearInterval(timer);
    }, 100);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const skillTimer = setInterval(() => {
      setCurrentSkill((prev) => (prev + 1) % skills.length);
    }, 3000);
    return () => clearInterval(skillTimer);
  }, []);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = myCV;
    link.download = "Saif_Ali-resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleMail = () => {
    window.location.href = "mailto:saifali123@gmail.com";
  };

  const handleScrollDown = () => {
    window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
  };

  return (
    <>
      <section className="min-h-screen px-4 sm:px-6 lg:px-8 pt-20 relative overflow-hidden bg-[#030303] text-white">
        {/* Fullscreen Cinematic Video Background */}
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="absolute inset-0 w-full h-full object-cover z-0 opacity-40 pointer-events-none"
        >
          <source src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260314_131748_f2ca2a28-fed7-44c8-b9a9-bd9acdd5ec31.mp4" type="video/mp4" />
        </video>

        {/* Overlay to ensure readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#030303]/60 via-transparent to-[#030303]/80 z-0"></div>

        {/* Main Hero Section */}
        <div className="max-w-7xl mx-auto relative z-10">
          <div
            className={`grid lg:grid-cols-2 gap-12 items-center min-h-screen transform transition-all duration-1000 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            {/* Left Content */}
            <div className="text-center lg:text-left pt-5 md:pt-0">
              <div className="mb-8">
                <div
                  className="inline-block px-4 py-2 bg-blue-900/30 text-blue-400 rounded-full text-sm font-medium mb-6"
                  data-aos="fade-down"
                >
                  👋 Welcome to my portfolio
                </div>

                <h1
                  className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
                  data-aos="fade-right"
                >
                  Hi, I'm{" "}
                  <span
                    className="text-yellow-500"
                    data-aos="zoom-in"
                  >
                    SAIF ALI
                  </span>
                </h1>

                <div
                  className="text-xl md:text-2xl text-gray-300 mb-4 h-8 font-bold"
                  data-aos="fade-left"
                >
                  {text}
                  <span className="animate-blink">|</span>
                </div>

                <div className="h-6 mb-8 flex justify-center lg:justify-start">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={skills[currentSkill]}
                      initial={{ opacity: 0, scale: 0.5, rotate: -15 }}
                      animate={{ opacity: 1, scale: 1, rotate: 0 }}
                      exit={{ opacity: 0, scale: 0.5, rotate: 15 }}
                      transition={{
                        duration: 0.6,
                        ease: [0.6, -0.05, 0.01, 0.99],
                      }}
                      className="text-sm sm:text-center md:text-lg text-yellow-500 font-bold"
                    >
                      {skills[currentSkill]}
                    </motion.div>
                  </AnimatePresence>
                </div>

                <p
                  className="text-lg text-gray-200 max-w-2xl mx-auto lg:mx-0 leading-relaxed mb-8 px-4 md:px-0"
                  data-aos="fade-up"
                >
                  I'm a passionate developer who loves creating beautiful,
                  functional, and user-friendly digital experiences. With
                  expertise in modern web technologies, I help businesses and
                  individuals bring their digital visions to life.
                </p>

                {/* Tech Badges Row */}
                <div
                  className="flex flex-wrap gap-3 justify-center lg:justify-start mb-8 px-2 md:px-0"
                  data-aos="fade-up"
                >
                  {[
                    { tech: "HTML", icons: "logos:html-5" },
                    { tech: "Vanilla CSS", icons: "logos:css-3" },
                    { tech: "JavaScript", icons: "logos:javascript" },
                    { tech: "React js", icons: "logos:react" },
                    { tech: "Tailwind CSS", icons: "logos:tailwindcss-icon" },
                    { tech: "BootStrap", icons: "logos:bootstrap" },
                    { tech: "php", icons: "logos:php" },
                    { tech: "Laravel", icons: "logos:laravel" },
                    { tech: "SQL", icons: "logos:mysql-icon" },
                    { tech: "Shopify.Liquid", icons: "logos:shopify" },
                    { tech: "Git & GitHub", icons: "logos:git-icon" },
                    { tech: "Vs Code", icons: "logos:visual-studio-code" },
                  ].map((obj, index) => (
                    <div
                      key={index}
                      className="px-3 py-1 flex items-center gap-1 bg-gray-800/80 backdrop-blur-sm text-gray-300 rounded-full text-sm font-medium border border-gray-700/50"
                    >
                      <Icon icon={obj.icons} className="text-lg" />
                      <span>{obj.tech}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-12"
                data-aos="fade-up"
              >
                <button
                  onClick={handleMail}
                  className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center gap-2"
                >
                  <Mail size={20} />
                  Get In Touch
                </button>

                <button
                  onClick={handleDownload}
                  className="px-8 py-4 border-2 border-gray-600 text-gray-300 font-semibold rounded-full hover:bg-yellow-600 hover:scale-105 transition-all duration-300 flex items-center gap-2"
                >
                  <Download size={20} />
                  Download CV
                </button>
              </div>

              {/* Social Icons Row */}
              <div
                className="flex justify-center lg:justify-start space-x-6 mb-12 lg:mb-0"
                data-aos="zoom-in-up"
              >
                {[
                  {
                    icon: Github,
                    href: "https://github.com/Ali786-stu?tab=repositories",
                    label: "GitHub",
                  },
                  {
                    icon: Linkedin,
                    href: "https://www.linkedin.com/in/saif-ali-1b55a3237",
                    label: "LinkedIn",
                  },
                  {
                    icon: Mail,
                    href: "mailto:saifali97100@gmail.com",
                    label: "Email",
                  },
                ].map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      aria-label={social.label}
                      className="p-3 hover:bg-yellow-500 bg-blue-950/50 backdrop-blur-sm rounded-full shadow-md hover:shadow-lg hover:scale-110 transition-all duration-300 text-gray-300 hover:text-white border border-white/10"
                    >
                      <IconComponent size={24} />
                    </a>
                  );
                })}
              </div>
            </div>
            
            {/* Right Content - Orbital Tech Profile (Now at top on mobile) */}
            <div
              className="flex justify-center lg:justify-end lg:mr-11 max-md:-order-1 mb-8 lg:mb-0 pt-5 md:pt-0"
              data-aos="fade-left"
              data-aos-duration="1200"
            >
              <div className="relative flex items-center justify-center scale-75 sm:scale-90 md:scale-100">
                {/* Outer Tech Ring (Counter-Clockwise) */}
                <motion.div 
                  animate={{ rotate: -360 }}
                  transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                  className="absolute w-64 h-64 sm:w-80 sm:h-80 md:w-[420px] md:h-[420px] lg:w-[480px] lg:h-[480px] rounded-full border border-dashed border-blue-500/20"
                >
                  {outerIcons.map((img, i) => (
                    <div 
                      key={i}
                      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full"
                      style={{ transform: `translate(-50%, -50%) rotate(${(i * 360) / outerIcons.length}deg)` }}
                    >
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                        <div className="p-1">
                          <img src={img} alt="tech" className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:w-24 object-contain drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]" />
                        </div>
                      </div>
                    </div>
                  ))}
                </motion.div>

                {/* Inner Tech Ring (Clockwise) */}
                <motion.div 
                  animate={{ rotate: 360 }}
                  transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                  className="absolute w-48 h-48 sm:w-64 sm:h-64 md:w-[300px] md:h-[300px] lg:w-[350px] lg:h-[350px] rounded-full border border-dashed border-orange-500/30"
                >
                  {innerIcons.map((img, i) => (
                    <div 
                      key={i}
                      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full"
                      style={{ transform: `translate(-50%, -50%) rotate(${(i * 360) / innerIcons.length + 45}deg)` }}
                    >
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                        <div className="p-1">
                          <img src={img} alt="tech" className="w-10 h-10 sm:w-14 sm:h-14 md:w-16 md:w-20 object-contain drop-shadow-[0_0_15px_rgba(249,115,22,0.3)]" />
                        </div>
                      </div>
                    </div>
                  ))}
                </motion.div>

                {/* Profile Image Container */}
                <div className="relative w-32 h-32 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64">
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse"></div>

                  <div
                    className="relative w-full h-full rounded-full overflow-hidden border-4 border-white/10 shadow-2xl z-10"
                    data-aos="flip-right"
                    data-aos-duration="1500"
                  >
                    <img
                      src={myPic}
                      alt="Saif Ali - Profile"
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <button
          onClick={handleScrollDown}
          className="absolute z-10 bottom-3 left-1/2 transform -translate-x-1/2 p-2 text-gray-400 hover:text-white transition-colors animate-bounce"
        >
          <ChevronDown size={32} />
        </button>
      </section>
      <AcademicTimeline />
    </>
  );
};

export default Hero;
