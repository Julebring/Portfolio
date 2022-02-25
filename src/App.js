import React, {useEffect} from "react";
import './App.css';
import './styles/main.css';
/* import {motion } from 'framer-motion'; */

import{
  BrowserRouter as Router,
  Routes,  /* istället för switch */
  Route
} from "react-router-dom";

import Home from './components/Home';
import Footer from './components/Footer';
import Menu from './components/Menu';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import About from './components/About';

function App() {
  useEffect(() => {
    document.title = "Martins Portfolio";   }, []);

  return (
    <div>
      
      <Router>
        
        <Menu />
        <div className="App">
          
          <Routes>
            <Route path="/" element={<Home />} />
            
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          
        </div>

      </Router>
       
       
       <Footer/>

    </div>
  );
}

export default App;
