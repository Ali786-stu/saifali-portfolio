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
  // icons,
} from "lucide-react";
import myCV from "../assets/saif_Resume.pdf";
import { AnimatePresence, motion } from "framer-motion";
import myPic from "../assets/heroMainlogo.png";
import { useNavigate } from "react-router-dom";
import AcademicTimeline from "../AcademicTimeline";
import { Icon } from "@iconify/react";
import gif1 from "../assets/gif1.gif";
import gif2 from "../assets/gif2.gif";
import gif3 from "../assets/gif3.webp";
import gif4 from "../assets/gif4.gif";

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
    link.download = "saif_Resume.pdf";
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
      <section className="min-h-screen px-4 sm:px-6 lg:px-8 pt-20 relative overflow-hidden bg-[#5f265f] text-white">
        {/* Background Elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        {/* Main Hero Section */}
        <div className="max-w-7xl mx-auto">
          <div
            className={`grid lg:grid-cols-2 gap-12 items-center min-h-screen transform transition-all duration-1000 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            {/* Left Content */}
            <div className="text-center lg:text-left">
              <div className="mb-8">
                <div
                  className="inline-block px-4 py-2 bg-blue-900/30 text-blue-400 rounded-full text-sm font-medium mb-6"
                  data-aos="fade-down"
                  data-aos-duration="1000"
                >
                  👋 Welcome to my portfolio
                </div>

                <h1
                  data-cursorpointer={true}
                  className="text-2xl md:text-6xl lg:text-5xl font-bold text-white mb-6 leading-tight"
                  data-aos="fade-right"
                  data-aos-duration="1200"
                >
                  Hi, I'm{" "}
                  <span
                    data-cursorpointer={true}
                    className="text-[40px] lg:text-7xl text-yellow-500 bg-clip-text text-transparent md:top-10"
                    data-aos="zoom-in"
                    data-aos-delay="400"
                  >
                    SAIF ALI
                  </span>
                </h1>

                <div
                  data-cursorpointersm={true}
                  className="text-xl md:text-2xl text-gray-300 mb-4 h-8 font-bold"
                  data-aos="fade-left"
                  data-aos-delay="600"
                >
                  {text}
                  <span className="animate-blink">|</span>
                </div>

                <div className="h-6 mb-8 flex justify-center md:md:justify-start">
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
                  data-cursorpointerText={true}
                  className="text-lg text-gray-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed mb-8"
                  data-aos="fade-up"
                  data-aos-delay="800"
                >
                  I'm a passionate developer who loves creating beautiful,
                  functional, and user-friendly digital experiences. With
                  expertise in modern web technologies, I help businesses and
                  individuals bring their digital visions to life.
                </p>

                <div
                  className="flex flex-wrap gap-3 justify-center lg:justify-start mb-8"
                  data-aos="fade-up"
                  data-aos-delay="1000"
                >
                  {[
                    // { tech: "TypeScript", icons: "logos:typescript-icon" },
                    // { tech: "Node.js", icons: "logos:nodejs-icon" },
                    // { tech: "Firebase", icons: "devicon:firebase" },
                    // { tech: "C Lang.", icons: "logos:c" },
                    // { tech: "Java", icons: "logos:java" },
                    // { tech: "CSS", icons: "logos:css-3" },
                    { tech: "HTML", icons: "logos:html-5" },
                    { tech: "Vanilla CSS", icons: "logos:css-3" },
                    { tech: "JavaScript", icons: "logos:javascript" },
                    { tech: "React js", icons: "logos:react" },
                    { tech: "Tailwind CSS", icons: "logos:tailwindcss-icon" },
                    { tech: "BootStrap", icons: "logos:bootstrap" },
                    { tech: "php", icons: "logos:php" },
                    { tech: "SQL", icons: "logos:mysql-icon" },
                    { tech: "Shopify.Liquid", icons: "logos:shopify" },
                    { tech: "Git & GitHub", icons: "logos:git-icon" },
                    { tech: "Vs Code", icons: "logos:visual-studio-code" },
                  ].map((obj, index) => (
                    <div
                      key={index}
                      data-cursorpointerMini={true}
                      className="px-3 py-1 flex items-center gap-1 bg-gray-800 text-gray-300 rounded-full text-sm font-medium"
                      data-aos="zoom-in"
                      data-aos-delay={index * 100}
                    >
                      <Icon
                        icon={obj.icons}
                        data-cursorpointerMini={true}
                        className="text-lg"
                      />
                      <span data-cursorpointerMini={true}>{obj.tech}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-12"
                data-aos="fade-up"
                data-aos-delay="1200"
              >
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
                  className="px-8 py-4 border-2 border-gray-600 text-gray-300 font-semibold rounded-full hover:bg-yellow-600 hover:scale-105 transition-all duration-300 flex items-center gap-2"
                >
                  <Download size={20} />
                  Download CV
                </button>
              </div>

              <div
                className="flex justify-center lg:justify-start space-x-6"
                data-aos="zoom-in-up"
                data-aos-delay="1400"
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
                      data-cursorpointerMini={true}
                      className="p-3 hover:bg-yellow-500 bg-blue-950 rounded-full shadow-md hover:shadow-lg hover:scale-110 transition-all duration-300 text-gray-300 hover:text-white"
                    >
                      <IconComponent data-cursorpointerMini={true} size={24} />
                    </a>
                  );
                })}
              </div>
            </div>
            {/* Right Content - Profile Photo */}
            <div
              className="flex justify-center lg:justify-end lg:mr-11 max-md:-order-1"
              data-aos="fade-left"
              data-aos-duration="1200"
            >
              <div className="relative lg:mb-32">
                <div className="relative w-60 h-60 sm:w-72 sm:h-72 md:w-96 md:h-96">
                  <div className="absolute inset-0 bg-gradient-to-r from-white to-black rounded-full blur-2xl opacity-20 animate-pulse"></div>

                  {/* 🔵 Top Right */}
                  <div
                    className="absolute -top-3 -right-10 w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32"
                    data-aos="zoom-in"
                    data-aos-delay="200"
                  >
                    <img
                      src={gif1}
                      alt="Animated GIF Decor"
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>

                  {/* 🔵 Top Left */}
                  <div className="absolute -top-3 -left-10 w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32">
                    <img
                      src={gif2}
                      alt="Animated GIF Decor"
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>

                  {/* 🔵 Bottom Right */}
                  <div className="absolute -bottom-4 -right-10 w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32">
                    <img
                      src={gif3}
                      alt="Animated GIF Decor"
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>

                  {/* 🔵 Bottom Left */}
                  <div className="absolute -bottom-4 -left-10 w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32">
                    <img
                      src={gif4}
                      alt="Animated GIF Decor"
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>

                  {/* Profile Image */}
                  <div
                    className="relative w-full h-full rounded-full overflow-hidden border-2 sm:border-4 border-green-400 shadow-2xl"
                    data-aos="flip-right"
                    data-aos-duration="1500"
                  >
                    <img
                      src={myPic}
                      alt="Saif Ali - Profile"
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent"></div>
                  </div>

                  {/* Floating Icons */}
                  <div
                    className="absolute -top-6 left-1/3 transform -translate-x-1/3 p-2 sm:p-3 bg-rose-400 rounded-full shadow-lg animate-float"
                    data-aos="fade-down"
                    data-aos-delay="1000"
                  >
                    <Code className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div
                    className="absolute top-1/2 -right-8 p-2 sm:p-3 bg-rose-500 rounded-full shadow-lg animate-float delay-1000"
                    data-aos="fade-left"
                    data-aos-delay="1200"
                  >
                    <Palette className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div
                    className="absolute top-1/2 -left-8 p-2 sm:p-3 bg-rose-600 rounded-full shadow-lg animate-float delay-500"
                    data-aos="fade-right"
                    data-aos-delay="1400"
                  >
                    <Smartphone className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div
                    className="absolute -bottom-8 right-1/2 translate-x-1/2 p-2 sm:p-3 bg-rose-700 rounded-full shadow-lg animate-float delay-500"
                    data-aos="fade-up"
                    data-aos-delay="1600"
                  >
                    <Cpu className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
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
          data-aos="fade-up"
          data-aos-duration="1200"
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
                  data-aos="zoom-in"
                  data-aos-delay={index * 200}
                >
                  <div
                    onClick={() => {
                      navigate(stat.link);
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                    data-cursorpointer={true}
                    className="cursor-pointer group text-center p-6 bg-gray-800/50 hover:bg-orange-500 backdrop-blur-sm rounded-2xl border border-gray-700/50 hover:scale-105 transition-all duration-300"
                  >
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:from-black group-hover:to-rose-600 text-white rounded-full mb-4">
                      <IconComponent size={24} data-cursorpointerText={true} />
                    </div>
                    <div
                      data-cursorpointerText={true}
                      className="text-2xl md:text-3xl font-bold text-white mb-2 group-hover:text-pink-800"
                    >
                      {stat.number}
                    </div>
                    <div
                      data-cursorpointerText={true}
                      className="text-sm line-clamp-1 text-gray-300 group-hover:text-white font-bold"
                    >
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
          className="absolute z-10 bottom-3 left-1/2 transform -translate-x-1/2 p-2 text-gray-400 hover:text-gray-200 transition-colors animate-bounce"
          data-aos="fade-up"
          data-aos-delay="1000"
        >
          <ChevronDown size={32} />
        </button>
      </section>
      <AcademicTimeline />
    </>
  );
};

export default Hero;
