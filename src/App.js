import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Shop from './pages/Shop';
import SkinQuiz from './pages/SkinQuiz';
import About from './pages/About';
import BackToTop from './components/BackToTop';

function App() {
  return (
    <Router>
      <NavBar /> {/* always visible */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/about" element={<About />} />
        <Route path="/skinquiz" element={<SkinQuiz />} />
      </Routes>
      <Footer/> {/* Footer can be added here if needed */}  
      <BackToTop /> {/* Back to Top button */}
    </Router>
  );
}

export default App;
