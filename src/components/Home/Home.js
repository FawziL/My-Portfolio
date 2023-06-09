import './Home.css';
import ButtonDownload from '../ButtonDownload/ButtonDownload';
import Yo from '../../assets/descarga3.png'
import { FormattedMessage} from 'react-intl';

function Home() {
  return (
    <div className='presentation'>
      <img src={Yo} alt='Foto Fawzi Lutfallah'/>
      <div className='presentationText'> 
        <span>
          <h2><FormattedMessage id="presentation"/></h2>
        </span>
        <h2 className='jobTitle'><FormattedMessage id="ocupation"/></h2>
        <p><FormattedMessage id="knowladge"/></p>
        <ButtonDownload />  
      </div>
    </div>
  );
}

export default Home;
