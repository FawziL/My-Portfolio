import SocialComponent from '../SocialComponent/SocialComponent';
import ButtonDownload from '../ButtonDownload/ButtonDownload';
import Footer from '../Footer/Footer';
import { FormattedMessage} from 'react-intl';

function Contact() {
  return (
    <div id='Contact'>
        <h2><FormattedMessage id="contact"/></h2>

        <p className='text'><FormattedMessage id="contactPresentation"/></p>

        <SocialComponent />

        <p className='text'><FormattedMessage id="contactCv"/></p>

        <ButtonDownload />  

        <Footer /> 
    </div>
  );
}

export default Contact;
