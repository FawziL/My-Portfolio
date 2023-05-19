import './NavBar.css';
import sun from '../../assets/icons/sun.svg';
import moon from '../../assets/icons/moon.svg';

function NavBar({ toggleTheme, darkMode }) {
  return (
    <nav> 
        <div className='dFlex'>
          <div className='logo'>
            <p className='Fl'>FL</p>
            <hr/>
            <p className='webDev'>Web Developer</p>
          </div>
          <button onClick={toggleTheme} className='theme'><img src={darkMode ? sun : moon} alt='theme'/></button>
        </div>
        <ul>
            <li><a href="#Services">Servicios</a></li>
            <li><a href="#Skills">Habilidades</a></li>
            <li><a href="#Proyects">Proyectos</a></li>
            <li><a href="#Contact">Contacto</a></li>
        </ul>
    </nav>
  );
}

export default NavBar;
