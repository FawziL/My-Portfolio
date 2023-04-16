import './Contact.css';
import Form from '../Form/Form.js'
import SocialComponent from '../SocialComponent/SocialComponent';

function Contact() {
  return (
    <>
        <h2>Contacto</h2>

        <p className='text'>
            Sí estás interesado en trabajar conmigo o tienes alguna pregunta, no dudes en ponerte en contacto.
        </p>

        <SocialComponent />

        <p className='text'>
            ¡Descarga mi CV para conocer más acerca de mi experiencia y habilidades como desarrollador web!
        </p>

        <button>¡Descargar!</button>

        <Form />
    </>
  );
}

export default Contact;
