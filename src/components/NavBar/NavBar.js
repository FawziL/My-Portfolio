import './NavBar.css';
import sun from '../../assets/icons/sun.svg';
import moon from '../../assets/icons/moon.svg';
import esLight from '../../assets/icons/esLight.png';
import esDark from '../../assets/icons/esDark.png';
import enLight from '../../assets/icons/enLight.png';
import enDark from '../../assets/icons/enDark.png';
import menuSun from '../../assets/icons/menu-sun.png';
import menuDark from '../../assets/icons/menu-dark.png';
import { FormattedMessage} from 'react-intl';
import { useState } from 'react';

function NavBar({ toggleTheme, darkMode, handleLanguage, locale }) {

  const [toggle, setToggle] = useState("off");
  function toggleMenu() {
    setToggle(toggle === 'on' ? 'off' : 'on');
  }

  return (
    <nav  className='pruebaNav'> 
      <div className='dFlexEvenly'>
          <div className='logo'>
            <p className='Fl'>FL</p>
            <hr/>
            <p className='webDev'>Web Developer</p>
          </div>
          <button onClick={toggleTheme} className='theme'><img src={darkMode ? sun : moon} alt='theme'/></button>
          <button onClick={handleLanguage} className='language'>
          <img src={  locale === 'en'
                          ? darkMode === true
                            ? esLight
                            : esDark 
                          : locale === 'es'
                          ? darkMode === true
                            ? enLight
                            : enDark
                          : 'icono-otro-idioma'}  alt='language'/>
          </button>
          <button id="buttonToggle" className='menu' onClick={toggleMenu}>
            <img src={darkMode ? menuDark : menuSun} className={toggle === "on" ? "menuRotated": "menuNoRotated"} alt='menu'/>
          </button>
      </div>
      <ul className={toggle}>
            <li><a href="#Services"><FormattedMessage id="services"/></a></li>
            <li><a href="#Skills"><FormattedMessage id="skills"/></a></li>
            <li><a href="#Proyects"><FormattedMessage id="proyects"/></a></li>
            <li><a href="#Contact"><FormattedMessage id="contact"/></a></li>
      </ul>
    </nav>
  );
}

export default NavBar;
