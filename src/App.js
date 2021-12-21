import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import Loading from './components/Loading';
import About from './pages/About';
import Home from './pages/Home';
import Terminals from './pages/Terminals';
import Contact from './pages/Contact';


function App() {
  const [loading, setLoading] = useState(false);

  return (
  <Router>
    {
    loading ? 
    <Loading /> :
    <Routes>
    <Route 
      path="/" 
      element={<Home />} 
    />
    <Route path="/about" element={<About />}/>
    <Route path="/terminals" element={<Terminals />} />
    <Route path="/contact" element={<Contact />} />
  </Routes>
     }
  </Router>
   
    
  );
}

export default App;
