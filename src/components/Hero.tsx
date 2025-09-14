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
} from "lucide-react";
import myCV from "../assets/myCV2.pdf";
import { Icon } from "@iconify/react/dist/iconify.js";
import { AnimatePresence, motion } from "framer-motion";
import myPic from "../assets/asadslfijj.jpg";
import { link } from "framer-motion/client";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const [text, setText] = useState("");
  const fullText = "Full-Stack Developer & UI/UX Designer";
  const [currentSkill, setCurrentSkill] = useState(0);

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
    link.download = "Asad_Alam_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleMail = () => {
    window.location.href = "mailto:your@email.com";
  };

  const handleScrollDown = () => {
    window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
  };

  return (
    <section className="min-h-screen px-4 sm:px-6 lg:px-8 pt-20 relative overflow-hidden bg-[#111827] text-white">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Main Hero Section */}
      <div className="max-w-7xl mx-auto">
        <div
          className={`grid lg:grid-cols-2 gap-12 items-center min-h-screen transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <div className="mb-8">
              <div className="inline-block px-4 py-2 bg-blue-900/30 text-blue-400 rounded-full text-sm font-medium mb-6">
                👋 Welcome to my portfolio
              </div>

              <h1 data-cursorpointer={true} className="text-2xl md:text-6xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                Hi, I'm{" "}
                <span data-cursorpointer={true} className="text-[40px] lg:text-7xl bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                  Asad Alig
                </span>
              </h1>

              <div data-cursorpointersm={true} className="text-xl md:text-2xl text-gray-300 mb-4 h-8">
                {text}
                <span className="animate-blink">|</span>
              </div>

              <div className="h-6 mb-8 flex justify-start">
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
                    className="text-lg text-rose-400 font-medium"
                  >
                    {skills[currentSkill]}
                  </motion.div>
                </AnimatePresence>
              </div>

              <p data-cursorpointerText={true} className="text-lg text-gray-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed mb-8">
                I'm a passionate developer who loves creating beautiful,
                functional, and user-friendly digital experiences. With
                expertise in modern web technologies, I help businesses and
                individuals bring their digital visions to life.
              </p>

              <div className="flex flex-wrap gap-3 justify-center lg:justify-start mb-8">
                {[
                  { tech: "React js", icons: "logos:react" },
                  { tech: "JavaScript", icons: "logos:javascript" },
                  { tech: "TypeScript", icons: "logos:typescript-icon" },
                  { tech: "Node.js", icons: "logos:nodejs-icon" },
                  { tech: "Firebase", icons: "devicon:firebase" },
                  { tech: "SQL", icons: "logos:mysql-icon" },
                  { tech: "Java", icons: "logos:java" },
                  { tech: "C Lang.", icons: "logos:c" },
                  { tech: "HTML", icons: "logos:html-5" },
                  { tech: "Tailwind CSS", icons: "logos:tailwindcss-icon" },
                  { tech: "BootStrap", icons: "logos:bootstrap" },
                  { tech: "Vanilla CSS", icons: "logos:css-3" },
                  { tech: "Git & GitHub", icons: "logos:git-icon" },
                  { tech: "Vs Code", icons: "logos:visual-studio-code" },
                ].map((obj, index) => (
                  <div
                    key={index}
                    data-cursorpointerMini={true}
                    className="px-3 py-1 flex items-center gap-1 bg-gray-800 text-gray-300 rounded-full text-sm font-medium"
                  >
                    <Icon icon={obj.icons} data-cursorpointerMini={true} className="text-lg" />
                    <span data-cursorpointerMini={true}>{obj.tech}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-12">
              <button
                onClick={handleMail}
                data-cursorpointer={true}
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center gap-2"
              >
                <Mail size={20} />
                Get In Touch
              </button>

              <button
                onClick={handleDownload}
                data-cursorpointer={true}
                className="px-8 py-4 border-2 border-gray-600 text-gray-300 font-semibold rounded-full hover:bg-gray-800 hover:scale-105 transition-all duration-300 flex items-center gap-2"
              >
                <Download size={20} />
                Download CV
              </button>
            </div>

            <div className="flex justify-center lg:justify-start space-x-6">
              {[
                {
                  icon: Github,
                  href: "https://github.com/aligasad",
                  label: "GitHub",
                },
                {
                  icon: Linkedin,
                  href: "https://www.linkedin.com/in/asadalamalig/",
                  label: "LinkedIn",
                },
                {
                  icon: Mail,
                  href: "mailto:asadalam4291@gmail.com",
                  label: "Email",
                },
              ].map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    data-cursorpointerMini={true}
                    className="p-3 bg-gray-800 rounded-full shadow-md hover:shadow-lg hover:scale-110 transition-all duration-300 text-gray-300 hover:text-blue-400"
                  >
                    <IconComponent data-cursorpointerMini={true} size={24} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Right Content - Profile Photo */}
          <div className="flex justify-center lg:justify-end lg:mr-11 max-md:-order-1">
            <div className="relative lg:mb-32">
              <div className="relative w-80 h-80 md:w-96 md:h-96">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full blur-2xl opacity-20 animate-pulse"></div>
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-400/20 rounded-full animate-bounce delay-1000"></div>
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-purple-400/20 rounded-full animate-bounce delay-500"></div>

                <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-gray-800 shadow-2xl">
                  <img
                    src={myPic}
                    alt="Asad Alam - Profile"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent"></div>
                </div>

                <div className="absolute top-8 -left-8 p-3 bg-gray-800 rounded-full shadow-lg animate-float">
                  <Code className="w-6 h-6 text-blue-600" />
                </div>
                <div className="absolute top-1/2 -right-8 p-3 bg-gray-800 rounded-full shadow-lg animate-float delay-1000">
                  <Palette className="w-6 h-6 text-purple-600" />
                </div>
                <div className="absolute bottom-8 -left-4 p-3 bg-gray-800 rounded-full shadow-lg animate-float delay-500">
                  <Smartphone className="w-6 h-6 text-indigo-600" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div
        className={`max-w-7xl mx-auto pb-20 pt-5 transform transition-all duration-1000 delay-500 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <motion.div
                key={index}
                className=""
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div

                  onClick={() => {
                    navigate(stat.link);
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  data-cursorpointer={true}
                  className="cursor-pointer group text-center p-6 bg-gray-800/50 hover:bg-gray-700/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 hover:scale-105 transition-all duration-300"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:from-black group-hover:to-rose-600 text-white rounded-full mb-4">
                    <IconComponent size={24} data-cursorpointerText={true} />
                  </div>
                  <div data-cursorpointerText={true} className="text-2xl md:text-3xl font-bold text-white mb-2 group-hover:text-gray-400">
                    {stat.number}
                  </div>
                  <div data-cursorpointerText={true} className="text-sm line-clamp-1 text-gray-300 group-hover:text-rose-400 font-medium">
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      <button
        onClick={handleScrollDown}
        className="absolute bottom-3 left-1/2 transform -translate-x-1/2 p-2 text-gray-400 hover:text-gray-200 transition-colors animate-bounce"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
};

export default Hero;
