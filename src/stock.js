import html from './assets/icons/html5.svg';
import css from './assets/icons/css3.svg';
import javascript from './assets/icons/javascript.svg';
import nodejs from './assets/icons/nodejs.svg';
import mongodb from './assets/icons/mongodb.svg';
import bootstrap from './assets/icons/bootstrap.svg';
import react from './assets/icons/react.svg';
import forbesProyect from './assets/imagenPresentacion.jpg'

const productos = [
    {
        id: '1',
        title: "Proyect Forbes", 
        titulo: "Proyecto Forbes", 
        proyectThumbnail: forbesProyect, 
        text: "Comprehensive website, allows company staff to store houses for sale and publish them.", 
        texto: "Sitio web completo, le permite al personal de la empresa almacenar las casas en venta y publicarlas.", 
        code: "https://github.com/FawziL/Proyecto-Forbes", 
        live: "https://forbes-production.up.railway.app",
        tecnologies: [html, css, javascript, nodejs, mongodb, bootstrap]
    },
    {
        id: '2',
        title: "Proyect Aair-t-ToolShop", 
        titulo: "Proyecto Aair-t-ToolShop",
        proyectThumbnail: forbesProyect, 
        text: "This is a fully functional ecommerce for a construction supplies and tools company.",
        texto: "Este es un ecommerce totalmente funcional para una empresa de  herramientas y artículos de contrucción.", 
        code: "Google.com", 
        live: "Google.com",
        tecnologies: [html, css, javascript, react, bootstrap],
    },
    {
        id: '3',
        title: "Proyect Dalacer", 
        titulo: "Proyecto Dalacer", 
        proyectThumbnail: forbesProyect, 
        text: "This is a project for a dealership, where cars and prices can be detailed.",
        texto: "Este es un proyecto para un concesionario, donde se pueden detallar los autos y precios.",  
        code: "https://github.com/FawziL/Proyecto-Forbes", 
        live: "https://forbes-production.up.railway.app",
        tecnologies: [html, css, javascript, bootstrap],
    },
    {
        id: '4',
        title: "Proyect Psicoéxito", 
        titulo: "Proyecto Psicoéxito", 
        proyectThumbnail: forbesProyect, 
        text: "This is a joint project for a psychologist who wants to introduce himself and his work.",
        texto: "Este es un proyecto en conjunto para un psicólogo que desea presentarse así mismo y su trabajo.", 
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

