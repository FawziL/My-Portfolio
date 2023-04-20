import './SocialComponent.css';
import Tecnologies from '../Tecnologies/Tecnologies';
import github from '../../assets/icons/github.svg';
import linkedin from '../../assets/icons/linkedin.svg';
import address from '../../assets/icons/address.svg';
import envelope from '../../assets/icons/envelope.svg';

function SocialComponent() {
  return (
    <div className='SocialComponent'>
        <Tecnologies img={github} />
        <p>GitHub</p>
        <Tecnologies img={linkedin} />
        <p>Linkedin</p>
        <Tecnologies img={address} />
        <p>+58 4149541095</p>
        <Tecnologies img={envelope} />
        <p>fawzi.jlr@gmail.com</p>
    </div>
  );
}

export default SocialComponent;
