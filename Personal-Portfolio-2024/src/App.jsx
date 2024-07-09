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
      <NavbarMobile isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} toggleTheme={toggleTheme} setCurrentPage={setCurrentPage} />
      {/* <Home /> */}
      {/* <CV/> */}
      <Projects/>
      {/* <Contact/> */}
    </div>
  )
}

export default App
