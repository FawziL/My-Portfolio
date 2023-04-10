import './Home.css';
import foto from '../../assets/imagenPresentacion.jpg'; 
import Tecnologies from '../Tecnologies/Tecnologies';

function Home() {
  return (
    <div className='displayFlex'>
        <img src={foto} alt="Foto de Fawzi Lutfallah" className='imgPresentation'/>
        <div className='presentation'>
            <h2>Hola! Me llamo Fawzi Lutfallah.</h2>
            <p>Soy un desarrollador Fullstack Web con conocimientos en programación front-end y back-end, 
                bases de datos, servidores web y herramientas de desarrollo de software. Estoy emocionado de 
                aprender cosas nuevas y estar al día con las últimas tecnologías.
            </p>
            <h2>Tecnologías aprendidas:</h2>
            <div className='tecnologies'>
                <Tecnologies img={foto} />
                <Tecnologies img={foto} />
                <Tecnologies img={foto} />
                <Tecnologies img={foto} />
                <Tecnologies img={foto} />
                <Tecnologies img={foto} />
                <Tecnologies img={foto} />
                <Tecnologies img={foto} />
            </div>
        </div>
    </div>
  );
}

export default Home;
