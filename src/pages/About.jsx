import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <section className="about_section py-4 px-6 flex-col text-gray-800">
      <h1 className="text-3xl font-bold mb-4 text-[#456882]">About Me</h1>

      <div className="space-y-4">
        <p className="text-lg leading-relaxed">
          I am a skilled and experienced technician specializing in computer hardware, networking devices, and security system installation. With hands-on expertise in diagnosing and fixing issues, I provide dependable and professional tech support to individuals and businesses.
        </p>

        <p className="text-2xl text-[#555879] font-bold">
          My services include:
        </p>

        <ul className="list-disc list-inside text-lg pl-4 space-y-1">
          <li>🔧 Computer hardware setup and repair</li>
          <li>🌐 Networking device installation and troubleshooting</li>
          <li>🎥 Security camera and surveillance system installation</li>
          <li>⚙️ System performance optimization and issue fixing</li>
        </ul>

        <p className="text-lg leading-relaxed">
          I take pride in delivering reliable and efficient service with a focus on customer satisfaction. Whether you're setting up a new office, need a home security upgrade, or require technical troubleshooting — I'm here to help.
        </p>

        <p className="mt-6 text-center font-semibold text-blue-600 hover:text-blue-800 cursor-pointer transition duration-300">
          <Link to="/contact">📞 Contact now for a free consultation or to schedule a service!</Link>
        </p>
      </div>
    </section>
  );
};

export default About;
