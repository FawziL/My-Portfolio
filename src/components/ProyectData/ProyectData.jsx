import './ProyectData.css';
import github from '../../assets/icons/github.svg';
import Tecnologies from '../Tecnologies/Tecnologies';
import arrow from '../../assets/icons/arrowPurple.svg';
import { FormattedMessage} from 'react-intl';

function ProyectData({id, title, proyectThumbnail, text, texto, code, live, tecnologies, locale}) {
  function display(){
    let div = document.getElementById(`miDiv${id}`);
    if (window.getComputedStyle(div).height === "0px") {
        div.style.height = div.scrollHeight + "px";
        div.style.opacity = "1";
    } else {
        div.style.height = "0";
        div.style.opacity = "0";
    }
  }
  return (
    <div className='proyect'>
      <img src={proyectThumbnail} alt={`Imagen del proyecto: proyect${id}`} className='proyectImg'/>

      <div className='buttonCL'>
        <h3>{title}</h3>
        <div className='dFlex'>
          <a href={code} className='pages' target="_blank" rel="noreferrer">
            <img src={github} alt="logo GitHub"/>
          </a>
          <a href={live} className='pages' target="_blank" rel="noreferrer">
            <img src={arrow} alt="flecha"/>
          </a>
        </div>
      </div>

      <p className='dataInformationProyect'>{locale === 'en' ? text : texto}</p>
      
      <div className='products'>
        <button onClick={display} className='buttonTecnologies'>
          <FormattedMessage id="buttonTecnologies"/>
        </button>
        <div className='tecnologies' id={`miDiv${id}`}>
          {
            tecnologies.map((tecnology, index) => (
            <Tecnologies img={tecnology} key={`${tecnology.id}-tecnology-${index}`} alt={`Tecnología ${index + 1}`}/>))
          }
        </div>
      </div>
    </div>
  );
}

export default ProyectData;
