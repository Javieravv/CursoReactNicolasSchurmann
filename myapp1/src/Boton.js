// Componente de botón.
// PUeden venir en las props variables, funciones, propiedades, objetos, matrices.
// Etc.

import './Boton.css'

const Boton = ( props ) => {
    return (
        <button  {...props} className = 'btn'></button>
    )
}

export default Boton