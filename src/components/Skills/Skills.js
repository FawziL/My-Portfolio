import './Skills.css';
import TecnologiesLearned from '../TecnologiesLearned/TecnologiesLearned.js'
import html from '../../assets/icons/html5.svg';
import css from '../../assets/icons/css3.svg';
import javascript from '../../assets/icons/javascript.svg';
import react from '../../assets/icons/react.svg';
import nodejs from '../../assets/icons/nodejs.svg';
import typescript from '../../assets/icons/typescript.svg';
import github from '../../assets/icons/github.svg';
import mongodb from '../../assets/icons/mongodb.svg';
import bootstrap from '../../assets/icons/bootstrap.svg';

function Skills() {
  return (
 
    <div id='Skills'>
      <h2>Habilidades</h2>

      <p className='text'>
        Estas son las tecnologías que he aprendido, puesto en práctica y/o trabajado con ellas.
      </p>

      <div className='dFlexSkills'>
        <TecnologiesLearned name={"Html"} tecnology={html} />
        <TecnologiesLearned name={"Css"} tecnology={css} />
        <TecnologiesLearned name={"Javascript"} tecnology={javascript} />
        <TecnologiesLearned name={"ReactJs"} tecnology={react} />
        <TecnologiesLearned name={"NodeJs"} tecnology={nodejs} />
        <TecnologiesLearned name={"MongoDB"} tecnology={mongodb} />
        <TecnologiesLearned name={"Bootstrap"} tecnology={bootstrap} />
        <TecnologiesLearned name={"TypeScript"} tecnology={typescript} />
        <TecnologiesLearned name={"Github"} tecnology={github} />
      </div>  
    </div>

 
  );
}

export default Skills;
