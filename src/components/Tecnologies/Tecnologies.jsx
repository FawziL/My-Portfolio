import "./Tecnologies.css";

function Tecnologies(tecnology, alt) {
    let img = tecnology.img;
    return <img src={img} alt={`Img de alt ${alt}`} className="tecnology" />;
}

export default Tecnologies;
