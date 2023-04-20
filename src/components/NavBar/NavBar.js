import './NavBar.css';
import sun from '../../assets/icons/sun.svg';
import moon from '../../assets/icons/moon.svg';

function NavBar({ toggleTheme, darkMode }) {
  console.log(darkMode)
  return (
    <nav> 
        <div className='dFlex'>
          <h1>PORTFOLIO</h1>
          <button onClick={toggleTheme} className='theme'><img src={darkMode ? sun : moon} alt='theme'/></button>
          <button>Idioma</button>
        </div>
        <ul>
            <li><a href="#Services">Servicios</a></li>
            <li><a href="#Proyects">Proyectos</a></li>
            <li><a href="#Contact">Contacto</a></li>
        </ul>
    </nav>
  );
}

export default NavBar;
