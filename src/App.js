import './App.css';
import { useState } from 'react';
import NavBar from './components/NavBar/NavBar.js'
import Home from './components/Home/Home.js'
import Services from './components/Services/Services.js'
import Skills from './components/Skills/Skills.js'
import ProyectsContainer from './components/ProyectsContainer/ProyectsContainer.js'
import Contact from './components/Contact/Contact.js'

import {IntlProvider} from 'react-intl';

import enMessages from './en.json';
import esMessages from './es.json';


function App() {
  const [darkMode, setTheme] = useState(true);
  const toggleTheme = () => {
    setTheme(!darkMode);
  };

  const [locale, setLocale] = useState('en');

  function handleLanguage() {
    setLocale(locale === 'en' ? 'es' : 'en');
  }

  return (

      <div className={darkMode ? 'dark-mode' : 'light-mode'}>
        <IntlProvider locale={locale} messages={locale === 'en' ? enMessages : esMessages}>
        
        <section id='homeVh'>
          <NavBar toggleTheme={toggleTheme} darkMode={darkMode} handleLanguage={handleLanguage} locale={locale}/>
          <Home />
        </section>
        
        <section className='vh'>
          <Services/>
        </section>

        <section className='vh'>
          <Skills/>
        </section>

        <section className='vh'>
          <ProyectsContainer locale={locale}/>
        </section>

        <section className='vh'>
          <Contact/>
        </section>
          </IntlProvider>
      </div>
  );
}

export default App;
