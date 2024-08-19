import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-lg fixed w-full z-10">
      <div className="container mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          <a href="#home" className="text-xl font-bold text-gray-800">My Portfolio</a>
          <div>
            <a href="#home" className="mx-2 text-gray-800 hover:text-indigo-600">Home</a>
            <a href="#about" className="mx-2 text-gray-800 hover:text-indigo-600">About</a>
            <a href="#projects" className="mx-2 text-gray-800 hover:text-indigo-600">Projects</a>
            <a href="#skills" className="mx-2 text-gray-800 hover:text-indigo-600">Skills</a>
            <a href="#contact" className="mx-2 text-gray-800 hover:text-indigo-600">Contact</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
