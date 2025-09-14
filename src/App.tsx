import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import Hero from './components/Hero';
import Projects from './components/Projects';
import Services from './components/Services';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Misc from './components/Misc';

import "./components/styles/misc.scss";
import AllProjects from './components/AllProjects';

function App() {

  const [loading, setLoading] = useState(true);

  const dotCursor = (e: MouseEvent) => {
    const cursor = document.querySelector(".cursor") as HTMLElement;
    if (!cursor) return;
    cursor.style.top = `${e.pageY - 14}px`;
    cursor.style.left = `${e.pageX - 14}px`;

    const element = e.target as HTMLElement;

    if (element.getAttribute("data-cursorpointer")) {
      cursor.classList.add("cursorHover");
    } else if (element.getAttribute("data-cursorpointermini")) {
      cursor.classList.add("cursorHoverMini");
    } else if (element.getAttribute("data-cursorpointertext")) {
      cursor.classList.add('cursorHoverText');
    } else {
      cursor.classList.remove("cursorHover");
      cursor.classList.remove("cursorHoverMini");
      cursor.classList.remove('cursorHoverText');
    }
  };

  useEffect(() => {
    window.addEventListener("mousemove", dotCursor);

    setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => {
      window.removeEventListener("mousemove", dotCursor);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <Navbar />
      <main className="transition-all duration-500 ease-in-out">
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/allProjects" element={<AllProjects />} />
        </Routes>
      </main>
      <Footer />
      <Misc />
    </div>
  );
}

export default App;