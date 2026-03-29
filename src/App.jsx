import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import About from './About';
import Service from "./Service";
import Work from "./Work";
import Contect from './Contect';
import Skills from "./Skills";

const App = () => {
  return (
    <div className='bg-gray-800'>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Service />
      <Work />
      <Contect />
    </div>
  );
};

export default App;
