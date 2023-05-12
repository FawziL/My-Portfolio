import './Home.css';
import ButtonDownload from '../ButtonDownload/ButtonDownload';

function Home() {
  return (
    <div className='presentation1'>
      <div className='presentation'> 
        <span>
          <h2>Hola! Me llamo Fawzi Lutfallah.</h2>
        </span>

        <p>
            Soy un Desarrollador Web Fullstack  con conocimientos en programación front-end y back-end, 
                bases de datos, servidores web y herramientas de desarrollo de software. Estoy emocionado de 
                aprender cosas nuevas y estar al día con las últimas tecnologías.
        </p>
        <ButtonDownload />  
      </div>
    </div>
  );
}

export default Home;
