import './SkillsLearned.css';
import html from '../../assets/icons/arrow-right.svg';

function SkillsLearned({name, tecnology, text, texto, id, locale}) {

  function display(){
    let svg = document.getElementById(`tecnologyL${id}`);
    let p = document.getElementById(`textSkill${id}`);

    if (window.getComputedStyle(p).width === "0px") {
        p.classList.remove(`textSkill${id}`)
        p.classList.add("textSkillVisible");

        svg.style.rotate = 180 +"deg";
    } else {
        p.classList.remove("textSkillVisible")
        p.classList.remove(`textSkill${id}`)
        p.classList.add("textSkillInvisible")
        svg.style.rotate = 0 +"deg";
    }
  } 
  return (
    <div className='ContainerTL'>  
      <div className='widthSkill'>
        <h3 className='textBox'>{name}</h3>
        <img src={tecnology} alt={`Img de alt`} className='tecnologyL'/>
      </div>
      
      <p id={`textSkill${id}`} className={`textSkill${id} textSkillInvisible`} >{locale === 'en' ? text : texto}</p>
      <button className='buttonSkill' onClick={display}>
        <img src={html} id={`tecnologyL${id}`} alt={`Imagen de la tecnologia: tecnologyL${id}`}/>
      </button>
    </div>
  );
}

export default SkillsLearned;
