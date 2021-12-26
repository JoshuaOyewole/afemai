import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import './App.css';
// import Loading from './components/Loading';
import About from './pages/About';
import Home from './pages/Home';
import Terminals from './pages/Terminals';
import Contact from './pages/Contact';
import Terms from './pages/Terms';


function App() {
  // const [loading, setLoading] = useState(false);

  return (
    <Router>
        {
        // loading ? 
        // <Loading /> :
        <Routes>
        <Route 
          path="/" 
          element={<Home />} 
        />
        <Route path="/about" element={<About />}/>
        <Route path="/terminals" element={<Terminals />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/about" element={<About />} />
      </Routes>
        }
      </Router>
  
  );
}

export default App;
