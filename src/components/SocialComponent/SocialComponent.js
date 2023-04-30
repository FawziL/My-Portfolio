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
        <p>github.com/FawziL</p>
        <Tecnologies img={linkedin} />
        <p>linkedin.com/in/fawzi-lutfallah-62184b236/</p>
        <Tecnologies img={address} />
        <p>+58 4149541095</p>
        <Tecnologies img={envelope} />
        <p>fawzi.jlr@gmail.com</p>
    </div>
  );
}

export default SocialComponent;
