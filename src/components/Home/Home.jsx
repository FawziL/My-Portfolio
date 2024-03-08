import './Home.css';
import ButtonDownload from '../ButtonDownload/ButtonDownload';
import { FormattedMessage} from 'react-intl';
import Yo from '../../assets/descarga3.png'

function Home() {
  return (
    <div className='presentation'>
      <div className='imgPresentation'>
      <img src={Yo} alt='Foto Fawzi Lutfallah'/>
      </div>
      <div className='presentationText'> 
        <h2 className='greet'><FormattedMessage id="greet"/></h2>
        <span>
          <h2><FormattedMessage id="presentation"/></h2>
        </span>
        <h2 className='jobTitle'><FormattedMessage id="ocupation"/></h2>
        <div className='dFlex'>
          <p><FormattedMessage id="knowladge"/></p>
        </div>
        <ButtonDownload />  
      </div>
    </div>
  );
}

export default Home;
