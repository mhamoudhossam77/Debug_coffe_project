import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: "Movie App",
      description: "A comprehensive movie discovery application built with Flutter.",
      features: [
        "Real-time movie data from TMDb API",
        "Clean Architecture implementation",
        "Advanced searching and filtering",
        "Watchlist functionality with Hive"
      ],
      tech: ["Flutter", "Dart", "TMDb API", "Bloc", "Hive"],
      github: "https://share.google/F3TdqErNEhLCEJ1WZ"
    },
    {
      title: "Tasky App",
      description: "A productivity-focused task management application.",
      features: [
        "Task categorization and prioritization",
        "Local data persistence",
        "Push notifications for deadlines",
        "User-friendly UI/UX"
      ],
      tech: ["Flutter", "Dart", "Hive", "Local Notifications"],
      github: "https://share.google/a2MGWMSbfuHCS3pFw"
    },
    {
      title: "Quran Kareem App",
      description: "A digital Quran application with audio recitations and translations.",
      features: [
        "Complete Quran text with search",
        "Multi-language translations",
        "Audio streaming for recitations",
        "Bookmark and history features"
      ],
      tech: ["Flutter", "Dart", "Audio Player", "Shared Preferences"],
      github: "https://share.google/YTvX5w7hFQPBtCGjp"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 border-b-4 border-blue-600 inline-block pb-2">
            Projects
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col h-full border border-gray-100">
              <div className="p-6 flex-grow">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">{project.description}</p>
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-800 mb-2 text-sm uppercase tracking-wider">Key Features:</h4>
                  <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                    {project.features.map((feature, fIndex) => (
                      <li key={fIndex}>{feature}</li>
                    ))}
                  </ul>
                </div>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, tIndex) => (
                    <span key={tIndex} className="px-2 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="p-6 bg-gray-50 border-t border-gray-100 mt-auto">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-2 text-blue-600 font-medium hover:text-blue-800 transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                  <span>Repository</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
