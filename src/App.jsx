import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import About from './About'
import Service from "./Service"
import Work from "./Work"
import Contect from './Contect'

const App = () => {
  return (
    <div className='bg-gray-900'> 
        <Navbar/>
        <Hero/>
        <About/>
        <Service/>
        <Work/>
        <Contect/>
    </div>
   
  )
}

export default App