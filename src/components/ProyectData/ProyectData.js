import './ProyectData.css';
import html from '../../assets/icons/html5.svg';
import css from '../../assets/icons/css3.svg';
import javascript from '../../assets/icons/javascript.svg';
import nodejs from '../../assets/icons/nodejs.svg';
import github from '../../assets/icons/github.svg';
import mongodb from '../../assets/icons/mongodb.svg';
import bootstrap from '../../assets/icons/bootstrap.svg';
import Tecnologies from '../Tecnologies/Tecnologies';
import down from '../../assets/icons/double-down.svg';
import arrow from '../../assets/icons/arrow.svg';

function ProyectData({id, title, proyectThumbnail, text, code, live}) {
  function display(){
    if(document.getElementById(`miDiv${id}`).style.display !== "block"){
      document.getElementById(`miDiv${id}`).style.display = "block";
    }else{
      document.getElementById(`miDiv${id}`).style.display = "none";
    }
    
  }
  return (
    <div className='proyects'>
        <h3>{title}</h3>
            <div className='section'>
                <img src={proyectThumbnail} alt="Imagen del proyecto: "/>
                <div>
                    <p className='with200'>{text}</p>
                    <div className='dFlex'>
                      <a href={code} className='pages' target="_blank" rel="noreferrer">Código <img src={github} alt="logo GitHub"/></a>
                      <a href={live} className='pages' target="_blank" rel="noreferrer">Live <img src={arrow} alt="flecha"/></a>
                    </div>
                </div>
            </div>
            
            <div className='products'>
            <button onClick={display} className='buttonTecnologies'>
              <img src={down} alt='down'/>
                Tecnologías empleadas 
              <img src={down} alt='down'/>
            </button>
              <div className='tecnologies' id={`miDiv${id}`}>
                  <Tecnologies img={html} />
                  <Tecnologies img={css} />
                  <Tecnologies img={javascript} />
                  <Tecnologies img={nodejs} />
                  <Tecnologies img={bootstrap} />
                  <Tecnologies img={mongodb} />
              </div>
            </div>
    </div>
    
  );
}

export default ProyectData;
