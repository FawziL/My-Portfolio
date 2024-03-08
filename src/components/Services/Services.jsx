import './Services.css';
import CardService from '../CardService/CardService.jsx'
import { FormattedMessage} from 'react-intl';

function Services() {
  return (
    <div id='Services'>
      <h2><FormattedMessage id="services"/></h2>

      <p className='text'><FormattedMessage id="servicePresentation"/></p>

      <div className='dFlexService'>
        <CardService titleService={<FormattedMessage id="serviceTitle1"/>} 
        textService={<FormattedMessage id="serviceText1"/>}/>
        
        <CardService titleService={<FormattedMessage id="serviceTitle2"/>} 
        textService={<FormattedMessage id="serviceText2"/>}/>

        <CardService titleService={<FormattedMessage id="serviceTitle3"/>} 
        textService={<FormattedMessage id="serviceText3"/>}/>

        <CardService titleService={<FormattedMessage id="serviceTitle4"/>} 
        textService={<FormattedMessage id="serviceText4"/>}/>

        <CardService titleService={<FormattedMessage id="serviceTitle5"/>} 
        textService={<FormattedMessage id="serviceText5"/>}/>
      </div>  
    </div>
  );
}

export default Services;
