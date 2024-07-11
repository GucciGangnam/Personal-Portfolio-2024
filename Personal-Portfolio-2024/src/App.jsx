// IMPORTS  
// React 
import { useState, useEffect } from 'react';
// Styles
import './App.css'
// Components 
import { NavbarMobile } from './components/NavbarMobile'
// Pages
import { Home } from './pages/Home';
import { CV } from './pages/CV';
import { Projects } from './pages/Projects';
import { Contact } from './pages/Contact';

// COMPONENT 
function App() {

  const [isMobile, setIsMobile] = useState(null)
  useEffect(() => {
    // Function to detect device type based on user agent
    const detectDeviceType = () => {
      const userAgent = navigator.userAgent;
      const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
      
      if (isMobile) {
        console.log("Client is on a mobile device.");
        setIsMobile(true)
      } else {
        console.log("Client is on a desktop device.");
        setIsMobile(false)
      }
    };
    // Call the function initially
    detectDeviceType();
    // No need for resize listener in this method
  }, []);


  // DARK MODE 
  const [isDarkMode, setIsDarkMode] = useState(false);
  const toggleTheme = () => {
    setIsDarkMode(prevMode => !prevMode);
  };
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
  }, [isDarkMode]);

  // NAV BAR STATUS 
  const [isNavOpen, setIsNavOpen] = useState(false);
  // HANDLE CHANEG PAGE
  const [currentPage, setCurrentPage] = useState("Home")

  return (
    <div className='App'>
      <NavbarMobile isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} toggleTheme={toggleTheme} isDarkMode={isDarkMode} currentPage={currentPage} setCurrentPage={setCurrentPage} />

      {currentPage === "Home" && <Home isMobile={isMobile} />}
      {currentPage === "CV" && <CV />}
      {currentPage === "Projects" && <Projects />}
      {currentPage === "Contact" && <Contact />}
    </div>
  )
}

export default App
