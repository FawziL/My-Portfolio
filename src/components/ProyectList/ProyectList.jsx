import ProyectData from '../ProyectData/ProyectData.jsx'
import './ProyectList.css'
import ProyectsList from '../ProyectTitleList/NameList.jsx'

const ProyectList = ({proyects, locale}) =>{
    return(
    <div className='proyectListContainer'>
            {proyects.map(producs => 
                <div className='listProyects'>
                    <ProyectsList key={producs.id}{...producs} locale={locale}/>  
                    <ProyectData key={producs.id+1}{...producs} locale={locale}/>
                </div>
            )}
    </div>)
        
}
export default ProyectList;

