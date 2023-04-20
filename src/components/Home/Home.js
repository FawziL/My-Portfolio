import './Home.css';
import foto from '../../assets/imagenPresentacion.jpg'; 
import html from '../../assets/icons/html5.svg';
import css from '../../assets/icons/css3.svg';
import javascript from '../../assets/icons/javascript.svg';
import react from '../../assets/icons/react.svg';
import nodejs from '../../assets/icons/nodejs.svg';
import typescript from '../../assets/icons/typescript.svg';
import github from '../../assets/icons/github.svg';
import mongodb from '../../assets/icons/mongodb.svg';
import bootstrap from '../../assets/icons/bootstrap.svg';
import Tecnologies from '../Tecnologies/Tecnologies';

function Home() {
  return (
    <>
  
    <div className='displayFlex'>
        <img src={foto} alt="Foto de Fawzi Lutfallah" className='imgPresentation'/>
        <div className='presentation'> 
            <h2>Hola! Me llamo Fawzi Lutfallah.</h2>
            <p>
              Soy un desarrollador Fullstack Web con conocimientos en programación front-end y back-end, 
                bases de datos, servidores web y herramientas de desarrollo de software. Estoy emocionado de 
                aprender cosas nuevas y estar al día con las últimas tecnologías.
            </p>
            <h3>Tengo conocimientos en:</h3>
            <div className='tecnologies'>
                <Tecnologies img={html} />
                <Tecnologies img={css} />
                <Tecnologies img={javascript} />
                <Tecnologies img={react} />
                <Tecnologies img={nodejs} />
                <Tecnologies img={typescript} />
                <Tecnologies img={github} />
                <Tecnologies img={mongodb} />
                <Tecnologies img={bootstrap} />
            </div>
        </div>
    </div>
    </>
  );
}

export default Home;
