import ProyectData from '../ProyectData/ProyectData.js'
import './ProyectList.css'
import ProyectsList from '../ProyectsList/ProyectsList.js'

const ProyectList = ({productos, locale}) =>{
    return(
    <div className='proyectListContainer'>
        <div className='listProyects'>
            {productos.map(producs => 
                <ProyectsList key={producs.id}{...producs} locale={locale}/>   
            )}
        </div>   
        <div>
            {productos.map(producs => 
                <ProyectData key={producs.id+1}{...producs} locale={locale}/>
            )}
        </div>   
    </div>)
        
}
export default ProyectList;

