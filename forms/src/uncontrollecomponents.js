
const  App = () => {
    // Se recibe un evento y con él se puede obtener acceso a los elementos
    // del formulario.
    const submit = (e) => {
      e.preventDefault()
      const data = Object.fromEntries(Array.from (new FormData (e.target)))
      console.log (data)
    }
  
    return (
      <div>
        <h1>Formularios</h1>
        <form onSubmit={submit}>
          <div>
            <span>Nombres y apellidos</span>
            <input name='nombres' />
            <span>Nombres y apellidos</span>
          </div>
          <span>Dirección</span>
          <input name='direccion' />
          <input type='submit' value='Enviar Datos' />
        </form>
      </div>
    )
  }
  
  export default App;
  