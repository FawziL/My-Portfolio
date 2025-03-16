import './Home.css';
import ButtonDownload from '../ButtonDownload/ButtonDownload';
import { FormattedMessage } from 'react-intl';
import Yo from '../../assets/fotoHome.png';
import { motion } from 'framer-motion';

function Home() {
  return (
    <div className='presentation'>
      <div className='presentationText'> 
        <h2 className='greet'><FormattedMessage id="greet" /></h2>
        <span>
          <h2><FormattedMessage id="presentation" /></h2>
        </span>
        <h2 className='jobTitle'><FormattedMessage id="ocupation" /></h2>
        <p className='textStart'><FormattedMessage id="knowladge" /></p>
        <div  className='textStart'>
          <ButtonDownload/> 
        </div>

      </div>
      <motion.div 
        className='imgPresentation'
        initial={{ x: '60%', opacity: 0 }} // Comienza fuera de la vista a la izquierda
        animate={{ x: 0, opacity: 1 }} // Se mueve a su posición original
        transition={{ duration: 1.2 }} // Duración de la animación
      >
        <img src={Yo} alt='Foto Fawzi Lutfallah' />
      </motion.div>
    </div>
  );
}

export default Home;

