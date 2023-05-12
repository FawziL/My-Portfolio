import SocialComponent from '../SocialComponent/SocialComponent';
import ButtonDownload from '../ButtonDownload/ButtonDownload';
import Footer from '../Footer/Footer';

function Contact() {
  return (
    <div id='Contact'>
        <h2>Contacto</h2>

        <p className='text'>
            Sí estás interesado en trabajar conmigo o tienes alguna pregunta, no dudes en ponerte en contacto.
        </p>

        <SocialComponent />

        <p className='text'>
            ¡Descarga mi CV para conocer más acerca de mi experiencia y habilidades como desarrollador web!
        </p>

        <ButtonDownload />  

        <Footer /> 
    </div>
  );
}

export default Contact;
