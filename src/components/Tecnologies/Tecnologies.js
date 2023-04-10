import './Tecnologies.css';

function Tecnologies(tecnology) {
    let img = tecnology.img
  return (
    <>
        <img src={img} alt={'img de '} className='tecnology'/>
    </>
  );
}

export default Tecnologies;
