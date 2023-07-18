import { useState, useEffect } from 'react';
import ProyectList from '../ProyectList/ProyectList.js'
import { getProductos } from '../../stock' 
import { FormattedMessage} from 'react-intl';

function Proyects({locale}) {
  const [productos, setProductos] = useState([])

  useEffect(()=>{
      getProductos().then(produc=>{
          setProductos(produc)
      }).catch(error => {
          console.log(error)
      })
  }, [])
  
  return (
    <div id='Proyects'>
        <h2><FormattedMessage id="proyects"/></h2>
        <ProyectList  productos={productos} locale={locale}/>  
    </div>
  );
}

export default Proyects;

