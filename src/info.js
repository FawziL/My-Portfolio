import html from './assets/icons/html5.svg';
import css from './assets/icons/css3.svg';
import javascript from './assets/icons/javascript.svg';
import nodejs from './assets/icons/nodejs.svg';
import mongodb from './assets/icons/mongodb.svg';
import bootstrap from './assets/icons/bootstrap.svg';
import react from './assets/icons/react.svg';
import typescript from './assets/icons/typescript.svg';
import github from './assets/icons/github.svg';
import angular from './assets/icons/angularjs.svg';
import postgresql from './assets/icons/postgresql.svg';
import tailwind from './assets/icons/tailwind.svg';

import proyectUIC from './assets/proyects/UIC.png'
import proyectForbes from './assets/proyects/forbes.png'
import proyectToolShop from './assets/proyects/toolShop.png'
import proyectDalacer from './assets/proyects/dalacer.png'
import proyectChat from './assets/proyects/chat.png'
import proyectBiblioteca from './assets/proyects/biblioteca.png'

const proyects = [
  {
    id: '6',
    title: "Biblioteca", 
    proyectThumbnail: proyectBiblioteca, 
    text: "Fullstack application that allows users to search, view, and manage books online, with JWT authentication and a React frontend. It includes features like favorites, category filtering, and password recovery.", 
    texto: "Alicación fullstack que permite a los usuarios buscar, visualizar y gestionar libros en línea, con autenticación mediante JWT y un frontend en React. Incluye funcionalidades como favoritos, filtrado por categorías, y recuperación de contraseñas.", 
    code: "https://github.com/FawziL/Biblioteca-Virtual", 
    live: "https://biblioteca-virtual.onrender.com",
    tecnologies: [react, nodejs, postgresql]
  },
  {
    id: '5',
    title: "Chat", 
    proyectThumbnail: proyectChat, 
    text: "Real-time interactive chat platform with private rooms for each registered user. This is a personal project to sharpen my full-stack development skills by utilizing technologies I haven't yet mastered.", 
    texto: "Plataforma de chat interactivo en tiempo real con salas privadas para cada usuario registrado. Este es un proyecto personal para afinar mis habilidades como desarrollaor fullstack y hacer uso de tecnologías que no dominaba.", 
    code: "https://github.com/FawziL/Proyecto-Chat", 
    live: "https://chat-kxsz.onrender.com",
    tecnologies: [react, nodejs, mongodb, tailwind]
  },
  {
    id: '4',
    title: "Forbes",  
    proyectThumbnail: proyectForbes, 
    text: "Sophisticated web application designed to facilitate efficient house management for the company's personnel, enabling seamless storage and publication of properties available for sale.", 
    texto: "Aplicación web sofisticada diseñada para facilitar la gestión eficiente de propiedades residenciales para el personal de la empresa, permitiendo el almacenamiento y publicación fluida de propiedades disponibles para la venta.", 
    code: "https://github.com/FawziL/Proyecto-Forbes", 
    live: "https://forbes-djnp.onrender.com",
    tecnologies: [html, css, javascript, nodejs, mongodb, bootstrap]
  },
  {
    id: '3',
    title: "U.I.C", 
    proyectThumbnail: proyectUIC, 
    text: "Tailored e-commerce platform that adapts to the unique needs of the company, allowing it to offer an impeccable online shopping experience and strengthen its corporate image.", 
    texto: "Plataforma de comercio electrónico personalizada que se adapta a las necesidades únicas de la empresa, permitiéndole ofrecer una experiencia de compra online impecable y fortalecer tu imagen corporativa.", 
    code: "https://github.com/FawziL/TEG", 
    live: "https://deploy-7jsa.onrender.com",
    tecnologies: [html, css, javascript, nodejs, postgresql]
  },
  {
    id: '1',
    title: "Dalacer", 
    proyectThumbnail: proyectDalacer, 
    text: "Website allowing users to thoroughly explore a range of vehicles. It offers an interactive experience featuring high-quality images, technical specifications, and comparisons to aid visitors in finding their ideal car.",
    texto: "Aplicación web creado que permite a los usuarios explorar una variedad de vehículos. Ofrece una experiencia interactiva con imágenes de alta calidad y especificaciones técnicas para ayudar a los visitantes a encontrar su automóvil ideal.",  
    code: "https://github.com/FawziL/Proyecto-Dalacer", 
    live: "https://proyecto-dalacer.onrender.com",
    tecnologies: [html, css, javascript, bootstrap],
  },
]
/* {
    id: '2',
    title: "AirT-ToolShop", 
    proyectThumbnail: proyectToolShop, 
    text: " Platform designed to cater specifically to the requirements of construction companies in the realm of construction supplies and tools. Provides a convenient online shopping experience.",
    texto: "Plataforma diseñada para satisfacer las necesidades de una empresa de suministros y herramientas para la construcción. Ofrece una amplia gama de funcionalidades y servicios para facilitar una experiencia de compra en línea fluida.", 
    code: "https://github.com/FawziL/Proyecto-ToolShop", 
    live: "https://airt-toolshop.onrender.com",
    tecnologies: [html, css, javascript, react, bootstrap],
  },
*/
const tecnologies = [
  {
    id: 1,
    name: "HTML",
    tecnology: html,
    text: "HTML serves as the primary markup language for crafting web pages. I employ it to organize the content in my web projects.",
    texto: "HTML es el lenguaje de marcado principal para crear páginas web. Lo utilizo para estructurar el contenido de mis proyectos web."
  },
  {
    id: 2,
    name: "CSS",
    text: "CSS is utilized to style web pages and enhance their visual appearance. I possess expertise in crafting appealing designs.",
    texto: "CSS se utiliza para dar estilo a las páginas web y mejorar su aspecto visual. Tengo experiencia en la creación de diseños atractivos.",
    tecnology: css
  },
  {
    id: 3,
    name: "JavaScript",
    text: "JavaScript is a widely employed programming language in web development to introduce interactivity and dynamism.",
    texto: "JavaScript es un lenguaje de programación ampliamente utilizado en el desarrollo web para agregar interactividad y dinamismo.",
    tecnology: javascript
  },
  {
    id: 4,
    name: "ReactJs",
    text: "React.js is a JavaScript library for building interactive and responsive user interfaces.",
    texto: "React.js es una biblioteca de JavaScript para construir interfaces de usuario interactivas y reactivas.",
    tecnology: react
  },
  {
    id: 5,
    name: "NodeJs",
    text: "Node.js is a JavaScript runtime environment that enables the execution of JavaScript code on the server.",
    texto: "Node.js es un entorno de tiempo de ejecución de JavaScript que permite ejecutar código JavaScript en el servidor.",
    tecnology: nodejs
  },
  {
    id: 6,
    name: "MongoDB",
    text: "MongoDB is a widely used NoSQL database that is employed in web development to store data in a flexible and scalable manner.",
    texto: "MongoDB es una base de datos NoSQL que se utiliza ampliamente en el desarrollo web para almacenar datos de manera flexible y escalable.",
    tecnology: mongodb
  },
  {
    id: 7,
    name: "TypeScript",
    text: "TypeScript is a superset of JavaScript that adds static typing and other features.",
    texto: "TypeScript es un superconjunto de JavaScript que agrega tipado estático y otras características.",
    tecnology: typescript
  },
  {
    id: 8,
    name: "BootStrap",
    text: "Bootstrap is a CSS framework that simplifies the development of responsive websites with an appealing design.",
    texto: "Bootstrap es un marco de diseño (framework) CSS que facilita la creación de sitios web responsivos y con un diseño atractivo.",
    tecnology: bootstrap
  },
  {
    id: 9,
    name: "GitHub",
    text: "GitHub is a collaborative development platform that leverages Git for version control.",
    texto: "GitHub es una plataforma de desarrollo colaborativo que utiliza Git para el control de versiones.",
    tecnology: github
  },
  {
    id: 10,
    name: "AngularJs",
    text: "AngularJs is a JavaScript library for building interactive user interfaces built on TypeScript.",
    texto: "AngularJs es una biblioteca de JavaScript para construir interfaces de usuario interactivas construida sobre TypeScrip.",
    tecnology: angular
  },
  {
    id: 11,
    name: "PostgreSQL",
    text: "PostgreSQL is an open source relational database management system (RDBMS).",
    texto: "PostgreSQL es un sistema de gestión de bases de datos relacional (SGBDR) de código abierto.",
    tecnology: postgresql
  },
  {
    id: 12,
    name: "Tailwind",
    text: "Tailwind CSS is an open-source CSS framework for rapid UI development.",
    texto: "Tailwind CSS es un framework de CSS de código abierto​ para el diseño de páginas web.",
    tecnology: tailwind
  },
]

export const getProyects = () =>{
  return new Promise (resolve =>{
      setTimeout(()=>{
          resolve(proyects)
      },250)
  })
}

export const getTecnologies = () =>{
    return new Promise (resolve =>{
        setTimeout(()=>{
            resolve(tecnologies)
        },500)
    })
}