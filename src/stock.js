import html from './assets/icons/html5.svg';
import css from './assets/icons/css3.svg';
import javascript from './assets/icons/javascript.svg';
import nodejs from './assets/icons/nodejs.svg';
import mongodb from './assets/icons/mongodb.svg';
import bootstrap from './assets/icons/bootstrap.svg';
import react from './assets/icons/react.svg';
import proyectForbes from './assets/proyects/forbes.png'
import proyectToolShop from './assets/proyects/toolShop.png'
import proyectDalacer from './assets/proyects/dalacer.png'

const productos = [
    {
        id: '1',
        title: "Proyect Forbes", 
        titulo: "Proyecto Forbes", 
        proyectThumbnail: proyectForbes, 
        text: "Sophisticated web application designed to facilitate efficient house management for the company's personnel, enabling seamless storage and publication of properties available for sale.", 
        texto: "Aplicación web sofisticada diseñada para facilitar la gestión eficiente de propiedades residenciales para el personal de la empresa, permitiendo el almacenamiento y publicación fluida de propiedades disponibles para la venta.", 
        code: "https://github.com/FawziL/Proyecto-Forbes", 
        live: "https://forbes-djnp.onrender.com",
        tecnologies: [html, css, javascript, nodejs, mongodb, bootstrap]
    },
    {
        id: '2',
        title: "Proyect AirT-ToolShop", 
        titulo: "Proyecto AirT-ToolShop",
        proyectThumbnail: proyectToolShop, 
        text: "All-encompassing platform designed to meet the diverse needs of a dynamic construction supplies and tools company. It offers a wide range of functionalities and services to facilitate a smooth and efficient online shopping experience.",
        texto: "Plataforma integral diseñada para satisfacer las diversas necesidades de una empresa dinámica de suministros y herramientas para la construcción. Ofrece una amplia gama de funcionalidades y servicios para facilitar una experiencia de compra en línea fluida y eficiente.", 
        code: "https://github.com/FawziL/Proyecto-ToolShop", 
        live: "https://airt-toolshop.onrender.com",
        tecnologies: [html, css, javascript, react, bootstrap],
    },
    {
        id: '3',
        title: "Proyect Dalacer", 
        titulo: "Proyecto Dalacer", 
        proyectThumbnail: proyectDalacer, 
        text: "Website allowing users to thoroughly explore a range of vehicles alongside their respective prices. It offers an interactive experience featuring high-quality images, technical specifications, and comparisons to aid visitors in finding their ideal car.",
        texto: "Sitio web creado para que los usuarios puedan explorar detalladamente una variedad de vehículos junto con sus respectivos precios. Ofrece una experiencia interactiva con imágenes de alta calidad y especificaciones técnicas para ayudar a los visitantes a encontrar su automóvil ideal.",  
        code: "https://github.com/FawziL/Proyecto-Dalacer", 
        live: "https://proyecto-dalacer.onrender.com",
        tecnologies: [html, css, javascript, bootstrap],
    },
]

export const getProductos = () =>{
    return new Promise (resolve =>{
        setTimeout(()=>{
            resolve(productos)
        },500)
    })
}

