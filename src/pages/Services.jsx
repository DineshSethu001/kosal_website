import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Typewriter from 'typewriter-effect';

const Services = () => {

  useEffect(() => {
    AOS.init({duration:2000});
  }, []);


  return (
    <section className="services_section flex flex-col items-center justify-center py-10 px-6 bg-gray-50 text-gray-800 ">
      <h2 className="text-3xl font-bold mb-6 text-center text-[#456882]">
      <Typewriter
              options={{
                strings: [
                  `My Services`
                ],
                autoStart: true,
                loop: true,
                delay: 100,
                deleteSpeed: 75,
                pauseFor: 4000,
              }}
            /></h2>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
        {/* Service 1 */}
        <div data-aos="flip-up" className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
          <h3 className="text-xl font-semibold mb-2 text-[#333]">🔧 Computer Hardware Setup & Repair</h3>
          <p className="text-gray-700">
            Installation, repair, and maintenance of desktops, laptops, and other hardware components with quick diagnostics and reliable service.
          </p>
        </div>

        {/* Service 2 */}
        <div data-aos="flip-down" className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
          <h3 className="text-xl font-semibold mb-2 text-[#333]">🌐 Networking Device Installation</h3>
          <p className="text-gray-700">
            Setup and troubleshooting of routers, switches, LAN, and Wi-Fi systems for both home and office environments.
          </p>
        </div>

        {/* Service 3 */}
        <div data-aos="flip-down" className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
          <h3 className="text-xl font-semibold mb-2 text-[#333]">🎥 Security System Installation</h3>
          <p className="text-gray-700">
            Installation of CCTV cameras, DVR/NVR systems, and remote surveillance access for enhanced safety and monitoring.
          </p>
        </div>

        {/* Service 4 */}
        <div  data-aos="flip-up" className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
          <h3 className="text-xl font-semibold mb-2 text-[#333]">⚙️ System Optimization</h3>
          <p className="text-gray-700">
            Improve system speed, performance, and stability by removing malware, fixing bugs, and optimizing software and drivers.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
