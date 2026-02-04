// src/App.js
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <HashRouter basename="/first-project">
      <div className="App">
        <Navbar />
        <Router>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
        </Router>
        <Footer /> {/* Footer always visible at bottom */}
      </div>
    </HashRouter>
  );
}

export default App;
