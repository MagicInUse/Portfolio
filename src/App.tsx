import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './pages/Home.js';
import About from './pages/About.js';
import Projects from './pages/Portfolio.js'; 
import Contact from './pages/Contact.js';
import Header from './components/Header.js';
import Footer from './components/Footert.js';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/*" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;