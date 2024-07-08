// IMPORTS  
// React 
import { useState, useEffect } from 'react';
// Styles
import './App.css'
// Components 
import { NavbarMobile } from './components/NavbarMobile'
//

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

  // navBar status 
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <div className='App'>
      <NavbarMobile isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} toggleTheme={toggleTheme}/>
      
    </div>
  )
}

export default App
