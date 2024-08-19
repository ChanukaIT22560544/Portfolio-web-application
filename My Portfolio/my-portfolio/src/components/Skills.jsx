import React from 'react';

const Skills = () => {
  return (
    <section id="skills" className="container mx-auto px-6 py-16">
      <h2 className="text-3xl font-bold text-center">Skills</h2>
      <div className="flex flex-wrap justify-center mt-8">
        <span className="m-2 px-4 py-2 bg-indigo-600 text-white rounded">HTML</span>
        <span className="m-2 px-4 py-2 bg-indigo-600 text-white rounded">CSS</span>
        <span className="m-2 px-4 py-2 bg-indigo-600 text-white rounded">JavaScript</span>
        <span className="m-2 px-4 py-2 bg-indigo-600 text-white rounded">React.js</span>
        <span className="m-2 px-4 py-2 bg-indigo-600 text-white rounded">Firebase</span>
        <span className="m-2 px-4 py-2 bg-indigo-600 text-white rounded">Vite</span>
        <span className="m-2 px-4 py-2 bg-indigo-600 text-white rounded">TilwindCss</span>
        <span className="m-2 px-4 py-2 bg-indigo-600 text-white rounded">MogoDB</span>
        <span className="m-2 px-4 py-2 bg-indigo-600 text-white rounded">Next.js</span>
        <span className="m-2 px-4 py-2 bg-indigo-600 text-white rounded">PHP</span>
        <span className="m-2 px-4 py-2 bg-indigo-600 text-white rounded">MySql</span>
        <span className="m-2 px-4 py-2 bg-indigo-600 text-white rounded">Android Studio</span>
        {/* Add more skills similarly */}
      </div>
    </section>
  );
};

export default Skills;
