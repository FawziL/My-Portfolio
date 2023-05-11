import './ProyectsList.css';

function ProyectsList({id, title}) {
  function display(){
    if(window.getComputedStyle(document.getElementById(`proyect${id}`)).display === "block"){
      document.getElementById(`proyect${id}`).style.display = "none";
      document.getElementById(`proyectLi${id}`).style.backgroundColor = "transparent";
    }else{
      document.getElementById(`proyect${id}`).style.display = "block";
      document.getElementById(`proyectLi${id}`).style.backgroundColor = "rgb(59, 55, 94)";
    }
  }
  
  return (
    <div className='listProyects'>
        <li onClick={display} id={`proyectLi${id}`}>{title}</li>
    </div>
  );
}

export default ProyectsList;
