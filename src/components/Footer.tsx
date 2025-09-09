import { Heart, Github, Linkedin, Twitter, Mail } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, Sun, Moon, Home, Briefcase, DollarSign } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const socialLinks = [
    { icon: Github, href: "https://github.com/aligasad", label: "GitHub" },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/asadalamalig/",
      label: "LinkedIn",
    },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Mail, href: "mailto:ceo@asadalam.info", label: "Email" },
  ];

  const quickLinks = [
    { label: "Projects", href: "projects" },
    { label: "Services", href: "services" },
    { label: "Contact", href: "contact" },
  ];

  const navItems = [
    { id: "home", label: "Home", icon: Home, path: "/" },
    { id: "projects", label: "Projects", icon: Briefcase, path: "/projects" },
    { id: "services", label: "Services", icon: DollarSign, path: "/services" },
    { id: "contact", label: "Contact", icon: Mail, path: "/contact" },
  ];

  const getInTouch = ["ceo@asadalam.info", "+91 7417331926", "Lucknow IN"];

  function onTop() {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  }

  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
              Asad Alam
            </h3>
            <p className="text-gray-400 mb-6 max-w-md">
              Full-Stack Developer & UI/UX Designer passionate about creating
              beautiful and functional digital experiences. Let's build
              something amazing together.
            </p>

            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    data-cursorpointermini={true}
                    className="p-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors duration-300 hover:text-blue-400"
                  >
                    <IconComponent data-cursorpointermini={true} size={20} />
                  </a>
                );
              })}
            </div>
          </div>

          <div className="flex  md:w-[50vw] ">
            {/* Quick Links */}
            <div className="w-[50%] sm:w-full">
              <h4 className="text-lg font-semibold mb-4 text-white">
                Quick Links
              </h4>
              <div className="flex flex-col">
                {navItems.map((item) => {
                  const IconComponent = item.icon;
                  const isActive = location.pathname === item.path;
                  return (
                    <Link
                      key={item.id}
                      to={item.path}
                      className={`py-1 my-1 w-20 rounded-md transition-all duration-200 flex justify-center items-center text-[12px] gap-1 ${
                        isActive
                          ? "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20"
                          : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800"
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      <IconComponent data-cursorpointermini={true} size={18} />
                      <span
                        className="font-medium"
                        data-cursorpointermini={true}
                      >
                        {" "}
                        {item.label}{" "}
                      </span>
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Contact Info */}
            <div className="w-[50%] sm:w-full">
              <h4 className="text-lg font-semibold mb-4 text-white">
                Get In Touch
              </h4>
              <div className="space-y-2 text-gray-400">
                {getInTouch.map((item, idx) => (
                  <li key={idx} className="list-none">
                    <p
                      data-cursorpointermini={true}
                      className="text-gray-400 hover:text-[#6f9ffa] transition-colors duration-300"
                    >
                      {item}
                    </p>
                  </li>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p
            className="text-gray-400 text-sm flex items-center gap-2"
            data-cursorpointer={true}
          >
            © {currentYear} Asad Alam. Made with{" "}
            <Heart size={16} className="text-red-500" /> and React
          </p>

          <div className="flex gap-6 text-sm text-gray-400 mt-4 md:mt-0">
            <a
              href="#"
              className="hover:text-[#6f9ffa] transition-colors duration-300"
              data-cursorpointermini={true}
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="hover:text-[#6f9ffa] transition-colors duration-300"
              data-cursorpointermini={true}
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
