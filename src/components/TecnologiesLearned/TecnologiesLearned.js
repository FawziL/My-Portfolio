import './TecnologiesLearned.css';

function TecnologiesLearned({name, tecnology}) {
  return (
    <div className='ContainerTL'>  
      <p>{name}</p>
      <img src={tecnology} alt={`Img de alt`} className='tecnologyL'/>
    </div>
  );
}

export default TecnologiesLearned;
