import { useState, useEffect } from 'react';
import ProyectList from '../ProyectList/ProyectList.jsx'
import { getProyects } from '../../info.js' 
import { FormattedMessage} from 'react-intl';

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
        <ProyectList  proyects={proyects} locale={locale}/>  
    </div>
  );
}

export default Proyects;

