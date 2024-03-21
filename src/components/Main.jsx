import React, { useState, useEffect } from 'react';
import AnimatedCursor from 'react-animated-cursor';
import Hero from './pages/home/Hero/Hero';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './common/Nav/Nav.jsx';
import Contact from './pages/Contact/Contact';
import Team from './pages/Team/Team.jsx';
import Event from './pages/Event/Event';
import About from './pages/About/About.jsx';
import Notfound from './common/Notfound/Notfound.jsx';
import Foot from './common/Foot/Foot.jsx';
import Loader from './common/Loader/Loader.jsx';
import Query from '../components/pages/Contest/Query.jsx'
// import Contest from '../components/pages/Contest/Contest.jsx'
import CertificateVerifier from './assets/Certificate/Certify.jsx';

import ContestList from './pages/Contest/Clist.jsx';
function Main() {
  const [showLoader, setShowLoader] = useState(true);
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowLoader(false);
    }, 4500);

    return () => clearTimeout(timeout);
  }, []);

  const toggleTheme = () => {
    setDarkMode(prevMode => !prevMode);
  };

  return (
    <Router>
      <div className={darkMode ? 'dark-theme' : 'light-theme'}>
        <div>
          {showLoader && <Loader />}
          <AnimatedCursor
            innerSize={8}
            outerSize={60}
            innerScale={1}
            outerScale={1.6}
            outerAlpha={0}
            hasBlendMode={true}
            innerStyle={{
              backgroundColor: 'white',
            }}
            outerStyle={{
              border: '3px solid white',
            }}
          />
          <div>
            <Nav />
            <Routes>
              <Route exact path="/" element={<Hero />} />
              <Route exact path="/about" element={<About />} />
              <Route exact path="/team" element={<Team />} />
              <Route exact path="/contact" element={<Contact />} />
              <Route exact path="/event" element={<Event />} />
              <Route exact path="/contest" element={<ContestList />} />
              <Route exact path="/query" element={<Query />} />
              <Route exact path="/verify" element={<CertificateVerifier />} />
              <Route path="*" element={<Notfound />} />
            </Routes>
            <Foot />
          </div>
        </div>
      </div>
    </Router>
  );
}

export default Main;
