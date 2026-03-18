import { useState, useEffect } from 'react';
import './styles/global.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Trainers from './components/Trainers';
import Plans from './components/Plans';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('fitzone-theme');
    if (saved === 'dark') {
      setDarkMode(true);
      document.documentElement.setAttribute('data-theme', 'dark');
    }
  }, []);

  const toggleDark = () => {
    setDarkMode(d => {
      const next = !d;
      document.documentElement.setAttribute('data-theme', next ? 'dark' : 'light');
      localStorage.setItem('fitzone-theme', next ? 'dark' : 'light');
      return next;
    });
  };

  return (
    <>
      <Navbar darkMode={darkMode} toggleDark={toggleDark} />
      <main>
        <Hero />
        <About />
        <Services />
        <Trainers />
        <Plans />
        <Contact />
      </main>
      <Footer />
    </>
  );
}