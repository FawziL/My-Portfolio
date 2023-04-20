import ProyectData from '../ProyectData/ProyectData.js'
import './ProyectList.css'

const ProyectList = ({productos}) =>{
    return(
    <div className='proyectListContainer'>
        {productos.map(producs => <ProyectData key={producs.id}{...producs} />)}
    </div>)
        
}
export default ProyectList