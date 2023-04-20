import './ButtonDownload.css';
function ButtonDownload() {
  const ButtonDownload = () => {
    window.open("/static/media/certificate_level6.d50a77e52618977cb277.pdf");
  };

  return (
    <button onClick={ButtonDownload} className='ButtonDownload'>
      Descargar currículum
    </button>
  );
}

export default ButtonDownload;
