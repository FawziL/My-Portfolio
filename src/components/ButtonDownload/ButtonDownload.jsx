import './ButtonDownload.css';
import CV from '../../assets/CV Fawzi Lutfallah.pdf';
import {FormattedMessage} from 'react-intl';

function ButtonDownload() {
  const ButtonDownload = () => {
    window.open(CV);
  };

  return (
    <button onClick={ButtonDownload} className='ButtonDownload'>
      <FormattedMessage id="buttonDownload"/></button>
  );
}

export default ButtonDownload;
