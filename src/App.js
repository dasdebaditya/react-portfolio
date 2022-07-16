import "./App.css";
import Header from "./components/header/Header";
import About from "./components/about/About";
import Nav from "./components/nav/Nav";
import Experience from "./components/experience/Experience";
import Services from "./components/services/Services";
import Portfolio from "./components/portfolio/Portfolio";
import Testimonials from "./components/testimonial/Testimonial";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import ParticlesBackground from "./components/particlesBackground";

import React, { Component } from 'react'

import ParticlesBg from 'particles-bg'

function App() {
  return (
    <div className="App">
      <div id="anim">
        <ParticlesBg className="anim" type="lines" bg={true} />
      </div>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Services />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
      
      
    </div>
    
  );
}

export default App;
