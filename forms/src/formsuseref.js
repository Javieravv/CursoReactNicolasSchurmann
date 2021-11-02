// Otra forma de manejar formularios.
// No necesariamente debe ir la etiqueta de form.

import { useRef } from 'react'

const  App = () => {
  const inputRef = useRef()
  const fileRef = useRef()
  const submit = () => {
    const form = new FormData ()
    form.append('archivo', fileRef.current.files[0])
    form.append('campo', inputRef.current.value)
    console.log (form)

    // Ya esto se puede enviar a algún lado. Por ejemplo:

    fetch (
      'nombres',
      {
        method: 'POST',
        body: form
      }
    )
  }

  return (
    <div>
      <h1>Formularios</h1>
      <div>
        <span>Nombre: </span>
        <input  
          type='text' 
          name='nombre'  
          ref = {inputRef}
        />
      </div>
      <div>
        <span>Archivos: </span>
        <input 
          type='file' 
          ref={fileRef}
          name='archivos'  
        />
      </div>
      <input 
        type='submit' 
        value='Enviar Datos' 
        onClick={submit}  
      />
    </div>
  )
}

export default App;
