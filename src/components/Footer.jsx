
import { NavLink } from "react-router-dom"
import logo from '../assets/img/logo.png'
import { FaWhatsapp } from "react-icons/fa";
import { FiFacebook } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";

const Footer = () => {
    return (
        <footer className="footer bg-[#7A7A73] text-white py-6 px-6 mt-10">
            <div className="max-w-7xl text-white mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
                {/* Branding */}
                <div className="text-center ">
                    <img src={logo} className="mx-auto w-35  h-auto" alt="logo" />
                    <h3 className="text-xl font-semibold">Kosal Tech Services</h3>
                    <p className="text-sm text-gray-400">Your trusted partner for IT and security solutions</p>
                </div>

                {/* Quick Links */}
                <div className="text-center md:text-left ">
                    <div className="flex flex-col items-center">
                        <h4 className="font-semibold mb-2">Quick Links</h4>

                        <ul className="sm:flex flex-col text-gray-700 gap-5 text-sm flex flex-row">
                            <li><NavLink className="flex flex-col gap-1 items-center" to="/">        <p className="tracking-wide">Home</p><hr className="w-2/4 h-[1.5px] border-none hidden bg-[#FED16A]" /></NavLink></li>
                            <li><NavLink className="flex flex-col gap-1 items-center" to="/services"><p className="tracking-wide">Services</p><hr className="w-2/4 h-[1.5px] border-none hidden bg-[#FED16A]" /></NavLink></li>
                            <li><NavLink className="flex flex-col gap-1 items-center" to="/contact"> <p className="tracking-wide">Contact</p><hr className="w-2/4 h-[1.5px] border-none hidden bg-[#FED16A]" /></NavLink></li>
                            <li><NavLink className="flex flex-col gap-1 items-center" to="/products"><p className="tracking-wide">Products</p><hr className="w-2/4 h-[1.5px] border-none hidden bg-[#FED16A]" /></NavLink></li>
                        </ul>
                    </div>
                </div>
                {/* Contact Info */}
                <div className="text-center flex flex-col gap-3 w-1/5">
                    <h4 className="font-semibold mb-2">Contact</h4>
                    <div className="flex justify-between items-center">
                    <FaWhatsapp  className="w-6 h-6 text-[#25D366] hover:scale-110 transition-all duration-200"   />
                    <FiFacebook  className="w-6 h-6 text-[#1877F2] hover:scale-110 transition-all duration-200"   />
                    <FaInstagram className="w-6 h-6 text-[#E4405F] hover:scale-110 transition-all duration-200"   />
                    <CiLinkedin  className="w-6 h-6 text-[#0A66C2] hover:scale-110 transition-all duration-200"   />
                    </div>
<a
   href="https://www.google.com/maps/place/No.+3,+Brindhavan+Complex,+Otteri,+Vellore,+Tamil+Nadu+632002"
  target="_blank"
  rel="noopener noreferrer"
  className="text-base md:text-lg lg:text-xl tracking-wider  hover:scale-110 transition-all duration-200"
>
  📍 Vellore, Tamil Nadu
</a>

                </div>

            </div>
            <div className="text-center text-xs text-gray-500 mt-6">
                © {new Date().getFullYear()} Kosal Tech Services. All rights reserved.
            </div>
        </footer>
    )
}
export default Footer;

