import React from 'react'
import AnimatedCursor from 'react-animated-cursor'
import Hero from './Hero/Hero'
import { BrowserRouter as Router, Routes , Route } from 'react-router-dom'
import Nav from './Nav/Nav'
import Contact from './Contact/Contact'
import Team from './Team/Team.jsx'
import Event from './Event/Event'
import Notfound from './Notfound/Notfound'
import Foot from './Foot/Foot'

function Main() {
  return (
    <Router>
    <div>
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
