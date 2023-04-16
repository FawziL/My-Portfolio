import './Proyects.css';
import ProyectData from '../ProyectData/ProyectData.js'
import foto from '../../assets/imagenPresentacion.jpg'
import Tecnologies from '../Tecnologies/Tecnologies.js'

function Proyects() {
  return (
    <>
        <h2>Últimos proyectos</h2>
        <div className='proyects'>
        <ProyectData  title={'Forbes'} proyectThumbnail={foto} 
        text={"sdddddddddddddddddddddddddlorem"} github={'prueba'} 
        live={"./hola"}/>
          <div className='tecnologies'>
                <Tecnologies img={foto} />
                <Tecnologies img={foto} />
                <Tecnologies img={foto} />
                <Tecnologies img={foto} />
                <Tecnologies img={foto} />
                <Tecnologies img={foto} />
                <Tecnologies img={foto} />
                <Tecnologies img={foto} />   
            </div>
        </div>       
    </>
  );
}

export default Proyects;
