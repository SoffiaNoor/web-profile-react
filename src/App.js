import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Navbar from './components/Navbar';
import Loader from './components/Loader';
import MySkills from './pages/Myskills';
import Resume from './pages/Resume';
import Portfolio from './pages/Portfolio';
import Gallery from './pages/Gallery';
// import Contact from './pages/Contact';

function AppContent() {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    setLoading(true);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer); 
  }, [location]); 

  return (
    <>
      {loading && <Loader />} 
      
      <div className={`${loading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-700`}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/MySkills" element={<MySkills />} />
          <Route path="/Resume" element={<Resume />} />
          <Route path="/Portfolio" element={<Portfolio />} />
          <Route path="/Gallery" element={<Gallery />} />
          {/* <Route path="/Contact" element={<Contact />} /> */}
        </Routes>
      </div>
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
