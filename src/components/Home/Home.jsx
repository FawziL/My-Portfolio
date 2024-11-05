import './Home.css';
import ButtonDownload from '../ButtonDownload/ButtonDownload';
import { FormattedMessage } from 'react-intl';
import Yo from '../../assets/fotoHome.png';
import { motion } from 'framer-motion';

function Home() {
  return (
    <div className='presentation'>
      <motion.div 
        className='imgPresentation'
        initial={{ x: '-60%', opacity: 0 }} // Comienza fuera de la vista a la izquierda
        animate={{ x: 0, opacity: 1 }} // Se mueve a su posición original
        transition={{ duration: 1.2 }} // Duración de la animación
      >
        <img src={Yo} alt='Foto Fawzi Lutfallah' />
      </motion.div>
      <div className='presentationText'> 
        <h2 className='greet'><FormattedMessage id="greet" /></h2>
        <span>
          <h2><FormattedMessage id="presentation" /></h2>
        </span>
        <h2 className='jobTitle'><FormattedMessage id="ocupation" /></h2>
        <div className='dFlex'>
          <p><FormattedMessage id="knowladge" /></p>
        </div>
        
        <motion.div
          initial={{ scale: 0 }}
          animate={{ rotate: 360, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 280,
            damping: 60
          }}
          
        >
          <ButtonDownload />  
        </motion.div>
        
      </div>
    </div>
  );
}

export default Home;

