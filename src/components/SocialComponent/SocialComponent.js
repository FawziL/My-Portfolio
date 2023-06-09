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
        <a href='https://github.com/FawziL'>github.com/FawziL</a>       
        <Tecnologies img={linkedin} />
        <a href='https://linkedin.com/in/fawzi-lutfallah-62184b236/'>linkedin.com/in/fawzi-lutfallah-62184b236/</a>       
        <Tecnologies img={address} />
        <p>+58 4149541095</p>
        <Tecnologies img={envelope} />
        <p>fawzi.jlr@gmail.com</p>
    </div>
  );
}

export default SocialComponent;
