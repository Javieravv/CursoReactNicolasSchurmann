// Uso de key al imprimir listas.

import Boton from './Boton'


const App = () => {
  const ciudades = [
    'Bogotá',
    'Cali',
    'Medellín',
    'Barranquilla',
    'Ramiriquí',
    'Manizales'
  ]

  return (
    <div>
      <h1 onClick={(e) => console.log('Click al título', e)}>Listado de Ciudades</h1>
      <h2>Imprimimos listado de ciudades</h2>
      {ciudades.map((ciudad, i) => <h3 key={i}>{i+1}. {ciudad}</h3>)}

      <Boton onClick={()=> console.log('Clickeado')}>Perfecto</Boton>
    </div>
  )
}

export default App