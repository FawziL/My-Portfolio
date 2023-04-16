import './Services.css';
import CardService from '../CardService/CardService.js'

function Services() {
  return (
    <>
        <h2>Servicios</h2>

        <p className='text'>
          Ya sea que necesites crear una nueva página web desde cero, actualizar 
        o mantener una existente, o incluso diseñar una aplicación web personalizada, puedo ayudarte a alcanzar tus objetivos digitales.
        </p>

        <div className='dFlexService'>
          <CardService textService={"Desarrollo de sitios web."} />
          <CardService textService={"Mantenimiento y soporte."} />
          <CardService textService={"Optimización para motores de búsqueda (SEO)."} />
          <CardService textService={"Integración de plataformas y herramientas."} />
          <CardService textService={"Desarrollo de comercio electrónico."} />
        </div>
    </>
  );
}

export default Services;
