import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-lg fixed w-full h-15 z-10">
      <div className="container mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          <a href="#home" className="text-3xl font-bold text-gray-800 font-serif ">My Portfolio</a>
          <div>
            <a href="#home" className="text-xl mx-2 text-gray-800 hover:text-indigo-600 font-serif">Home</a>
            <a href="#about" className="text-xl mx-2 text-gray-800 hover:text-indigo-600 font-serif">About</a>
            <a href="#projects" className="text-xl mx-2 text-gray-800 hover:text-indigo-600 font-serif">Projects</a>
            <a href="#skills" className="text-xl mx-2 text-gray-800 hover:text-indigo-600 font-serif">Skills</a>
            <a href="#contact" className="text-xl mx-2 text-gray-800 hover:text-indigo-600 font-serif">Contact</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
