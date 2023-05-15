import './Home.css';
import ButtonDownload from '../ButtonDownload/ButtonDownload';
import Yo from '../../assets/descarga3.png'

function Home() {
  return (
    <div className='presentation'>
      <img src={Yo} alt='Foto Fawzi Lutfallah'/>
      <div className='presentationText'> 
        <span>
          <h2>Hola! Soy Fawzi Lutfallah.</h2>
        </span>
        <h2 className='jobTitle'>Desarrollador Web Fullstack</h2>
        <p>
            Tengo conocimientos en programación front-end y back-end, 
            bases de datos, servidores web y herramientas de desarrollo de software. Estoy emocionado de 
            aprender cosas nuevas y estar al día con las últimas tecnologías.
        </p>
        <ButtonDownload />  
      </div>
    </div>
  );
}

export default Home;
