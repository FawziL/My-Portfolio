import './TecnologiesLearned.css';

function TecnologiesLearned({name, tecnology, text}) {
  return (
    <div className='ContainerTL'>  
      <div>
        <h3 className='textBox'>{name}</h3>
        <img src={tecnology} alt={`Img de alt`} className='tecnologyL'/>
      </div>
      <button className='XD'>Leer más</button>
    </div>
  );
}

export default TecnologiesLearned;
