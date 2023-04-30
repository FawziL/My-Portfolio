import './ButtonDownload.css';
import CV from '../../assets/CV Fawzi Lutfallah.pdf';
function ButtonDownload() {
  const ButtonDownload = () => {
    window.open(CV);
  };

  return (
    <button onClick={ButtonDownload} className='ButtonDownload'>
      Descargar currículum
    </button>
  );
}

export default ButtonDownload;
