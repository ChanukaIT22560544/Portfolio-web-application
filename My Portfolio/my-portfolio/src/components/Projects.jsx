import React from 'react';
import './Project.css';

const Projects = () => {
  
  return (
    <section id="projects" className="bg-gray-200 py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center font-serif">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">

          {/* Project 1 */}
          <div className="bg-white p-4 shadow-lg rounded project-box ">
            <img  src="/CNK-BGR.png" alt="Project 1" className="w-full h-75 object-cover rounded" />
            <h3 className="text-xl font-bold mt-4">CNK-BGR</h3>
            <p className="mt-2">Image background remover application.
              Developed by using Reac + Vite,Node.js,JS,HTML,CSS,TilwindCSS,Firebase Firestore & Firebase authentication and API Servises</p>
            <a href="https://github.com/ChanukaIT22560544/-VITE-REACT-FIREBASE-Web-Application" className="text-indigo-600 hover:underline">View Project in GIT</a><br/>
            <a href="https://lakshankkc.netlify.app/" className="text-indigo-600 hover:underline">Preview site</a>
          </div>

          {/* Project 2 */}
          <div className="bg-white p-4 shadow-lg rounded project-box">
            <img src="/Stroop test.png" alt="Project 1" className="w-full h-600 object-cover rounded" />
            <h3 className="text-xl font-bold mt-4">STROOP TEST</h3>
            <p className="mt-2">Tis is a psychological android mobile game.Developed by using Kotline, Shared Preferences and Android studio.</p>
            <a href="https://github.com/ChanukaIT22560544/Stroop-test" className="text-indigo-600 hover:underline">View Project in GIT</a>
          </div>

          {/* Project 3 */}
          <div className="bg-white p-4 shadow-lg rounded project-box">
            <img src="/Balloons POP.png" alt="Project 1" className="w-full h-48 object-cover rounded" />
            <h3 className="text-xl font-bold mt-4">Balloons POP</h3>
            <p className="mt-2">The Funny Android mobile game.Developed by using Kotline, Shared Preferences and Android studio.Individual Assignment of 2nd year 2nd semester Mobile Application Development module</p>
            <a href="https://github.com/ChanukaIT22560544/Balloons-POP" className="text-indigo-600 hover:underline">View Project in GIT</a>
          </div>

          {/* Project 4 */}
          <div className="bg-white p-4 shadow-lg rounded project-box">
            <img src="/Calculator.png" alt="Project 1" className="w-full h-48 object-cover rounded" />
            <h3 className="text-xl font-bold mt-4">CALCULATOR</h3>
            <p className="mt-2">Tis is my 1st project of React.js.Developed by using React.js,Node.js,HTML,CSS and JS</p>
            <a href="https://github.com/ChanukaIT22560544/React-Calculator" className="text-indigo-600 hover:underline">View Project in GIT</a>
          </div>

          {/* Project 5 */}
          <div className="bg-white p-4 shadow-lg rounded project-box">
            <img src="/EventWing.png" alt="Project 1" className="w-full h-48 object-cover rounded" />
            <h3 className="text-xl font-bold mt-4">Figma App Design</h3>
            <p className="mt-2">This is Full mobile application Design using Figma. Individual Assignment of 2nd year 2nd semester Mobile Application Development module </p>
            <a href="https://www.figma.com/proto/IMSs2LzSc5CXKgMLk6e0Zx/IT22560544?node-id=160-34&starting-point-node-id=6%3A3" className="text-indigo-600 hover:underline">View Prototype in figma</a>
          </div>

          {/* Project 6 */}
          <div className="bg-white p-4 shadow-lg rounded project-box">
            <img src="/Snake game.png" alt="Project 1" className="w-full h-48 object-cover rounded" />
            <h3 className="text-xl font-bold mt-4">Snake Game</h3>
            <p className="mt-2">This is Web Snake Game .Developed by using HTML,CSS and JS.</p>
            <a href="https://github.com/ChanukaIT22560544/Snake-Saffary" className="text-indigo-600 hover:underline">View Project in GIT</a>
          </div>

            {/* Project 7*/}
            <div className="bg-white p-4 shadow-lg rounded project-box">
            <img src="/Matrix Calculator.png" alt="Project 1" className="w-full h-48 object-cover rounded" />
            <h3 className="text-xl font-bold mt-4">Matrix Calculator</h3>
            <p className="mt-2">This is Matrix Calculator Python Application.Devloped by using PYTHON,HTML,CSS and Flask.</p>
            <a href="https://github.com/ChanukaIT22560544/Matrix-Calculator" className="text-indigo-600 hover:underline">View Project in GIT</a>
          </div>

            {/* Project 8*/}
            <div className="bg-white p-4 shadow-lg rounded project-box">
            <img src="/EventWing.png" alt="Project 1" className="w-full h-48 object-cover rounded" />
            <h3 className="text-xl font-bold mt-4">EventWing </h3>
            <p className="mt-2">EventWing is Android mobile application.This is a Android development of above figma disigned application.  </p>
            <a href="https://github.com/ChanukaIT22560544/MAD-Project-2/tree/main" className="text-indigo-600 hover:underline">View Project in GIT</a>
          </div>

            {/* Project 9*/}
            <div className="bg-white p-4 shadow-lg rounded project-box">
            <img src="/Portfolio.png" alt="Project 1" className="w-full h-48 object-cover rounded" />
            <h3 className="text-xl font-bold mt-4">My Portfolio</h3>
            <p className="mt-2">This is my portfolio web application.Developed by using React.js,Node.js,TilwindCss,EmailJs,CSS,HTML,Three.js</p>
            <a href="https://github.com/ChanukaIT22560544/Portfolio-web-application" className="text-indigo-600 hover:underline">View Project in GIT</a><br/>
            <a href="https://chanuka811.netlify.app" className="text-indigo-600 hover:underline">Preview site</a>
          </div>

            {/* Project 10 */}
            <div className="bg-white p-4 shadow-lg rounded project-box">
            <img src="/Ecoride.PNG" alt="Project 1" className="w-full h-55 object-cover rounded" />
            <h3 className="text-xl font-bold mt-4">E-VEHICLE RENTING SYSTEM
            </h3>
            <p className="mt-2">Built a MERN stack web application for E-Vehicle renting as part of
              our ITP module. Implemented security measures such as JWT
              authentication and role-based access controls. Gained significant
              experience with React.js, Node.js, Express.js, Redux, and MongoDB.</p>

            <a href="https://github.com/ChanukaIT22560544" className="text-indigo-600 hover:underline">View Project in GIT</a>
          </div>

            {/* Project 11 */}
            <div className="bg-white p-4 shadow-lg rounded project-box">
            <img src="" alt="Project 1" className="w-full h-48 object-cover rounded" />
            <h3 className="text-xl font-bold mt-4">ONLINE TOURE GUID SYSTEM
            </h3>
            <p className="mt-2">Developed a web application using Java technologies with SQL
              Server for database integration. The project included CRUD
              operations and core functionalities like registration, login, and
              booking, with each team member contributing unique development
              aspects.</p>
            <a href="#" className="text-indigo-600 hover:underline">View Project in GIT</a>
          </div>
          
            {/* Project 12*/}
            <div className="bg-white p-4 shadow-lg rounded project-box">
            <img src="" alt="Project 1" className="w-full h-48 object-cover rounded" />
            <h3 className="text-xl font-bold mt-4">ONLINE HOTEL MANAGEMENT SYSTEM</h3>
            <p className="mt-2">Developed a web-based hotel management system using HTML,
            CSS, and JavaScript for the frontend, PHP for backend development,
            and MySQL for the database. Leveraged MVC architecture to ensure
            efficient handling of hotel operations such as bookings, customer
            management, and room allocation.</p>
            <a href="#" className="text-indigo-600 hover:underline">View Project in GIT</a>
          </div>

          {/* More projects can be added similarly */}
        </div>
      </div>
    </section>
  );
};

export default Projects;
