import { Heart, Github, Linkedin, Twitter, Mail } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Home, Briefcase, DollarSign } from "lucide-react";

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

  const navItems = [
    { id: "home", label: "Home", icon: Home, path: "/" },
    { id: "projects", label: "Projects", icon: Briefcase, path: "/projects" },
    { id: "services", label: "Services", icon: DollarSign, path: "/services" },
    { id: "contact", label: "Contact", icon: Mail, path: "/contact" },
  ];

  const getInTouch = [
    { title: "ceo@asadalam.info", link: "mailto:ceo@asadalam.info" },
    { title: "+91 7417331926", link: "tel:917417331926" },
    { title: "Lucknow, IN", link: "https://maps.app.goo.gl/z5yeXXg8fTVMm2pL8" },
  ];

  function onTop() {
    window.scrollTo(0, 0);
  }

  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2">
            <h3
              data-cursorpointer={true}
              className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4"
            >
              Asad Alam
            </h3>
            <p
              data-cursorpointertext={true}
              className="text-gray-400 mb-6 max-w-md"
            >
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
                    className="p-2 bg-gray-900 text-white hover:bg-gray-800 rounded-lg transition-colors duration-300 hover:text-blue-400"
                  >
                    <IconComponent data-cursorpointermini={true} size={20} />
                  </a>
                );
              })}
            </div>
          </div>

          <div className="flex md:w-[50vw] ">
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
                      className={`py-1 my-1 w-20 rounded-md transition-all duration-200 flex justify-start pl-2 items-center text-[13px] gap-1 ${
                        isActive
                          ? "text-blue-400 bg-gray-900"
                          : "text-gray-300 hover:text-blue-400 hover:bg-gray-800"
                      }`}
                      onClick={() => {
                        setIsOpen(false), onTop();
                      }}
                    >
                      <IconComponent data-cursorpointermini={true} size={14} />
                      <span
                        className="font-medium"
                        data-cursorpointermini={true}
                      >
                        {item.label}
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
                    <a
                      href={item.link}
                      data-cursorpointermini={true}
                      className="text-gray-400 hover:text-[#6f9ffa] focus:outline-none hover:underline border-none transition-colors duration-300"
                    >
                      {item.title}
                    </a>
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
