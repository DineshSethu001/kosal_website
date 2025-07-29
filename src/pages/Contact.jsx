import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    location: '',
    issue: '',
    email: ''
  });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Data:", formData);
    // Here you can integrate EmailJS / Formspree / Node backend
    alert("Form submitted successfully!");
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-100 px-4 py-10">
      <form 
        onSubmit={handleSubmit}
        className="w-full max-w-xl bg-white shadow-lg rounded-lg p-8 space-y-6"
      >
        <h2 className="text-3xl font-bold text-[#456882] text-center">Contact Us</h2>

        <div className='flex items-center justify-center gap-2'>
          <label className="w-1/4 block font-semibold mb-1">Name</label>
          <input 
            type="text" 
            name="name" 
            value={formData.name}
            onChange={handleChange}
            className="w-3/4 border border-gray-300 px-4 py-2 rounded"
            placeholder="Enter your name"
            required
          />
        </div>

        <div className='flex items-center justify-center gap-2'>
          <label className="w-1/4 block font-semibold mb-1">Contact Number</label>
          <input 
            type="tel" 
            name="contact" 
            value={formData.contact}
            onChange={handleChange}
            className="w-3/4  border border-gray-300 px-4 py-2 rounded"
            placeholder="Enter your contact number"
            required
          />
        </div>

        <div className='flex items-center justify-center gap-2'>
          <label className="w-1/4 block font-semibold mb-1">Location</label>
          <input 
            type="text" 
            name="location" 
            value={formData.location}
            onChange={handleChange}
            className="w-3/4 border border-gray-300 px-4 py-2 rounded"
            placeholder="Enter your location"
            required
          />
        </div>

        <div className='flex items-center justify-center gap-2'>
          <label className="w-1/4 block font-semibold mb-1">Elaborate your issue here</label>
          <textarea 
            name="issue" 
            value={formData.issue}
            onChange={handleChange}
            rows="4"
            className="w-3/4 border border-gray-300 px-4 py-2 rounded"
            placeholder="Describe your issue in detail"
            required
          ></textarea>
        </div>

        <div className='flex items-center justify-center gap-2'>
          <label className="w-1/4 block font-semibold mb-1">Email ID</label>
          <input 
            type="email" 
            name="email" 
            value={formData.email}
            onChange={handleChange}
            className="w-3/4 border border-gray-300 px-4 py-2 rounded"
            placeholder="Enter your email"
            required
          />
        </div>

        <button 
          type="submit"
          className="w-full bg-[#456882] text-white font-semibold py-2 rounded hover:bg-[#345068] transition"
        >
          Submit
        </button>
      </form>
    </section>
  );
};

export default Contact;
