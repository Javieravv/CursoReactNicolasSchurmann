// Reutilizar componentes con estilo.

import Boton from './Boton'


const App = () => {
  return (
    <div>
      <h1 onClick={(e) => console.log('Click al título', e)}>Hola mundo. Estamos estudiando.</h1>
      <Boton onClick={()=> console.log('Clickeado')}>Enviar...</Boton>
      <Boton onClick={()=> console.log('Clickeado')}>Enviar otra vez...</Boton>
      <Boton onClick={()=> console.log('Clickeado')}>Re-Enviar...</Boton>
    </div>
  )
}

export default App