import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import About from './sections/About';
import Traction from './sections/Traction';
import Contact from './sections/Contact';

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <div className="flex flex-col min-h-screen">
      <Header scrolled={scrolled} />
      <main className="flex-grow">
        <Hero />
        <About />
        <Traction />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;