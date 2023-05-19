import ProyectData from '../ProyectData/ProyectData.js'
import './ProyectList.css'
import ProyectsList from '../ProyectsList/ProyectsList.js'

const ProyectList = ({productos, locale}) =>{
    return(
    <div className='proyectListContainer'>
        {productos.map(producs => 
        <div className='proyectListData'>
            <ProyectsList key={producs.id}{...producs} locale={locale}/>   
            
            <ProyectData key={producs.id+1}{...producs} locale={locale}/>
        </div>
        )}
    </div>)
        
}
export default ProyectList;

