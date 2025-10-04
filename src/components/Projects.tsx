import React, { useState } from "react";
import { ExternalLink, Github } from "lucide-react";
import ProjectModal from "./ProjectModal";
import img1 from "../assets/image1.png";
import workWhiz from "../assets/image2.png";
import zaphira from "../assets/image4.png";
import expenseTracker from "../assets/image5.png";
import aligFoundation from "../assets/image6.png";
import avadhMedicalHall from "../assets/avadhMedicalHall.png";
import doctorApp from "../assets/image3.png";
import { useNavigate } from "react-router-dom";

const Projects = () => {
  const navigate = useNavigate();
  const [selectedProject, setSelectedProject] = useState(null);
  const [filter, setFilter] = useState("all");

  const projects = [
    {
      id: 1,
      title: "FlipKart",
      description:
        "A modern e-commerce platform with advanced features and smooth user experience.",
      fullDescription:
        "Built a responsive Flipkart e-commerce clone using HTML, CSS, JavaScript, and Bootstrap, replicating the core design and functionality of the popular shopping platform.",
      image: img1,
      technologies: [
        "HTML",
        "CSS",
        "Js",
        // "RazorPay",
        "Tailwind CSS",
      ],
      githubUrl: "https://git@github.com:Ali786-stu/Clone-Apple-website.git",
      liveUrl: "fpkart-d14fef.netlify.app",
      category: "Frontend",
      duration: "3 Days",
      status: true,
      features: [
        "Homepage Layout",
        "Responsive Design",
        "Product Display Sections",
        "Modern UI/UX",
        "Interactive Frontend",
      ],
    },
    {
      id: 2,
      title: "Ice-Cream",
      description:
        "Developed a fully responsive clone of the Vadilal Ice Cream website using HTML, CSS, and JavaScript. The project replicates the modern design, product sections, and interactive UI of the original site.",
      fullDescription:
        "Implemented background sliders, product showcases, and navigation menus to provide a smooth browsing experience. This project highlights my ability to recreate real-world brand websites with attention to design, responsiveness, and user experience.",
      image: workWhiz,
      technologies: ["HTML", "CSS", "Js", "Material-UI"],
      githubUrl: "https://github.com/Ali786-stu?tab=repositories",
      liveUrl: "cheerful-brigadeiros-967262.netlify.app",
      category: "Frontend",
      duration: "4 Days",
      status: false,
      features: [
        "Product Showcase Section",
        "Navigation Menu",
        "Interactive Elements",
        "Background Slider",
        "Modern UI/UX",
      ],
    },
    {
      id: 3,
      title: "Integral University Lucknow",
      description:
        "Developed a responsive clone of the Integral University official website using HTML, CSS, JavaScript, and Bootstrap, focusing on design accuracy and smooth navigation.",
      fullDescription:
        "Created a responsive clone of the Integral University website using HTML, CSS, JavaScript, and Bootstrap. The project replicates the design, navigation, and layout of the official site, including academic sections, image sliders, and a structured navigation bar. It demonstrates skills in front-end development, responsive design, and UI/UX implementation.",
      image: doctorApp, // import or path to your project image
      technologies: ["HTML", "CSS", "Js", "Tailwind CSS"],
      githubUrl: "https://github.com/Ali786-stu?tab=repositories",
      liveUrl: "integral-university-9cd2b3.netlify.app",
      category: "Frontend",
      duration: "2 Days",
      status: true,
      features: [
        "Homepage Layout",
        "Academic Sections",
        "Navigation Bar",
        "Image Slider/Banner",
        "Modern Styling",
        "Responsive Design",
      ],
    },

    {
      id: 4,
      title: "E-Commerce Platform",
      description:
        "The project includes product catalogs, search functionality, and a cart system to provide an interactive user shopping experience.",
      fullDescription:
        "Developed a fully functional e-commerce website using HTML, CSS, JavaScript, and Bootstrap, designed to replicate real-world online shopping platforms. The project includes product catalogs, search functionality, and a cart system to provide an interactive user shopping experience.",
      image: zaphira,
      technologies: ["HTML", "CSS", "Js", "Tailwind CSS"],
      githubUrl: "https://github.com/Ali786-stu?tab=repositories",
      liveUrl: "fantastic-e-commerce-979870.netlify.app",
      category: "Frontend",
      duration: "3 Days",
      status: true,
      features: [
        "Product Catalog",
        "Search & Filter Options",
        "Shopping Cart",
        "Modern UI/UX",
        "Interactive Elements",
      ],
    },
    {
      id: 5,
      title: "Text to Speech Convertor",
      description:
        "A project that captures spoken audio input and converts it into written text using speech recognition APIs or libraries. It enables hands-free typing and improves productivity.",
      fullDescription:
        "A web-based tool that converts written text into natural-sounding speech using JavaScript, Web Speech API (or Python libraries). This project helps users listen to text content instead of reading it, making it useful for accessibility and learning purposes.",
      image: expenseTracker,
      technologies: ["HTML", "CSS", "Js"],
      githubUrl: "https://github.com/Ali786-stu?tab=repositories",
      liveUrl: "stupendous-pegasus-b0e431.netlify.app",
      category: "Frontend",
      duration: "1 Day",
      status: true,
      features: [
        "Learning Support",
        "Time-Saving",
        "Hands-Free Typing",
        "Productivity Boost",
        "Accessibility",
      ],
    },
    {
      id: 6,
      title: "Red Cayenne Rastaurant",
      description:
        "Coaching platform guiding students with quality education & mentorship.",
      fullDescription:
        "Developed a responsive restaurant website using HTML, CSS, JavaScript, and Bootstrap to showcase menu items, restaurant details, and online reservation options. The project focuses on modern UI/UX, easy navigation, and interactive design to enhance customer engagement.",
      image: aligFoundation,
      technologies: ["HTML", "Vanilla CSS", "Js"],
      githubUrl: "https://github.com/Ali786-stu?tab=repositories",
      liveUrl: "red-rastaurant.netlify.app",
      category: "Frontend",
      duration: "5 Days",
      status: true,
      features: [
        "Interactive Menu Section",
        "Image Slider/Gallery",
        "Online Reservation",
        "Modern UI/UX",
      ],
    },
    {
      id: 7,
      title: "Avadh Medical Hall & Skin Care",
      description:
        "A skin care clinic in Ayodhya offering appointments, treatment plans, and product services online.",
      fullDescription:
        "Avadh Medical Hall is a skin care and medical hall website. It allows patients to view services (like Acne, Vitiligo, Rosacea etc.), make an appointment, contact via phone or email, and view transformations and about us info. Built using React, TypeScript, Firebase for managing appointment data and authentication.",
      image: avadhMedicalHall, // import this in your code
      technologies: ["React", "TypeScript", "Firebase", "CSS / Tailwind / MUI"],
      githubUrl: "https://github.com/yourusername/avadh-medical-hall", // if available
      liveUrl: "https://avadhmedicalhall.com/",
      category: "web",
      duration: "2 months",
      status: true,
      features: [
        "Make Appointment online",
        "View Services and About Us sections",
        "Contact via phone/email integration",
        "Transformations gallery",
        "Firebase backend for storing appointments",
        "Responsive design",
      ],
    },
  ];

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "web", label: "Web Development" },
    { id: "app", label: "Mobile Apps" },
  ];

  const filteredProjects =
    filter === "all" ? projects : projects.filter((p) => p.category === filter);

  return (
    <>
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#23324b] min-h-screen">
        <div className="max-w-7xl mx-auto" data-aos="fade-up">
          <div
            className="text-center mb-16"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <h2
              data-cursorpointer={true}
              className="text-4xl md:text-5xl font-bold text-orange-600 mb-6"
            >
              My{" "}
              <span
                data-cursorpointer={true}
                className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
              >
                Projects
              </span>
            </h2>
            <p
              data-cursorpointerText={true}
              className="text-xl text-yellow-400 max-w-3xl mx-auto font-bold"
            >
              Here are some of my recent projects that showcase my skills in web
              development.
            </p>
          </div>

          {/* Filter Buttons */}
          <div
            className="flex flex-wrap justify-center gap-4 mb-12"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setFilter(category.id)}
                data-cursorpointer={true}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  filter === category.id
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                    : "bg-gray-800 hover:text-pink-700 text-white hover:bg-yellow-400"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 px-5 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                data-aos="fade-up"
                data-aos-delay={index * 200}
                className="bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 group overflow-hidden transform hover:-translate-y-2"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                <div className="p-6">
                  <h3
                    data-cursorpointerText={true}
                    className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300"
                  >
                    {project.title}
                  </h3>
                  <p
                    data-cursorpointerMini={true}
                    className="text-gray-400 mb-4 line-clamp-2"
                  >
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.slice(0, 3).map((tech, i) => (
                      <span
                        key={i}
                        data-cursorpointer={true}
                        className="px-2 sm:px-3 py-0 grid place-items-center sm:py-1 bg-blue-900/30 text-blue-400 text-[11px] sm:text-sm font-medium rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-3 py-1 bg-gray-800 text-gray-400 text-sm font-medium rounded-full">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>

                  <div className="flex gap-3">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="flex-1 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300"
                    >
                      View Details
                    </button>
                    <a
                      href={project.githubUrl}
                      data-cursorpointermini={true}
                      className="p-2 bg-gray-800 text-gray-400 rounded-lg hover:bg-gray-700 transition-colors duration-300"
                    >
                      <Github size={20} data-cursorpointermini={true} />
                    </a>
                    <a
                      href={project.liveUrl}
                      data-cursorpointermini={true}
                      className="p-2 bg-gray-800 text-gray-400 rounded-lg hover:bg-gray-700 transition-colors duration-300"
                    >
                      <ExternalLink size={20} data-cursorpointermini={true} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-12" data-aos="fade-in">
              <p className="text-gray-400 text-lg">
                No projects found in this category.
              </p>
            </div>
          )}
        </div>

        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}

        <div
          className="w-[100vw] grid place-items-center mt-8"
          data-aos="zoom-in"
          data-aos-delay="200"
        >
          <button
            onClick={() => {
              navigate("/allProjects");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            data-cursorpointerMini={true}
          //   className="px-6 py-2 bg-blue-600 text-white rounded-lg"
          // >
           className="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
  >
            See All Projects
          </button>
        </div>
      </section>
    </>
  );
};

export default Projects;
