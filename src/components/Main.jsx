import React, { useState ,useEffect } from 'react'
import AnimatedCursor from 'react-animated-cursor'
import Hero from './pages/home/Hero/Hero'
import { BrowserRouter as Router, Routes , Route } from 'react-router-dom'
import Nav from './common/Nav/Nav.jsx'
import Contact from './pages/Contact/Contact'
import Team from './pages/Team/Team.jsx'
import Event from './pages/Event/Event'
import About from './pages/About/About.jsx'
import Notfound from './common/Notfound/Notfound.jsx'
import Foot from './common/Foot/Foot.jsx'
import Loader from './common/Loader/Loader.jsx'
// import LoadingBar from 'react-top-loading-bar'
function Main() {
  // const [progress,setProgress] = useState(0);

    const [showLoader, setShowLoader] = useState(true);
  
    useEffect(() => {
     
      const timeout = setTimeout(() => {
        setShowLoader(false);
      }, 4500);
  
      return () => clearTimeout(timeout); 
    }, []); 
  
  return (

   


    <Router>
    {/* <LoadingBar color='red' progress='50%' onLoaderFinished={() => setProgress(0)} /> */}
    <div>
    {showLoader && <Loader />}
        <AnimatedCursor
          hasBlendMode={true}
          innerStyle={{
            backgroundColor: "#333",
          }}
          color="#fff"
          innerSize={20}
          outerSize={80}
          innerScale={2}
          outerScale={2}
          outerAlpha={1}
          trailingSpeed={15} //8
          outerStyle={{
            border: '3px solid #fff',
            backgroundColor: "white",
            mixBlendMode: "exclusion",
          }}/>
    <div>
      <Nav/>
   
      <Routes>
        <Route exact path="/" element={<Hero/>} />
        <Route exact path="/about" element={<About/>} />
        <Route exact path="/team" element={<Team/>} />
        <Route exact path="/contact" element={<Contact/>} />
        <Route exact path="/event" element={<Event/>} />
        <Route path="*" element={<Notfound/>} />
     
      </Routes>
      <Foot/>

    
    </div>
      
    </div>
    </Router>
  )
}

export default Main
