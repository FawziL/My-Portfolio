import './Services.css';
import CardService from '../CardService/CardService.js'

function Services() {
  return (
 
    <div id='Services'>
      <h2>Servicios</h2>

      <p className='text'>
        Ya sea que necesites crear una nueva página web desde cero, actualizar 
      o mantener una existente, o incluso diseñar una aplicación web personalizada, puedo ayudarte a alcanzar tus objetivos digitales.
      </p>

      <div className='dFlexService'>
        <CardService titleService={"Desarrollo de sitios web."} textService={"Creación de páginas web atractivas y funcionales para el usuario."}/>
        <CardService titleService={"Mantenimiento y soporte."} textService={"Actualizaciones, corrección de errores, soporte técnico e implementación de mejoras."}/>
        <CardService titleService={"Optimización para motores de búsqueda (SEO)."} textService={"Implementación de técnicas y estrategias para mejorar el posicionamiento de un sitio web."}/>
        <CardService titleService={"Desarrollo de comercio electrónico."} textService={"Creación de ecommerce con gestión de inventario, carrito de compras y pago seguro."}/>
        <CardService titleService={"Integración de plataformas y herramientas."} textService={"Incorporación de diversas plataformas y herramientas."}/>
      </div>  
    </div>

 
  );
}

export default Services;
