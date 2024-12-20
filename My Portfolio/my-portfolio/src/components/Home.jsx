import React, { useEffect } from 'react';
import * as THREE from 'three';
import './Home.css';


const Home = () => {
  useEffect(() => {
    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(100, window.innerWidth / window.innerHeight, 0.5, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById('three-container').appendChild(renderer.domElement);

    // Particle system
    const particlesCount = 3000;
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesMaterial = new THREE.PointsMaterial({ color: 0xffffff, size: 0.02 });
    

    const particlesPosition = new Float32Array(particlesCount * 3);
    for (let i = 0; i < particlesCount * 3; i++) {
      particlesPosition[i] = (Math.random() - 0.5) * 20;
    }
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(particlesPosition, 3));

    const particles = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particles);

    camera.position.z = 5;

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      particles.rotation.x += 0.0008;
      particles.rotation.y += 0.0008;

      renderer.render(scene, camera);
    };

    animate();

    // Adjust canvas size on window resize
    window.addEventListener('resize', () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    });
  }, []);

  return (
    <section id="home" className="relative h-[80vh] md:h-[110vh] lg:h-[120vh]">
      <div className="my-portfolio/public/my image.png"></div>
      <div id="three-container" className=""></div>
      <div className="flex items-center justify-center h-full w-full bg-gray-900 bg-opacity-0 absolute top-0 left-0">
        <div className="slide-in-left">
      <img src="/my image.png" alt="my image" className="w-70 h-70 object-cover rounded-full" />
       </div>

        <div className="text-center slide-in-right">
          
          <h1 className="text-white text-6xl font-bold font-serif">Welcome to My Portfolio</h1><br/>
          <h3 className="text-white text-5xl font-bold font-serif">I am Chanuka Lakshan</h3>
          <p className="text-gray-300 mt-4 text-xl font-serif">Discover my work and skills</p><br/>
          <a href="#about" className="mt-6 px-4 py-2 bg-indigo-600 text-white font-bold rounded font-serif"> More</a>
          <a href="/Chanuka Lakshan's CV.pdf" download className="m-6 px-4 py-2 bg-indigo-600 text-white font-bold rounded font-serif"> ⇩ CV  </a>
         
        </div>

      </div>
    </section>
  );
};

export default Home;
