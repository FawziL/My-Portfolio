import html from './assets/icons/html5.svg';
import css from './assets/icons/css3.svg';
import javascript from './assets/icons/javascript.svg';
import nodejs from './assets/icons/nodejs.svg';
import mongodb from './assets/icons/mongodb.svg';
import bootstrap from './assets/icons/bootstrap.svg';
import react from './assets/icons/react.svg';

const productos = [
    {
        id: '1',
        title: "Proyecto Forbes", 
        proyectThumbnail: "/static/media/imagenPresentacion.09ba1ac614948f50132f.jpg", 
        text: "Sitio web completo, le permite al personal de la empresa almacenar las casas en venta y publicarlas.", 
        code: "https://github.com/FawziL/Proyecto-Forbes", 
        live: "https://forbes-production.up.railway.app",
        tecnologies: [html, css, javascript, nodejs, mongodb, bootstrap]
    },
    {
        id: '2',
        title: "Proyecto Aair-t-ToolShop", 
        proyectThumbnail: "/static/media/imagenPresentacion.09ba1ac614948f50132f.jpg", 
        text: "Este es un ecommerce totalmente funcional para una empresa de  herramientas y artículos de contrucción.", 
        code: "Google.com", 
        live: "Google.com",
        tecnologies: [html, css, javascript, react, bootstrap],
    },
    {
        id: '3',
        title: "Proyecto Dalacer", 
        proyectThumbnail: "/static/media/imagenPresentacion.09ba1ac614948f50132f.jpg", 
        text: "Este es un proyecto para un concesionario, donde se pueden detallar los autos y precios.",  
        code: "https://github.com/FawziL/Proyecto-Forbes", 
        live: "https://forbes-production.up.railway.app",
        tecnologies: [html, css, javascript, bootstrap],
    },
    {
        id: '4',
        title: "Proyecto Psicoéxito", 
        proyectThumbnail: "/static/media/imagenPresentacion.09ba1ac614948f50132f.jpg", 
        text: "Este es un proyecto en conjunto para un psicólogo que desea presentarse así mismo y su trabajo.", 
        code: "Google.com", 
        live: "Google.com",
        tecnologies: [html, css, javascript, bootstrap],
    }
]


export const getProductos = () =>{
    return new Promise (resolve =>{
        setTimeout(()=>{
            resolve(productos)
        },500)
    })
}

