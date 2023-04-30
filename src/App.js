import './App.css';
import { useState } from 'react';
import NavBar from './components/NavBar/NavBar.js'
import Home from './components/Home/Home.js'
import Services from './components/Services/Services.js'
import Skills from './components/Skills/Skills.js'
import ProyectsContainer from './components/ProyectsContainer/ProyectsContainer.js'
import Contact from './components/Contact/Contact.js'

function App() {
  const [darkMode, setTheme] = useState(false);

  const toggleTheme = () => {
    setTheme(!darkMode);
  };

  return (
      <div className={darkMode ? 'dark-mode' : 'light-mode'}>
        <NavBar toggleTheme={toggleTheme} darkMode={darkMode}/>
        <Home />
        <section  className='vh'>
          <Services/>
        </section>
        <section  className='vh'>
          <Skills/>
        </section>
        <ProyectsContainer/>
        <Contact/>
      </div>
  );
}

export default App;
