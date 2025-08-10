import React, { useState } from 'react';
import { ExternalLink, Github, X, ChevronLeft, ChevronRight } from 'lucide-react';
import ProjectModal from './ProjectModal';
import img1 from '../assets/Screenshot (607).png';
import workWhiz from '../assets/workwhiz.png';
import zaphira from '../assets/zaphira.png';

interface Project {
  id: number;
  title: string;
  description: string;
  fullDescription: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
  category: string;
  duration: string;
  status: boolean;
  features: string[];
}

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [filter, setFilter] = useState('all');

  const projects: Project[] = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A modern e-commerce platform with advanced features and smooth user experience.",
      fullDescription: "A comprehensive e-commerce solution built with React and Node.js, featuring user authentication, product management, shopping cart functionality, payment integration, and admin dashboard. The platform includes advanced search filters, wishlist functionality, and responsive design optimized for all devices.",
      image: img1,
      technologies: ["React", "Node.js", "Firebase", "RazorPay",  "Tailwind CSS"],
      githubUrl: "https://github.com/aligasad/shopfinity",
      liveUrl: "https://shopfinity-black.vercel.app/",
      category: "web",
      duration: "2 months",
      status: true,
      features: ["User Authentication", "Payment Integration", "Admin Dashboard", "Real-time Updates"],
      
    },
    {
      id: 2,
      title: "Work Whiz",
      description: "WorkWhiz is a platform that instantly connects people with skilled local workers for quick and reliable services.",
      fullDescription: "WorkWhiz (accessible at workwhizapp.in) is a digital platform that facilitates connecting local workers with those in need of their services, whether for short-term tasks or urgent requirements. The site emphasizes ease of hiring—underscoring a focus on delivering prompt, efficient access to local labor when and where it's needed.",
      image: workWhiz,
      technologies: ["React", "JavaScript", "Firebase", "Material-UI"],
      githubUrl: "https://github.com/aligasad/work-whiz",
      liveUrl: "https://work-whiz-lime.vercel.app/",
      category: "web",
      duration: "2 months",
      status: true,
      features: ["Instant Worker Matching", "Wide Range of Services", "Verified Worker Profiles", "Direct Communication", "Affordable Pricing"]
    },
    {
      id: 3,
      title: "Noor By Shayan",
      description: "A stunning portfolio website showcasing creative work and professional services.",
      fullDescription: "Zaphira Organic offers premium Ayurvedic skincare and haircare products made from 100% organic ingredients. From herbal shampoos and glow serums to nourishing soaps, every product is handcrafted in small batches, blending ancient wisdom with modern sustainability — free from sulfates, parabens, and harmful chemicals.",
      image: zaphira,
      technologies: ["React", "Next.js", "Sanity CMS", "Framer Motion"],
      githubUrl: "#",
      liveUrl: "#",
      category: "web",
      duration: "3 month",
      status: false,      
      features: ["Smooth Animations", "CMS Integration", "SEO Optimized", "Contact Forms"]
    },
    {
      id: 4,
      title: "Weather Dashboard",
      description: "A comprehensive weather dashboard with forecasts and interactive maps.",
      fullDescription: "An advanced weather application providing detailed forecasts, interactive maps, and weather analytics. Features include location-based weather, severe weather alerts, historical data, and customizable widgets. Built with modern APIs and responsive design.",
      image: "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Vue.js", "Chart.js", "Weather API", "CSS Grid"],
      githubUrl: "#",
      liveUrl: "#",
      category: "app",
      duration: "2 months",
      status: true,
      features: ["Interactive Maps", "Weather Alerts", "Data Visualization", "Location Services"]
    }
  ];

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'web', label: 'Web Development' },
    { id: 'app', label: 'Mobile Apps' },
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            My <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Here are some of my recent projects that showcase my skills and expertise in web development and design.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setFilter(category.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                filter === category.id
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                  : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 group overflow-hidden transform hover:-translate-y-2"
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
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.slice(0, 3).map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-medium rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 text-sm font-medium rounded-full">
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
                    className="p-2 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
                  >
                    <Github size={20} />
                  </a>
                  <a
                    href={project.liveUrl}
                    className="p-2 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
                  >
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 dark:text-gray-400 text-lg">
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
  );
};

export default Projects;