import './App.css';
import { useState } from 'react';
import {IntlProvider} from 'react-intl';

import NavBar from './components/NavBar/NavBar.jsx'
import Home from './components/Home/Home.jsx'
import Services from './components/Services/Services.jsx'
import Skills from './components/Skills/Skills.jsx'
import ProyectsContainer from './components/ProyectsContainer/ProyectsContainer.jsx'
import Contact from './components/Contact/Contact.jsx'

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
          <Skills  locale={locale}/>
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
