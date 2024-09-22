import './SocialComponent.css';
import Tecnologies from '../Tecnologies/Tecnologies';
import github from '../../assets/icons/github.svg';
import linkedin from '../../assets/icons/linkedin.svg';
import address from '../../assets/icons/address.svg';
import envelope from '../../assets/icons/envelope.svg';

function SocialComponent() {
  return (
    <div className='socialdFlex'>      
      <div>
        <div className='SocialComponent'> 
          <Tecnologies img={address} />
          <a href="https://wa.me/584149541095" target="_blank">
            <p>+58 4149541095</p>
          </a>
        </div>  
        <div className='SocialComponent'> 
          <Tecnologies img={envelope} />
          <a href="mailto:fawzi.jlr@gmail.com?subject=Consulta%20sobre%20tu%20producto&body=Hola,%20estoy%20interesado%20en...">
            <p>fawzi.jlr@gmail.com</p>
          </a>
        </div>
      </div>
      <div>
        <div className='SocialComponent'>
          <Tecnologies img={github} />
          <a href='https://github.com/FawziL' target="_blank">github.com/FawziL</a> 
        </div>  
        <div className='SocialComponent'>    
          <Tecnologies img={linkedin} />
          <a href='https://linkedin.com/in/fawzi-lutfallah-62184b236/' target="_blank">fawzi-lutfallah</a>   
        </div> 
      </div>
    </div>
  );
}

export default SocialComponent;
