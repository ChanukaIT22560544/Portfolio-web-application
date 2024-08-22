import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="bg-white-200 container mx-auto px-6 py-16 w-full">
      <h2 className="text-3xl font-bold text-center font-serif">About Me</h2>
      <p className="mt-4 text-center font-serif text-xl">
      I am an undergraduate student currently pursuing a BSc (Hons) Degree in Information Technology at SLIIT.
      My academic journey has equipped me with a strong foundation in IT principles and practices,
      and I am passionate about exploring the latest technologies.
      I am dedicated to honing my skills in various areas of software development, including web and mobile application development. I thrive on tackling challenging projects and am eager to apply my knowledge to real-world scenarios, contributing to innovative solutions that drive progress in the tech industry.
      </p>
      <br /><br />
      <h2 className="text-xl font-bold text-center font-serif">E  D  U  C  A  T  I  O  N</h2>
      <br /><br />
      
      <div className="flex flex-col items-center">
        
        <a  className="img" href="https://web.facebook.com/kahandamahavidyalaya/?_rdc=1&_rdr" target="_blank" rel="noopener noreferrer">
          <img src="/K.M.V.jpeg" alt="Kahanda Maha Vidyalaya" className="w-25 h-25 object-cover rounded" />
        </a>
        
        <p className="mt-4 text-center font-serif text-xl">2006 - 2017<br/>G/KAHANDA MAHA VIDYALAYA<br/>GALLE</p>
        <p>Up to Ordinary Level</p>
      </div>
      <br /><br />
      
      <div className="flex flex-col items-center">
      <a className="img" href="https://en.wikipedia.org/wiki/St._Aloysius%27_College,_Galle" target="_blank" rel="noopener noreferrer">
          <img src="/A.C.jpeg" alt="St. Aloysius' College" className="w-25 h-25 object-cover rounded" />
        </a>
        <p className="mt-4 text-center font-serif text-xl">2017 - 2020<br/>ST.ALOYSIUS’ COLLEGE<br/>GALLE</p>
        <p>Advanced Level- Physical Science</p>
      </div>
      <br /><br />
      
      <div className="flex flex-col items-center">
      <a className="img" href="https://www.sliit.lk/" target="_blank" rel="noopener noreferrer">
          <img src="/SLIIT.png" alt="SLIIT" className="w-25 h-25 object-cover rounded" />
        </a>
        <p className="mt-4 text-center font-serif text-xl">2022 - now<br/>SRI LANKA INSTITUTE OF<br/>INFORMATION TECHNOLOGY - SLIIT</p>
        <p>BSc (Hons) Degree in Information
            Technology Undergraduate
            Specialized in Information
            Technology
            </p>
      </div>
    </section>
  );
};

export default About;
