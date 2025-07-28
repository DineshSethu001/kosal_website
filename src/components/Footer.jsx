
import { NavLink } from "react-router-dom"
import logo from '../assets/img/logo.png'

const Footer = () => {
    return (
        <footer className="footer bg-[#7A7A73] text-white py-8 px-6 mt-10">
            <div className="max-w-7xl text-white mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
                {/* Branding */}
                <div className="text-center ">
                    <img src={logo} className="mx-auto w-35  h-auto" alt="logo" />
                    <h3 className="text-xl font-semibold">Kosal Tech Services</h3>
                    <p className="text-sm text-gray-400">Your trusted partner for IT and security solutions</p>
                </div>

                {/* Quick Links */}
                <div className="text-center md:text-left ">
                    <h4 className="font-semibold mb-2">Quick Links</h4>

                    <ul className="sm:flex flex-col text-gray-700 gap-5 text-sm">
                        <li><NavLink className="flex flex-col gap-1 items-center" to="/">        <p className="tracking-wide">Home</p><hr className="w-2/4 h-[1.5px] border-none hidden bg-[#FED16A]" /></NavLink></li>
                        <li><NavLink className="flex flex-col gap-1 items-center" to="/services"><p className="tracking-wide">Serices</p><hr className="w-2/4 h-[1.5px] border-none hidden bg-[#FED16A]" /></NavLink></li>
                        <li><NavLink className="flex flex-col gap-1 items-center" to="/contact"> <p className="tracking-wide">Contact</p><hr className="w-2/4 h-[1.5px] border-none hidden bg-[#FED16A]" /></NavLink></li>
                        <li><NavLink className="flex flex-col gap-1 items-center" to="/products"><p className="tracking-wide">Products</p><hr className="w-2/4 h-[1.5px] border-none hidden bg-[#FED16A]" /></NavLink></li>
                    </ul>
                </div>
                {/* Contact Info */}
                <div className="text-center md:text-right">
                    <h4 className="font-semibold mb-2">Contact</h4>
                    <p className="text-sm">📍 Location: Your City, India</p>
                    <p className="text-sm">📞 Phone: +91-XXXXXXXXXX</p>
                    <p className="text-sm">✉️ Email: kosal@example.com</p>
                </div>

            </div>
            <div className="text-center text-xs text-gray-500 mt-6">
                © {new Date().getFullYear()} Kosal Tech Services. All rights reserved.
            </div>
        </footer>
    )
}
export default Footer;

