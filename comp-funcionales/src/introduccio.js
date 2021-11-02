
// Primer componente, sacando las propiedades directamente de los argumentos
// Es la manera recomendada.
function Nombre1 ( { nom, ape }) {
    return (
      <div>
        <h1>Nombres Completos</h1>
        <h3>{nom} {ape}</h3>
      </div>
    )
  }
  
  // Segundo ejemplo. Sacando las propiedades como un distractoring
  const Nombre2 = (propiedades) => {
    console.log (propiedades)
    const { nom, ape } = propiedades
    return (
      <div>
        <h1>Nombres Completos 1</h1>
        <h3>{nom} {ape}</h3>
      </div>
    )
  }
  
  const App = () => {
    return (
      <div>
        <Nombre1 nom={'Javier Armando'} ape={'Vargas Vega'}/>
        <Nombre1 nom={'Juan Sebastian'} ape={'Vargas Romero'}/>
        <Nombre2 nom={'Adriana Marcela'} ape={'Romero Hernández'}/>
        <Nombre2 nom={'Laura Mariana'} ape={'Vargas Romero'}/>
      </div>
    )
  }
  
  export default App;
  