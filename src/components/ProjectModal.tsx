import React, { useEffect } from 'react';
import { X, Github, ExternalLink, Calendar, Users } from 'lucide-react';

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

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
      onClick={onClose} // Backdrop click closes modal
    >
      <div
        className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto animate-scale-up"
        onClick={(e) => e.stopPropagation()} // Prevent close when clicking inside modal
      >
        {/* Header */}
        <div className="relative">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-64 object-cover rounded-t-2xl"
          />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 bg-white/90 dark:bg-gray-900/90 text-gray-700 dark:text-gray-300 rounded-full hover:bg-white dark:hover:bg-gray-900 transition-colors duration-200"
          >
            <X size={24} />
          </button>
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-t-2xl"></div>
          <div className="absolute bottom-4 left-6">
            <h2 className="text-3xl font-bold text-white mb-2">{project.title}</h2>
            <div className="flex items-center gap-4 text-white/80">
              <div className="flex items-center gap-1">
                <Calendar size={16} />
                <span className="text-sm">2023</span>
              </div>
              <div className="flex items-center gap-1">
                <Users size={16} />
                <span className="text-sm">Solo Project</span>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-8">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="md:col-span-2">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Project Overview
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                {project.fullDescription}
              </p>

              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Key Features
              </h3>
              <ul className="space-y-3 mb-6">
                {project.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-600 dark:text-gray-400">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="flex gap-4">
                <a
                  href={project.liveUrl}
                  className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300 flex items-center gap-2"
                >
                  <ExternalLink size={20} />
                  View Live
                </a>
                <a
                  href={project.githubUrl}
                  className="px-6 py-3 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 font-semibold rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300 flex items-center gap-2"
                >
                  <Github size={20} />
                  Source Code
                </a>
              </div>
            </div>

            {/* Sidebar */}
            <div className="md:col-span-1">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Technologies Used
              </h3>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-medium rounded-lg"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Project Details
              </h3>
              <div className="space-y-4">
                <div>
                  <span className="text-sm font-medium text-gray-500 dark:text-gray-400 block">
                    Category
                  </span>
                  <span className="text-gray-900 dark:text-white capitalize">
                    {project.category} Development
                  </span>
                </div>
                <div>
                  <span className="text-sm font-medium text-gray-500 dark:text-gray-400 block">
                    Status
                  </span>
                  <span className="text-green-600 dark:text-green-400">{project.status ? "Completed" : "Under Development"}</span>
                </div>
                <div>
                  <span className="text-sm font-medium text-gray-500 dark:text-gray-400 block">
                    Duration
                  </span>
                  <span className="text-gray-900 dark:text-white">{project.duration}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
