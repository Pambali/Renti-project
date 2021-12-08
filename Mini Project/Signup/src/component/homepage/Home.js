import React from 'react';
//import { Button } from './Button';
//import Container from './Container';
//import Footer from './Footer.js';
import Navbar from './Navbar';
import "../../App.css"
import HeroSection from './HeroSection';

function Home() {
    return (
      <div className="home">
        <Navbar />
         <HeroSection/>
      
    
      </div>
    );
  }
  
  export default Home;