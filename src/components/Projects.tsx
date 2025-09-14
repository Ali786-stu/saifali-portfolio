import React, { useState } from "react";
import { ExternalLink, Github } from "lucide-react";
import ProjectModal from "./ProjectModal";
import img1 from "../assets/Screenshot (607).png";
import workWhiz from "../assets/workwhiz.png";
import zaphira from "../assets/zaphira.png";
import expenseTracker from "../assets/expense-tracter.png";
import aligFoundation from "../assets/aligfoundation.png";
import fitPlus from "../assets/fitPlus.png";
import { useNavigate } from "react-router-dom";

const Projects = () => {
  const navigate = useNavigate();
  const [selectedProject, setSelectedProject] = useState(null);
  const [filter, setFilter] = useState("all");

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description:
        "A modern e-commerce platform with advanced features and smooth user experience.",
      fullDescription:
        "A comprehensive e-commerce solution built with React and Node.js...",
      image: img1,
      technologies: [
        "React",
        "Node.js",
        "Firebase",
        "RazorPay",
        "Tailwind CSS",
      ],
      githubUrl: "https://github.com/aligasad/shopfinity",
      liveUrl: "https://shopfinity-black.vercel.app/",
      category: "web",
      duration: "2 months",
      status: true,
      features: [
        "User Authentication",
        "Payment Integration",
        "Admin Dashboard",
        "Real-time Updates",
      ],
    },
    {
      id: 2,
      title: "Work Whiz",
      description:
        "WorkWhiz is a platform that instantly connects people with skilled local workers.",
      fullDescription:
        "WorkWhiz (accessible at workwhizapp.in) is a digital platform...",
      image: workWhiz,
      technologies: ["React", "JavaScript", "Firebase", "Material-UI"],
      githubUrl: "https://github.com/aligasad/work-whiz",
      liveUrl: "https://www.workwhizapp.in/",
      category: "web",
      duration: "5 months",
      status: false,
      features: [
        "Instant Worker Matching",
        "Wide Range of Services",
        "Verified Profiles",
      ],
    },
    {
      id: 3,
      title: "Alig Foundation",
      description:
        "Coaching platform guiding students with quality education & mentorship.",
      fullDescription:
        "Alig Foundation (accessible at aligfoundation.com) is an educational platform...",
      image: aligFoundation,
      technologies: ["WordPress", "HTML", "Vanilla CSS"],
      githubUrl: "/",
      liveUrl: "https://www.aligfoundation.com/",
      category: "web",
      duration: "1 Month",
      status: true,
      features: ["Expert Coaching Programs", "Mentorship", "Career Guidance"],
    },
    {
      id: 4,
      title: "Noor By Shayan",
      description: "Portfolio website showcasing creative work.",
      fullDescription:
        "Zaphira Organic offers premium Ayurvedic skincare and haircare products...",
      image: zaphira,
      technologies: ["React", "Next.js", "Sanity CMS", "Framer Motion"],
      githubUrl: "#",
      liveUrl: "https://zaphira-flax.vercel.app/",
      category: "web",
      duration: "3 month",
      status: false,
      features: ["Smooth Animations", "CMS Integration", "SEO Optimized"],
    },
    {
      id: 5,
      title: "Expense Tracker Web App",
      description: "Smart app to track expenses, budgets, and insights.",
      fullDescription:
        "The Expense Tracker App is designed to help individuals manage finances...",
      image: expenseTracker,
      technologies: ["Vue.js", "Chart.js", "Weather API", "CSS Grid"],
      githubUrl: "https://github.com/aligasad/Expense-Tracker",
      liveUrl: "https://expense-tracker-xi-drab.vercel.app/",
      category: "app",
      duration: "2 months",
      status: true,
      features: ["Expense Tracking", "Categorization", "Data Visualization"],
    },
    {
      id: 6,
      title: "Fit Plus",
      description: "A fitness app that helps users track workouts & plans.",
      fullDescription:
        "Fit Plus is a modern exercise app built with React & Tailwind...",
      image: fitPlus,
      technologies: ["React", "JavaScript", "Tailwind CSS", "API"],
      githubUrl: "https://github.com/aligasad/Physical-Health",
      liveUrl: "https://fit-pulse-bay.vercel.app/",
      category: "mobile",
      duration: "Ongoing",
      status: true,
      features: ["Workout Plans", "Exercise Library", "Progress Tracking"],
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
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900 min-h-screen">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 data-cursorpointer={true} className="text-4xl md:text-5xl font-bold text-white mb-6">
              My{" "}
              <span data-cursorpointer={true} className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Projects
              </span>
            </h2>
            <p data-cursorpointerText={true} className="text-xl text-gray-400 max-w-3xl mx-auto">
              Here are some of my recent projects that showcase my skills in web
              development.
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id} 
                onClick={() => setFilter(category.id)}
                data-cursorpointer={true}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  filter === category.id
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                    : "bg-gray-800 text-gray-300 hover:bg-gray-700"
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
                  <h3 data-cursorpointerText={true} className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p data-cursorpointerMini={true} className="text-gray-400 mb-4 line-clamp-2">
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
            <div className="text-center py-12">
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
      </section>
      <div className="w-[100vw] grid place-items-center mb-3">
        <button
          onClick={() => {
            navigate("/allProjects");
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          data-cursorpointerMini={true}
          className="px-6 py-2 bg-blue-600 text-white rounded-lg"
        >
          See All Projects
        </button>
      </div>
    </>
  );
};

export default Projects;
