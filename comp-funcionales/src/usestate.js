// uso de los hooks
import { useState } from 'react'

// El mismo componente, pero basado en clases.

// class App extends Component {
//   state = { contador : 0 }

//   incrementar = () => {
//     this.setState ( {contador: this.state.contador + 1} )
//   }

//   decrementar = () => {
//     this.setState ( {contador: this.state.contador - 1} )
//   }


//   render () {
//     return (
//       <div>
//         <h1>Contador: {this.state.contador}</h1>
//         <br></br>
//         <button onClick={this.incrementar} >Incrementar</button>
//         <button onClick={this.decrementar} >Decrementar</button>
//       </div>
//     )
//   }
// }

// creamos un hook personalizado, que debe empecar por hook

const useContador = (inicial) => {
  const [ contador, setContador] = useState (inicial)
  const incrementar = () => {
    setContador (contador + 1)
  }

  // const decrementar = () => {
  //   setContador (contador - 1)
  // }

  return [contador, incrementar]

}


 const App = () => {
   const [contador, incrementar] = useContador (0)
   return (
     <div>
       <h2>
         Contador: {contador}
         <br></br>
         <button onClick={incrementar}>Incrementar</button>
        </h2>
     </div>
   )
 }

export default App;
