import React from 'react'
import Back from './Back'
import Mission from '../Mission/Mission'
import Layer from '../Layer/Layer'

function Hero() {
  return (
    <>
  
    <div>
    <Back/>
 
      <h1 style={{display:'flex',justifyContent:'center',alignItems:'center',height:'100vh'}}>yash make you hero section here</h1>
    </div>
    <hr />
    <Mission/>
    <Layer/>
    </>
  )
}

export default Hero
