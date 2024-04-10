import { useState, useEffect } from 'react';
import ProyectData from '../ProyectData/ProyectData.jsx'
import { getProyects } from '../../info.js' 
import { FormattedMessage} from 'react-intl';
import './ProyectsContainer.css';

function Proyects({locale}) {
  const [proyects, setProyects] = useState([])

  useEffect(()=>{
      getProyects().then(produc=>{
          setProyects(produc)
      }).catch(error => {
          console.log(error)
      })
  }, [])
  
  return (
    <div id='Proyects'>
        <h2><FormattedMessage id="proyects"/></h2>
        <p className='text'><FormattedMessage id='proyectPresentation'/></p>
        <div className='proyectsContainer'>
            {proyects.map(producs => 
              <ProyectData key={producs.id+1}{...producs} locale={locale}/>
            )}
        </div> 
    </div>
  );
}

export default Proyects;

