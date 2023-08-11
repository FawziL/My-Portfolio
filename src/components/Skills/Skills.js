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
import { FormattedMessage} from 'react-intl';

function Skills() {
  return (
 
    <div id='Skills'>
      <h2><FormattedMessage id="skills"/></h2>

      <p className='text'><FormattedMessage id="skillPresentation"/></p>

      <div className='dFlexSkills'>
        <TecnologiesLearned name={"HTML"} tecnology={html} />
        <TecnologiesLearned name={"CSS"} tecnology={css} />
        <TecnologiesLearned name={"JavaScript"} tecnology={javascript} />
        <TecnologiesLearned name={"ReactJs"} tecnology={react} />
        <TecnologiesLearned name={"NodeJs"} tecnology={nodejs} />
        <TecnologiesLearned name={"MongoDB"} tecnology={mongodb} />
        <TecnologiesLearned name={"BootStrap"} tecnology={bootstrap} />
        <TecnologiesLearned name={"TypeScript"} tecnology={typescript} />
        <TecnologiesLearned name={"GitHub"} tecnology={github} />
      </div>  
    </div>

 
  );
}

export default Skills;
