import logo from './logo.svg';
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './Components/About';
import Service from './Components/Services';
import Contact from './Components/Contact';
import Navbar from './Components/Navbar';
const App= () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
        <Route> {/* Wrap your Routes */}
          
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Service />} />
        </Route>
        </Routes>
      </div>
    </Router>
      
    
  );
}

export default App;
