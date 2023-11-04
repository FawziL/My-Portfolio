import './SkillsLearned.css';
import html from '../../assets/icons/arrow-right.svg';

function SkillsLearned({name, tecnology, text, texto, id, locale}) {

  function display(){
    let svg = document.getElementById(`tecnologyL${id}`);
    let p = document.getElementById(`textSkill${id}`);
    if (window.getComputedStyle(p).width === "0px") {
        p.style.width = 270 + "px";
        p.style.opacity = "1";
        p.classList.add("textSkillVisible");
        svg.style.rotate = 180 +"deg";
        if(window.innerWidth < 500){
          p.style.width = 200 + "px";
        }
    } else {
        p.style.width = "0";
        p.style.opacity = "0";
        p.classList.remove("textSkillVisible")
        svg.style.rotate = 0 +"deg";
    }
  } 
  return (
    <div className='ContainerTL'>  
      <div className='widthSkill'>
        <h3 className='textBox'>{name}</h3>
        <img src={tecnology} alt={`Img de alt`} className='tecnologyL'/>
      </div>
      
      <p id={`textSkill${id}`} className="textSkillInvisible">{locale === 'en' ? text : texto}</p>
      <button className='buttonSkill' onClick={display}><img src={html} id={`tecnologyL${id}`}/></button>
    </div>
  );
}

export default SkillsLearned;
