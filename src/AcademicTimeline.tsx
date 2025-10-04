import React from "react";
import { GraduationCap } from "lucide-react";
import bgVideo from "./assets/background-vd.mp4";

type Education = {
  year: string;
  degree: string;
  score: string;
  status: "Completed" | "In Progress";
};

const education: Education[] = [
  {
    year: "2025",
    degree: "B.Tech (CSE)",
    score: "CGPA 7.70",
    status: "Completed",
  },
  // {
  //   year: "2023",
  //   degree: "B.Sc. Life Science",
  //   score: "63.05%",
  //   status: "Completed",
  // },
  {
    year: "2019",
    degree: "Intermediate",
    score: "62%",
    status: "Completed",
  },
  {
    year: "2017",
    degree: "High School",
    score: "79%",
    status: "Completed",
  },
];

const AcademicTimeline: React.FC = () => {
  return (
    <section id="education" className="relative py-20 overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={bgVideo} type="video/mp4" />
        {/* Your browser does not support the video tag. */}
      </video>

      {/* Overlay for better contrast */}
      <div className="absolute inset-0 bg-indigo-950/50"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div
          className="text-center mb-16"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-yellow-500 mb-4">
            Academic Background
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto font-bold">
            A comprehensive academic foundation emphasizing software
            development, modern technologies, and practical problem-solving
            skills.
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-px h-full w-1 bg-yellow-600"></div>

          <div className="space-y-12">
            {education.map((edu, index) => (
              <div
                key={index}
                className={`flex items-center ${
                  index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                }`}
                data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
                data-aos-duration="1200"
                data-aos-delay={index * 200}
              >
                {/* Card Content */}
                <div
                  className={`w-1/2 ${
                    index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"
                  }`}
                >
                  <div className="bg-gray-800/50 hover:bg-orange-500 border border-gray-700 rounded-lg shadow-md hover:shadow-xl hover:border-teal-500 transition-all duration-300">
                    <div className="p-6">
                      <div className="flex items-center gap-3 mb-3">
                        {index % 2 === 0 ? (
                          <>
                            <div className="flex-1">
                              <span
                                className={`inline-block px-3 py-1 rounded-full text-sm font-medium mb-2 ${
                                  edu.status === "In Progress"
                                    ? "bg-teal-600 text-white"
                                    : "bg-gray-700 text-gray-300"
                                }`}
                              >
                                {edu.status}
                              </span>
                              <h3 className="text-xl font-semibold text-white">
                                {edu.degree}
                              </h3>
                            </div>
                            <GraduationCap className="h-6 w-6 text-teal-400" />
                          </>
                        ) : (
                          <>
                            <GraduationCap className="h-6 w-6 text-teal-400" />
                            <div className="flex-1">
                              <span
                                className={`inline-block px-3 py-1 rounded-full text-sm font-medium mb-2 ${
                                  edu.status === "In Progress"
                                    ? "bg-teal-600 text-white"
                                    : "bg-gray-700 text-gray-300"
                                }`}
                              >
                                {edu.status}
                              </span>
                              <h3 className="text-xl font-semibold text-white">
                                {edu.degree}
                              </h3>
                            </div>
                          </>
                        )}
                      </div>
                      <p className="text-2xl font-bold text-teal-400 mb-1">
                        {edu.score}
                      </p>
                      <p className="text-sm text-white font-bold">
                        Academic Performance
                      </p>
                    </div>
                  </div>
                </div>

                {/* Timeline Dot */}
                <div
                  className="relative z-10 w-4 h-4 bg-teal-500 rounded-full border-4 border-white shadow-lg"
                  data-aos="zoom-in"
                  data-aos-delay={index * 300}
                >
                  <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-teal-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {edu.year}
                  </div>
                </div>
                <div className="w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AcademicTimeline;
