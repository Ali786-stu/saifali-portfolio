import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Services from './components/Services';
import Contact from './components/Contact';
import { useTheme } from './hooks/useTheme';

type Page = 'home' | 'projects' | 'services' | 'contact';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const { theme } = useTheme();

  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Hero />;
      case 'projects':
        return <Projects />;
      case 'services':
        return <Services />;
      case 'contact':
        return <Contact />;
      default:
        return <Hero />;
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      
      <main className="transition-all duration-500 ease-in-out">
        {renderPage()}
      </main>
      
      <Footer />
    </div>
  );
}

export default App;