import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import styles from './App.module.css';

import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Portfolio'; 
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

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
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;