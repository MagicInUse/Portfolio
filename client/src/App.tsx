import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import styles from './App.module.css';

import Home from './pages/Home.js';
import About from './pages/About.js';
import Projects from './pages/Portfolio.js'; 
import Contact from './pages/Contact.js';
import Header from './components/Header/Header.js';
import Footer from './components/Footer/Footer.js';

const App = () => {
  return (
    <Router>
      <Header />
      <main className={styles.root}>
        <Routes>
          <Route path="/*" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;