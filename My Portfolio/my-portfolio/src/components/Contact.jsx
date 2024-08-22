import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import emailjs from '/node_modules/emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceID = 'service_n8fv1n4';  // Replace with your actual Service ID from EmailJS
    const templateID = 'template_oufzl9h';  // Replace with your actual Template ID from EmailJS
    const userID = 'F0spL86VVlgfL5bph';  // Replace with your actual User ID from EmailJS

    const templateParams = {
      from_name: formData.name,  // The sender's name
      from_email: formData.email,  // The sender's email
      message: formData.message,  // The message content
      to_name: 'Lakshan',  // The recipient's name (your name)
    };

    emailjs.send(serviceID, templateID, templateParams, userID)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        toast.success('Message sent successfully!');
        setFormData({
          name: '',
          email: '',
          message: ''
        });
      })
      .catch((err) => {
        console.error('FAILED...', err);
        toast.error('Failed to send message. Please try again later.');
      });
  };

  return (
    <section id="contact" className="bg-gray-200 py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center font-serif">Contact Me</h2>
        <form id="contact-form" className="mt-8 max-w-lg mx-auto" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700">Your Name</label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-indigo-600 bg-white text-black" 
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">Your Email</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-indigo-600 bg-white text-black" 
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-700">Message</label>
            <textarea 
              id="message" 
              name="message" 
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-indigo-600 bg-white text-black" 
              required
            ></textarea>
          </div>
          <button 
            type="submit" 
            className="w-full bg-indigo-600 text-white py-2 rounded-md font-bold"
          >
            Send Message
          </button>
        </form>

        {/* Social Media Links */}
        <div className="flex justify-center mt-8 space-x-6">
         
          <a href="https://twitter.com/your-profile" target="_blank" rel="noopener noreferrer">
            <img src="/github.png" alt="GitHub" className="w-8 h-8" />
          </a>
          <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">
            <img src="/linkedin.png" alt="LinkedIn" className="w-8 h-8" />
          </a>
          <a href="https://www.facebook.com/your-profile" target="_blank" rel="noopener noreferrer">
            <img src="/facebook.png" alt="Facebook" className="w-8 h-8" />
          </a>
        </div>
        <ToastContainer />
      </div>
    </section>
  );
};

export default Contact;
