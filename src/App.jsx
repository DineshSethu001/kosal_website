import { Home } from "./pages";
import { Routes, Route, useLocation, BrowserRouter as Router } from "react-router-dom";
import { ScrollToTop, Navbar, Footer } from "./components";
import { About, Services, Contact } from "./pages";
import Global from "./assets/img/global-news.gif";
import { useEffect, useState } from "react";

// Loader component
const Loader = () => (
  <div className="fixed inset-0 bg-white flex justify-center items-center z-50">
    <img src={Global} alt="Globe" className="w-28 h-28 animate-pulse" />
  </div>
);

// This handles routing and loader logic
const AppContent = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    const timeout = setTimeout(() => {
      setLoading(false);
    }, 1000); // Loader visible for 1s

    return () => clearTimeout(timeout);
  }, [location]);

  return (
    <div className="bg-gray-100 px-4 sm:px-[5vw] md:px-[7px] lg:px-[9px] pt-5">
      {loading && <Loader />}
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
};

// Final export with Router wrapper
export default function App() {
  return (
    
      <AppContent />
    
  );
}
