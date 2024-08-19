import React from 'react';

const Skills = () => {
  return (
    <section id="skills" className="container mx-auto px-6 py-16">
      <h2 className="text-3xl font-bold text-center">Skills</h2>
      <div className="flex flex-wrap justify-center mt-8">
        <span className="m-2 px-4 py-2 bg-indigo-600 text-white rounded">HTML</span>
        <span className="m-2 px-4 py-2 bg-indigo-600 text-white rounded">CSS</span>
        <span className="m-2 px-4 py-2 bg-indigo-600 text-white rounded">JavaScript</span>
        {/* Add more skills similarly */}
      </div>
    </section>
  );
};

export default Skills;
