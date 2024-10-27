import React from 'react';

const Skills: React.FC = () => {
  const skills = ['React', 'TypeScript', 'Node.js', 'CSS', 'HTML', 'Git'];

  return (
    <section className="my-16 fade-in">
      <h2 className="text-3xl font-bold mb-8">Skills</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {skills.map((skill) => (
          <div key={skill} className="bg-gray-100 p-4 rounded-lg text-center">
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;