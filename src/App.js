import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';

// Remaking the Website!
import Welcome from './new_version/Welcome';
import Navbar from './new_version_components/Navbar';
import Loader from './new_version_components/Loader';
import Footer from './new_version_components/Footer';
import About from './new_version/About';
import Gallery from './new_version/Gallery';
import MySkills from './new_version/MySkills';
import Resume from './new_version/Resume';
import Portfolio from './new_version/Portfolio';
import WebDev from './new_version/Jobs/WebDev';
import AI from './new_version/Jobs/AI';
import Design from './new_version/Jobs/Design';
import Hire from './new_version/Hire';

function AppContent() {
  const [loading, setLoading] = useState(true);
  const [exitAnimation, setExitAnimation] = useState(false);
  const [showScrollButton, setShowScrollButton] = useState(false);
  const location = useLocation();

  // Handle scroll to top button visibility
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    setLoading(true);
    setExitAnimation(false);

    const timer = setTimeout(() => {
      setExitAnimation(true); // Mulai animasi keluar
      const loaderTimer = setTimeout(() => {
        setLoading(false); // Hapus loader setelah animasi selesai
      }, 700); // Durasi animasi keluar

      return () => clearTimeout(loaderTimer);
    }, 1000);

    return () => clearTimeout(timer);
  }, [location]);

  return (
    <>
      {loading && <Loader isExiting={exitAnimation} />}

      <div className={`${loading ? 'opacity-100' : 'opacity-100'} transition-opacity duration-700`}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/about_me" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/my_skills" element={<MySkills />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/web_dev" element={<WebDev />} />
          <Route path="/ai" element={<AI />} />
          <Route path="/designs" element={<Design />} />
          <Route path="/hire_me" element={<Hire />} />
        </Routes>
        <Footer />
      </div>

      {/* Back to Top Button */}
      {showScrollButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-5 right-5 z-50 font-raleway h-16 w-16 rounded-full border border-white text-white lg:text-2xl 
        md:text-xl text-lg shadow-lg hover:shadow-2xl hover:border-[#f46b45] hover:bg-[#f46b45] transition-all duration-200"
          aria-label="Back to top"
        >
          ↑
        </button>
      )}
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent /> {/* The AppContent component is rendered inside the Router */}
    </Router>
  );
}

export default App;
