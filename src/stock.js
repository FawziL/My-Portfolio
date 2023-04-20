const productos = [
    {
        id: '1',
        title: "Proyecto Forbes", 
        proyectThumbnail: "/static/media/imagenPresentacion.09ba1ac614948f50132f.jpg", 
        text: "Hola", 
        code: "https://github.com/FawziL/Proyecto-Forbes", 
        live: "https://forbes-production.up.railway.app",
    },
    {
        id: '2',
        title: "Proyecto Dalacer", 
        proyectThumbnail: "/static/media/imagenPresentacion.09ba1ac614948f50132f.jpg", 
        text: "Este es un proyecto para una empresa de automoviles Este es un proyecto para una empresa de automoviles.", 
        code: "Google.com", 
        live: "Google.com"
    },
    {
        id: '3',
        title: "Proyecto React", 
        proyectThumbnail: "/static/media/imagenPresentacion.09ba1ac614948f50132f.jpg", 
        text: "Este es un proyecto para una empresa de automoviles Este es un proyecto para una empresa de automoviles.", 
        code: "Google.com", 
        live: "Google.com"
    },
    {
        id: '4',
        title: "Proyecto Psicoexito", 
        proyectThumbnail: "/static/media/imagenPresentacion.09ba1ac614948f50132f.jpg", 
        text: "Este es un proyecto para una empresa de automoviles Este es un proyecto para una empresa de automoviles.", 
        code: "Google.com", 
        live: "Google.com"
    }
]


export const getProductos = () =>{
    return new Promise (resolve =>{
        setTimeout(()=>{
            resolve(productos)
        },1000)
    })
}

