import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');

    const response = await fetch('/.netlify/functions/sendEmail', {
      method: 'POST',
      body: JSON.stringify(formData),
    });

    const result = await response.json();
    if (response.status === 200) {
      setStatus('Message sent successfully!');
    } else {
      setStatus('Failed to send message.');
    }
  };

  return (
    <section id="contact" className="bg-gray-200 py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center">Contact Me</h2>
        <form id="contact-form" className="mt-8 max-w-lg mx-auto" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-indigo-600"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-indigo-600"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-700">Message</label>
            <textarea
              id="message"
              name="message"
              className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-indigo-600"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>
          <button type="submit" className="w-full bg-indigo-600 text-white py-2 rounded-md font-bold">Send Message</button>
        </form>
        {status && <p className="text-center mt-4">{status}</p>}
      </div>
    </section>
  );
};

export default Contact;
