import React from 'react'
import Nav from './components/Nav/Nav'
import AnimatedCursor from 'react-animated-cursor'
import Hero from './components/Hero/Hero'

import Mission from './components/Mission/Mission'
function App() {
  return (
    <>
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
            // border: '3px solid #fff',
            backgroundColor: "white",
            mixBlendMode: "exclusion",
          }}/>
    <div>
      <Nav/>
      <Hero/>
      <Mission/>
    </div>
    </>
  )
}

export default App
