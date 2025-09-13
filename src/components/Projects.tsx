import React, { useState } from 'react';
import { ExternalLink, Github, X, ChevronLeft, ChevronRight } from 'lucide-react';
import ProjectModal from './ProjectModal';
import img1 from '../assets/Screenshot (607).png';
import workWhiz from '../assets/workwhiz.png';
import zaphira from '../assets/zaphira.png';
import expenseTracker from '../assets/expense-tracter.png';
import aligFoundation from '../assets/aligfoundation.png'
import fitPlus from '../assets/fitPlus.png'

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
      liveUrl: "https://www.workwhizapp.in/",
      category: "web",
      duration: "5 months",
      status: false,
      features: ["Instant Worker Matching", "Wide Range of Services", "Verified Worker Profiles", "Direct Communication", "Affordable Pricing"]
    },
    {
      id: 3,
      title: "Alig Foundation",
      description: "Alig Foundation is a coaching platform dedicated to guiding students with quality education, mentorship, and career development.",
      fullDescription: "Alig Foundation (accessible at aligfoundation.com) is an educational coaching website designed to provide structured learning, personalized mentorship, and comprehensive guidance for students. The platform focuses on empowering learners with academic excellence, exam preparation, and skill development through expert-led teaching and resources.",
      image: aligFoundation, 
      technologies: ["WordPress", "HTML", "Vanilla CSS"],
      githubUrl: "/", 
      liveUrl: "https://www.aligfoundation.com/",
      category: "web",
      duration: "1 Month",
      status: true,
      features: [
        "Expert Coaching Programs",
        "Personalized Mentorship",
        "Online and Offline Classes",
        "Exam Preparation Resources",
        "Career Guidance & Counseling"
      ]
},

    {
      id: 4,
      title: "Noor By Shayan",
      description: "A stunning portfolio website showcasing creative work and professional services.",
      fullDescription: "Zaphira Organic offers premium Ayurvedic skincare and haircare products made from 100% organic ingredients. From herbal shampoos and glow serums to nourishing soaps, every product is handcrafted in small batches, blending ancient wisdom with modern sustainability — free from sulfates, parabens, and harmful chemicals.",
      image: zaphira,
      technologies: ["React", "Next.js", "Sanity CMS", "Framer Motion"],
      githubUrl: "#",
      liveUrl: "https://zaphira-flax.vercel.app/",
      category: "web",
      duration: "3 month",
      status: false,      
      features: ["Smooth Animations", "CMS Integration", "SEO Optimized", "Contact Forms"]
    },
    {
      id: 5,
      title: "Expense Tracker Web App",
      description: "A smart and easy-to-use app to track expenses, manage budgets, and gain insights into your spending habits.",
      fullDescription: "The Expense Tracker App is a smart and user-friendly tool designed to help individuals and businesses manage their finances with ease. It allows you to record income, track daily expenses, categorize spending, and visualize your financial habits. With an intuitive interface and real-time data insights, this app ensures you stay in control of your budget and achieve your savings goals effortlessly.",
      image: expenseTracker,
      technologies: ["Vue.js", "Chart.js", "Weather API", "CSS Grid"],
      githubUrl: "https://github.com/aligasad/Expense-Tracker",
      liveUrl: "https://expense-tracker-xi-drab.vercel.app/",
      category: "app",
      duration: "2 months",
      status: true,
      features: ["Easy Expense & Income Tracking", "Categorization", "Data Visualization", "Budget Management"]
    },
    {
  id: 4,
  title: "Fit Plus",
  description: "Fit Plus is a fitness app that helps users track workouts, discover exercises, and stay motivated with personalized plans.",
  fullDescription: "Fit Plus is a modern exercise application built with React JS, Tailwind CSS, and API integrations to provide users with real-time workout data and personalized fitness plans. The app focuses on guiding users through structured exercise routines, tracking progress, and offering a variety of workouts to achieve health and fitness goals effectively.",
  image: fitPlus, // replace with your imported image variable
  technologies: ["React", "JavaScript", "Tailwind CSS", "API"],
  githubUrl: "https://github.com/aligasad/Physical-Health", 
  liveUrl: "https://fit-pulse-bay.vercel.app/", 
  category: "mobile",
  duration: "Ongoing",
  status: true,
  features: [
    "Personalized Workout Plans",
    "Exercise Library with API Integration",
    "Real-Time Progress Tracking",
    "Calorie & Fitness Monitoring",
    "User-Friendly Tailored UI"
  ]
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