import './Skills.css';
import SkillsLearned from '../SkillsLearned/SkillsLearned.jsx'
import { FormattedMessage} from 'react-intl';
import { useState, useEffect } from 'react';
import { getTecnologies } from '../../info.js' 

function Skills({locale}) {
  const [tecnologies, setTecnologies] = useState([])

  useEffect(()=>{
      getTecnologies().then(produc=>{
          setTecnologies(produc)
      }).catch(error => {
          console.log(error)
      })
  }, [])

  return (
    <div id='Skills'>
      <h2><FormattedMessage id="skills"/></h2>
      <p className='text'><FormattedMessage id="skillPresentation"/></p>

      <div className='dFlexSkills'>
        {tecnologies.map(tecnols => 
          <SkillsLearned {...tecnols} locale={locale}/>
        )}
      </div>  
    </div>
  );
}

export default Skills;
