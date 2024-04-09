import './NameList.css';

function NameList({id, title, titulo, locale}) {
  function display(){
    let div = document.getElementById(`proyect${id}`);
    let li = document.getElementById(`proyectLi${id}`);
    if (window.getComputedStyle(div).maxHeight === "0px") {
        div.style.maxHeight =  898 + "px";
        div.style.opacity = "1";
        li.style.backgroundColor = "rgb(56, 48, 62)";
    } else {
        div.style.maxHeight = "0";
        div.style.opacity = "0";
        li.style.backgroundColor = "rgb(77, 38, 117)";
    }
  }
  return (
    <>
      <li onClick={display} id={`proyectLi${id}`}>{title}</li>
    </>
  );
}

export default NameList;
