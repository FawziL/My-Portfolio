import './ProyectData.css';

function ProyectData({title, proyectThumbnail, text, github, live}) {

  return (
    <>
        <h3>Proyecto {title}</h3>
            <section className='section'>
                <img src={proyectThumbnail} alt=""/>
                <div>
                    <p>{text}</p>
                    <div className='dFlex'>
                        <button>{github}</button>
                        <button>{live}</button>
                    </div>
                </div>
            </section>
            <button>Tecnologías empleadas</button>
    </>
  );
}

export default ProyectData;
