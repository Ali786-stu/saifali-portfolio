import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Misc from "./components/Misc";
import Loader from "./components/Loader";

import "./components/styles/misc.scss";
import AllProjects from "./components/AllProjects";

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
      cursor.classList.add("cursorHoverText");
    } else if (element.getAttribute("data-cursorpointersm")) {
      cursor.classList.add("cursorHoverSm");
    } else {
      cursor.classList.remove("cursorHover");
      cursor.classList.remove("cursorHoverMini");
      cursor.classList.remove("cursorHoverText");
      cursor.classList.remove("cursorHoverSm");
    }
  };

  useEffect(() => {
    window.addEventListener("mousemove", dotCursor);
    return () => {
      window.removeEventListener("mousemove", dotCursor);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <AnimatePresence mode="wait">
        {loading ? (
          <motion.div
            key="loader"
            exit={{ 
              y: "-100%",
              transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] }
            }}
            className="fixed inset-0 z-[9999]"
          >
            <Loader onFinished={() => setLoading(false)} />
          </motion.div>
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
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
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
