// uso de los hooks
import { Component, useState, useEffect } from 'react'

const useContador = (inicial) => {
  const [ contador, setContador] = useState (inicial)
  const incrementar = () => {
    setContador (contador + 1)
  }
  return [contador, incrementar]
}

// const Interval = ( { contador }) => {
//   useEffect ( () => {
//     const i = setInterval ( () => console.log (contador), 1000)
//     // Se desuscribe del useEffect devovliendo una función que en este caso
//     // borrar el intervalo
//     return () => clearInterval (i)
//   }, [contador])
//   return (
//     <h3>Intervalo---</h3>
//   )
// }
class Interval extends Component {
  intervalo = ''
  componentDidMount () {
    this.intervalo = setInterval ( () => console.log (this.props.contador), 1000)
  }

  componentWillUnmount () {
    clearInterval (this.intervalo)
  }

  render () {
    return (
      <h3>Intervalo en calses</h3>
    )
  }
}

 const App = () => {
   const [contador, incrementar] = useContador (0)

   // cuando se pasa un arreglo vacío se le dice que todo lo del hook no tiene
   // dependencia y se ejecuta solo una vez
   // Elñ efecto se ejecuta cada vez que cambia el valor del contador
   useEffect (  () => {
     document.title = contador
   }, [contador])

   return (
     <div>
       <h2>
         Contador: {contador}
      </h2>
      <br></br>
      <button onClick={incrementar}>Incrementar</button>
      <Interval contador = {contador}/>
     </div>
   )
 }

export default App;
