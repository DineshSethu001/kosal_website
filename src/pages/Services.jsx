import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Typewriter from 'typewriter-effect';
import global from '../assets/img/global-news.gif';

const Services = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <section className="services_section flex flex-col items-center justify-center py-10 px-6 bg-gray-50 text-gray-800">
      <h2 className="text-3xl font-bold mb-6 text-center text-[#456882]">
        <Typewriter
          options={{
            strings: ['My Services'],
            autoStart: true,
            loop: true,
            delay: 100,
            deleteSpeed: 75,
            pauseFor: 4000,
          }}
        />
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-1 md:grid-col-2 gap-6 px-4 py-8">

        {/* Top Left */}
        <div data-aos="fade-down-right" className="bg-white p-6 rounded-xl shadow-lg ">
          <h3 className="text-xl font-semibold mb-2 text-blue-600">Computer Services</h3>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start gap-2">
              <span className="text-blue-500">🛠️</span>
              Installation of desktops, laptops, and other hardware components
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-500">🔧</span>
              Repair services with quick diagnostics
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-500">🧰</span>
              Reliable maintenance support
            </li>
          </ul>
        </div>

        {/* Top Right */}
        <div data-aos="fade-down-left" className="bg-white p-6 rounded-xl shadow-lg ">
          <h3 className="text-xl font-semibold mb-2 text-blue-600">Networking</h3>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start gap-2">
              <span className="text-blue-500">🌐</span>
              Setup of routers and switches
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-500">📡</span>
              Troubleshooting of network hardware
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-500">📶</span>
              LAN and Wi-Fi configuration for home and office
            </li>
          </ul>
        </div>

      

        {/* Bottom Left */}
        <div data-aos="fade-up-right" className="bg-white p-6 rounded-xl shadow-lg">
          <h3 className="text-xl font-semibold mb-2 text-blue-600">CCTV Surveillance</h3>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start gap-2">
              <span className="text-blue-500">📷</span>
              Installation of CCTV cameras
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-500">🖥️</span>
              Setup of DVR/NVR systems
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-500">📲</span>
              Remote surveillance access for safety and monitoring
            </li>
          </ul>
        </div>

        {/* Bottom Right */}
        <div data-aos="fade-up-right" className="bg-white p-6 rounded-xl shadow-lg ">
          <h3 className="text-xl font-semibold mb-2 text-blue-600">System Optimization</h3>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start gap-2">
              <span className="text-blue-500">🚀</span>
              Improve system speed and stability
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-500">🛡️</span>
              Remove malware and fix software bugs
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-500">⚙️</span>
              Optimize drivers and system performance
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Services;
