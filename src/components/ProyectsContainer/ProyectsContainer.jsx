import { useState, useEffect } from 'react';
import ProyectData from '../ProyectData/ProyectData.jsx'
import { getProyects } from '../../info.js' 
import { FormattedMessage} from 'react-intl';
import './ProyectsContainer.css';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

function Proyects({locale}) {
  const [proyects, setProyects] = useState([])
  const h2Ref = useRef(null);
  const isInView = useInView(h2Ref, { once: true }); 

  useEffect(()=>{
      getProyects().then(produc=>{
          setProyects(produc)
      }).catch(error => {
          console.log(error)
      })
  }, [])
  
  return (
    <div id='Proyects'>
      <motion.h2
        ref={h2Ref}
        initial={{ x: '-50%', opacity: 0 }} // Comienza fuera de la pantalla arriba
        animate={isInView ? { x: 0, opacity: 1, transition: { type: 'tween', duration: 1 } } : {}}
        exit={{ opacity: 0 }} // Opción para hacer que desaparezca si se sale de vista
      >
        <FormattedMessage id="proyects" />
      </motion.h2>
        <p className='text'><FormattedMessage id='proyectPresentation'/></p>
        <p className='text'><FormattedMessage id="note"/></p>
        <div className='proyectsContainer'>
            {proyects.map(producs => 
              <ProyectData key={producs.id+1}{...producs} locale={locale}/>
            )}
        </div> 
    </div>
  );
}

export default Proyects;

