import React from 'react';

const Projects = () => {
  return (
    <section id="projects" className="bg-gray-200 py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {/* Project 1 */}
          <div className="bg-white p-4 shadow-lg rounded">
            <img  src="/CNK-BGR.png" alt="Project 1" className="w-full h-75 object-cover rounded" />
            <h3 className="text-xl font-bold mt-4">CNK-BGR</h3>
            <p className="mt-2">Image baclgroun remover application.
              Technologys Reac.js + Vite,javascript,HTML,TilwindCSS,Firebase,API Servises</p>
            <a href="https://github.com/ChanukaIT22560544/-VITE-REACT-FIREBASE-Web-Application" className="text-indigo-600 hover:underline">View Project in GIT</a><br/>
            <a href="https://lakshankkc.netlify.app/" className="text-indigo-600 hover:underline">Preview site</a>
          </div>
          {/* Project 2 */}
          <div className="bg-white p-4 shadow-lg rounded">
            <img src="/Stroop test.png" alt="Project 1" className="w-20 h-600 object-cover rounded" />
            <h3 className="text-xl font-bold mt-4">STROOP TEST</h3>
            <p className="mt-2">Tis is a psychological android mobile game.Technologys Kotline, Shared Preferences and Android studio.</p>
            <a href="https://github.com/ChanukaIT22560544/Stroop-test" className="text-indigo-600 hover:underline">View Project in GIT</a>
          </div>
          {/* Project 3 */}
          <div className="bg-white p-4 shadow-lg rounded">
            <img src="" alt="Project 1" className="w-full h-48 object-cover rounded" />
            <h3 className="text-xl font-bold mt-4">Project 1</h3>
            <p className="mt-2">A brief description of project 1...</p>
            <a href="#" className="text-indigo-600 hover:underline">View Project in GIT</a>
          </div>
          {/* Project 4 */}
          <div className="bg-white p-4 shadow-lg rounded">
            <img src="" alt="Project 1" className="w-full h-48 object-cover rounded" />
            <h3 className="text-xl font-bold mt-4">Project 1</h3>
            <p className="mt-2">A brief description of project 1...</p>
            <a href="#" className="text-indigo-600 hover:underline">View Project in GIT</a>
          </div>
          {/* Project 5 */}
          <div className="bg-white p-4 shadow-lg rounded">
            <img src="" alt="Project 1" className="w-full h-48 object-cover rounded" />
            <h3 className="text-xl font-bold mt-4">Project 1</h3>
            <p className="mt-2">A brief description of project 1...</p>
            <a href="#" className="text-indigo-600 hover:underline">View Project in GIT</a>
          </div>
          {/* Project 6 */}
          <div className="bg-white p-4 shadow-lg rounded">
            <img src="" alt="Project 1" className="w-full h-48 object-cover rounded" />
            <h3 className="text-xl font-bold mt-4">Project 1</h3>
            <p className="mt-2">A brief description of project 1...</p>
            <a href="#" className="text-indigo-600 hover:underline">View Project in GIT</a>
          </div>
          {/* More projects can be added similarly */}
        </div>
      </div>
    </section>
  );
};

export default Projects;
