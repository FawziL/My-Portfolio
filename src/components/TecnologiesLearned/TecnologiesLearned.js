import './TecnologiesLearned.css';

function TecnologiesLearned({name, tecnology}) {
  return (
    <div className='ContainerTL'>  
      <img src={tecnology} alt={`Img de alt`} className='tecnologyL'/>
      <p className='textBox'>{name}</p>
    </div>
  );
}

export default TecnologiesLearned;
