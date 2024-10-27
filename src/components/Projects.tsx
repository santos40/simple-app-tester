import React from 'react';

const Projects: React.FC = () => {
  const projects = [
    { title: 'E-commerce Platform', description: 'A full-stack online store built with React and Node.js' },
    { title: 'Weather App', description: 'A responsive weather application using a third-party API' },
    { title: 'Task Manager', description: 'A productivity app built with React and Firebase' },
  ];

  return (
    <section className="my-16 fade-in">
      <h2 className="text-3xl font-bold mb-8">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div key={project.title} className="border border-gray-200 p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-gray-600">{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;