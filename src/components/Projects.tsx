import React, { useState } from "react";
import { ExternalLink, Github } from "lucide-react";
import ProjectModal from "./ProjectModal";
import img1 from "../project-img/1.png";
import img2 from "../project-img/2.png";
import img3 from "../project-img/3.png";
import img4 from "../project-img/4.png";
import img5 from "../project-img/5.png";
import img6 from "../project-img/6.png";
import img7 from "../project-img/7.png";
import img8 from "../project-img/8.png";
import img9 from "../project-img/9.png";
import img10 from "../project-img/10.png";
import img11 from "../project-img/11.png";
import img12 from "../project-img/12.png";
import { useNavigate } from "react-router-dom";

const Projects = () => {
  const navigate = useNavigate();
  const [selectedProject, setSelectedProject] = useState(null);
  const [filter, setFilter] = useState("all");

  const projects = [
    {
      id: 1,
      title: "IslamEasy",
      description: "A platform focused on Islamic education and resources.",
      fullDescription: "Created a clean, resource-heavy website for Islamic learning and guidance.",
      image: img10,
      technologies: ["React", "Tailwind", "Responsive Design", "Lucide"],
      githubUrl: "https://github.com/Ali786-stu/pathfornekki",
      liveUrl: "https://pathfornekki.vercel.app/",
      category: "web",
      duration: "1 Month",
      status: true,
      features: ["Resource Library", "Clean Navigation", "Educational Content"],
    },
    {
      id: 2,
      title: "Tulkash Cab",
      description: "A premium cab booking and transport management system.",
      fullDescription: "Developed a professional cab service website with route calculation and booking management.",
      image: img2,
      technologies: ["Full Stack", "PHP", "Laravel", "React"],
      githubUrl: "https://github.com/Ali786-stu/Tulkash-Cab-Rental",
      liveUrl: "https://cab.tulkash.com/",
      category: "web",
      duration: "2 Months",
      status: true,
      features: ["Booking Engine", "Real-time Pricing", "Mobile Optimized"],
    },
    {
      id: 3,
      title: "Brobie",
      description: "A modern e-commerce platform for lifestyle and fashion.",
      fullDescription: "Designed and developed a full-featured e-commerce store with product management and secure checkout.",
      image: img3,
      technologies: ["Full Stack", "PHP", "Laravel", "React"],
      githubUrl: "https://github.com/Ali786-stu/brob-ie",
      liveUrl: "https://www.brobie.com/",
      category: "web",
      duration: "3 Weeks",
      status: true,
      features: ["Product Management", "Shopping Cart", "Responsive Design"],
    },
    {
      id: 4,
      title: "Luxury Wedding Photography",
      description: "A high-end gallery for premium wedding photography services.",
      fullDescription: "A cinematic photography portfolio featuring high-resolution galleries and booking integrations.",
      image: img4,
      technologies: ["Frontend", "React", "Tailwind", "Lucide"],
      githubUrl: "https://github.com/Ali786-stu/Studio-Luxury",
      liveUrl: "https://studio-luxury.vercel.app/",
      category: "web",
      duration: "1 Month",
      status: true,
      features: ["Image Galleries", "Cinematic Layout", "Contact Forms"],
    },
    {
      id: 5,
      title: "Hygifeel A Doctor's Choice",
      description: "A professional medical and healthcare product showcase.",
      fullDescription: "Created a trust-focused healthcare platform for medical professionals and their patients.",
      image: img5,
      technologies: ["Full Stack", "PHP", "Laravel", "MySQL"],
      githubUrl: "https://github.com/Ali786-stu/Hygifeel",
      liveUrl: "https://hygifeel.vercel.app/",
      category: "web",
      duration: "1 Month",
      status: true,
      features: ["Product Catalog", "Healthcare Information", "Responsive UI"],
    },
    {
      id: 6,
      title: "Luxury Laundry & Dry Cleaning",
      description: "A premium service website for high-end garment care.",
      fullDescription: "Developed a luxury laundry service platform with integrated pricing and service details.",
      image: img6,
      technologies: ["Frontend", "React", "Framer Motion", "Tailwind"],
      githubUrl: "https://github.com/Ali786-stu/laundrylux",
      liveUrl: "https://luxelaundry.vercel.app/",
      category: "web",
      duration: "2 Weeks",
      status: true,
      features: ["Service Pricing", "Booking Options", "Premium Aesthetics"],
    },
    {
      id: 7,
      title: "Defence Academy",
      description: "An educational platform for defense training and coaching.",
      fullDescription: "A comprehensive website for a defense academy featuring course details and student registration.",
      image: img7,
      technologies: ["Full Stack", "PHP", "Laravel", "MySQL"],
      githubUrl: "https://github.com/Ali786-stu/Defence-Academy",
      liveUrl: "https://defence-academy.vercel.app/",
      category: "web",
      duration: "1.5 Months",
      status: true,
      features: ["Course Management", "Student Registration", "Information Hub"],
    },
    {
      id: 8,
      title: "Expense Tracker Pro",
      description: "A powerful financial management tool for tracking expenses.",
      fullDescription: "Built a modern financial application that helps users manage their budget and track daily expenses with charts.",
      image: img8,
      technologies: ["Frontend", "React", "Chart.js", "Tailwind"],
      githubUrl: "https://github.com/Ali786-stu/Modern-Expense-Tracker-Web-App",
      liveUrl: "https://modern-expense-tracker-web-app.vercel.app/",
      category: "app",
      duration: "3 Weeks",
      status: true,
      features: ["Expense Analytics", "Budget Management", "Data Persistence"],
    },
    {
      id: 9,
      title: "PDF Merger",
      description: "A handy tool for merging multiple PDF files quickly.",
      fullDescription: "Developed a web-based PDF utility that allows users to upload and merge PDF documents seamlessly.",
      image: img9,
      technologies: ["Frontend", "React", "JavaScript", "PDF-Lib"],
      githubUrl: "https://github.com/Ali786-stu/PDF-Merger",
      liveUrl: "https://pdf-merger-two-eta.vercel.app/",
      category: "app",
      duration: "2 Weeks",
      status: true,
      features: ["File Upload", "PDF Processing", "Instant Download"],
    },
    {
      id: 10,
      title: "RepairWallah",
      description: "A comprehensive service platform for home repairs and maintenance.",
      fullDescription: "Built a robust service marketplace for home repairs, featuring service categories and an easy booking interface.",
      image: img1,
      technologies: ["Full Stack", "PHP", "Laravel", "MySQL"],
      githubUrl: "#",
      liveUrl: "https://repaiirwallah-web.vercel.app/",
      category: "web",
      duration: "1 Month",
      status: true,
      features: ["Service Categories", "Booking System", "Responsive Design"],
    },
    {
      id: 11,
      title: "E-Patang",
      description: "A digital marketplace or platform for kite enthusiasts.",
      fullDescription: "Developed a unique web platform dedicated to kite flying culture and community resources.",
      image: img11,
      technologies: ["Full Stack", "PHP", "Laravel", "React"],
      githubUrl: "https://github.com/Ali786-stu/e-patang",
      liveUrl: "https://e-patang.vercel.app/",
      category: "web",
      duration: "3 Weeks",
      status: true,
      features: ["Interactive UI", "Community Resources", "Responsive Design"],
    },
    {
      id: 12,
      title: "Ember Arts",
      description: "A premium portfolio or gallery for artistic works.",
      fullDescription: "A sophisticated art gallery website showcasing premium furniture and artistic designs.",
      image: img12,
      technologies: ["Frontend", "React", "Tailwind", "Premium CSS"],
      githubUrl: "https://github.com/Ali786-stu/ember-arts",
      liveUrl: "https://ember-arts.vercel.app/",
      category: "web",
      duration: "1 Month",
      status: true,
      features: ["Artistic Layout", "High-quality Imagery", "Smooth Transitions"],
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
      <section className="projects-bg py-20 px-4 sm:px-6 lg:px-8 min-h-screen relative overflow-hidden">
        {/* Animated Background Layers */}
        <div className="mesh-gradient"></div>
        <div className="tech-grid"></div>
        <div className="scanner-line"></div>
        <div className="glow-orb top-[-10%] left-[-10%]"></div>
        <div className="glow-orb bottom-[-10%] right-[-10%]" style={{ animationDelay: "-5s" }}></div>
        
        <div className="max-w-7xl mx-auto relative z-10" data-aos="fade-up">
          <div
            className="text-center mb-16"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <h2
              data-cursorpointer={true}
              className="text-4xl md:text-5xl font-bold text-blue-500 mb-6"
            >
              Masterpiece{" "}
              <span
                data-cursorpointer={true}
                className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
              >
                Collection
              </span>
            </h2>
            <p
              data-cursorpointerText={true}
              className="text-xl text-gray-400 max-w-3xl mx-auto font-medium"
            >
              A showcase of premium full-stack solutions and high-performance digital experiences.
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
