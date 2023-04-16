import './SocialComponent.css';
import foto from '../../assets/imagenPresentacion.jpg'; 
import Tecnologies from '../Tecnologies/Tecnologies';

function SocialComponent() {
  return (
    <section className='SocialComponent'>
        <Tecnologies img={foto} />
        <p>GitHub</p>
        <Tecnologies img={foto} />
        <p>Linkedin</p>
        <Tecnologies img={foto} />
        <p>+58 4149541095</p>
        <Tecnologies img={foto} />
        <p>fawzi.jlr@gmail.com</p>
    </section>
  );
}

export default SocialComponent;
