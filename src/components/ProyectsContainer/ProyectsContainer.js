import './ProyectsContainer.css';
import { useState, useEffect } from 'react';
import ProyectList from '../ProyectList/ProyectList.js'
import { getProductos } from '../../stock' 

function Proyects() {
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
        <h2>Últimos proyectos</h2>
        <ProyectList  productos={productos}/>  
    </div>
  );
}

export default Proyects;

