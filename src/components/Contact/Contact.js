import SocialComponent from '../SocialComponent/SocialComponent';
import ButtonDownload from '../ButtonDownload/ButtonDownload';
import Footer from '../Footer/Footer';
import { FormattedMessage} from 'react-intl';

function Contact() {
  return (
    <div id='Contact'>
        <h2><FormattedMessage id="contact"/></h2>

        <div className='dFlex'>
          <div>
            <p className='text'><FormattedMessage id="contactPresentation"/></p>
            <SocialComponent />
          </div>
          <div>
            <p className='text'><FormattedMessage id="contactCv"/></p>
            <ButtonDownload />  
          </div>
        </div>

        <Footer /> 
    </div>
  );
}

export default Contact;
