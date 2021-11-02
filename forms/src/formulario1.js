// Otra forma de manejar formularios.
// No necesariamente debe ir la etiqueta de form.

import { useState } from 'react'


const  App = () => {
  // value recibe un objeto.
  const [value, setValue] = useState( { nombre: 'Nombre', texto : 'Coloca tu descripción'} )

  // Como esta función sirve para varios campos, se debe saber cuál campo se está modificando.

  const handleChange = (e) => {
    // Se debe generar una copia del estado, para no perder los demás 
    // campos.
    setValue( {
      ...value,
      [e.target.name]: e.target.value
    } 
    )
  }

  console.log (value)

  return (
    <div>
      <h1>Formularios</h1>
      <span>Nombre: </span>
      <input 
        type='text'
        name = 'nombre'
        value = {value.nombre}
        onChange={handleChange}
      />
      <span>Descripción</span>
      <textarea 
        name='texto'
        vale={value.texto}
        onChange={handleChange}
      />
    </div>
  )
}

export default App;
