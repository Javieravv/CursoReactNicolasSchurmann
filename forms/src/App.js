// Otra forma de manejar formularios.
// No necesariamente debe ir la etiqueta de form.

import { useState } from 'react'


const  App = () => {
  // value recibe un objeto.
  const [value, setValue] = useState({ 
    nombre: 'Nombre', 
    texto : 'Coloca tu descripción', 
    select: 'Seleccione', 
    check: false, 
    profesion: 'abogado'
  })

  // Como esta función sirve para varios campos, se debe saber cuál campo se está modificando.

  // const handleChange = (e) => {
  const handleChange = ( {target} ) => {
    // Se debe generar una copia del estado, para no perder los demás 
    // campos.
    setValue( {
      ...value,
      [target.name]: target.type === 'checkbox' 
        ? target.checked 
        : target.value
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
        value={value.texto}
        onChange={handleChange}
      />
      <select 
        value={value.select} 
        name='select' 
        onChange={handleChange} 
      >
        <option value=''>Seleccione</option>
        <option value='Bogotá'>Bogotá</option>
        <option value='Barranquilla'>Barranquilla</option>
        <option value='Miraflores'>Miraflores</option>
        <option value='Ramiriquí'>Ramiriquí</option>
      </select>

      <input 
        type='checkbox'
        name='check'
        onChange={handleChange}
        checked={value.check}
      />

      <div>
        <label>Profesión</label>
        <input 
          onChange={handleChange} 
          type='radio' 
          value='medico' 
          name='profesion' 
          checked={value.profesion === 'medico'}
        />Médico
        <input 
          onChange={handleChange} 
          type='radio' 
          value='abogado' 
          name='profesion' 
          checked={value.profesion === 'abogado'}
        />Abogado
        <input 
          onChange={handleChange} 
          type='radio' 
          value='ingeniero' 
          name='profesion' 
          checked={value.profesion === 'ingeniero'}
        />Ingeniero 
        <input 
          onChange={handleChange} 
          type='radio' 
          value='comerciante' 
          name='profesion'
          checked={value.profesion === 'comerciante'}
        />Comerciante 
      </div>
    </div>
  )
}

export default App;
