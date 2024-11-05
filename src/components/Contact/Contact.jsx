import './Contact.css';
import ButtonDownload from '../ButtonDownload/ButtonDownload';
import Footer from '../Footer/Footer';
import { FormattedMessage} from 'react-intl';
import Tecnologies from '../Tecnologies/Tecnologies';
import github from '../../assets/icons/github.svg';
import linkedin from '../../assets/icons/linkedin.svg';
import address from '../../assets/icons/address.svg';
import envelope from '../../assets/icons/envelope.svg';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

function Contact() {
  const h2Ref = useRef(null);
  const isInView = useInView(h2Ref, { once: true }); 
  return (
    <div id='Contact'>
      
        <motion.h2
          ref={h2Ref}
          initial={{ x: '-50%', opacity: 0 }} // Comienza fuera de la pantalla arriba
          animate={isInView ? { x: 0, opacity: 1, transition: { type: 'tween', duration: 1 } } : {}}
          exit={{ opacity: 0 }} // Opción para hacer que desaparezca si se sale de vista
        >
          <FormattedMessage id="contact"/>
        </motion.h2>
          
        <div>
          <p className='text'><FormattedMessage id="contactPresentation"/></p>
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
        </div>

        <hr/>

        <motion.h2
          ref={h2Ref}
          initial={{ x: '-50%', opacity: 0 }} // Comienza fuera de la pantalla arriba
          animate={isInView ? { x: 0, opacity: 1, transition: { type: 'tween', duration: 1 } } : {}}
          exit={{ opacity: 0 }} // Opción para hacer que desaparezca si se sale de vista
        >
          <FormattedMessage id="cv"/>
        </motion.h2>
        
        <div>
          <p className='text'><FormattedMessage id="contactCv"/></p>
          <ButtonDownload />  
        </div>

        <Footer /> 
    </div>
  );
}

export default Contact;
