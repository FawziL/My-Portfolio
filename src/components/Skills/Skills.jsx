import './Skills.css';
import SkillsLearned from '../SkillsLearned/SkillsLearned.jsx';
import { FormattedMessage } from 'react-intl';
import { useState, useEffect } from 'react';
import { getTecnologies } from '../../info.js';

function Skills({ locale }) {
  const [tecnologies, setTecnologies] = useState([]);
  const [expandedSkills, setExpandedSkills] = useState([]); // Estado para controlar cuáles elementos están expandidos

  useEffect(() => {
    getTecnologies()
      .then(produc => {
        setTecnologies(produc);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const toggleExpand = (id) => {
    setExpandedSkills((prevState) =>
      prevState.includes(id)
        ? prevState.filter((expandedId) => expandedId !== id)
        : [...prevState, id]
    );
  };

  return (
    <div id='Skills'>
      <h2><FormattedMessage id="skills" /></h2>
      <p className='text'><FormattedMessage id="skillPresentation" /></p>

      <div className='dFlexSkills'>
        {tecnologies.map((tecnols, index) => (
          <SkillsLearned
            key={tecnols.id}
            {...tecnols}
            locale={locale}
            isExpanded={expandedSkills.includes(tecnols.id)}
            toggleExpand={toggleExpand}
          />
        ))}
      </div>
    </div>
  );
}

export default Skills;