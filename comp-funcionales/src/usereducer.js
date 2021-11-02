// Uso de useReducer

import { useReducer, useState } from 'react'

const inicial = { contador: 0 }

const reducer = (state, action) => {
  console.log ('Estamos en el reducer...')
  switch (action.type) {
    case 'incrementar':
      return { contador: state.contador + 1 }
    case 'decrementar':
      return { contador: state.contador - 1 }
    case 'set':
      return { contador: action.payload }
    default:
      return state
  }
}

const App = () => {
  const [state, dispatch] = useReducer (reducer, inicial)
  // usamos el estado para guadar la propiedad valor  en el estado.
  const [valor, setValor] = useState (0)

  return (
    <div>
      <h1>Uso de useReducer...</h1>
      <input 
        value={valor} 
        onChange = {e => setValor(Number(e.target.value))}
      />

      <h2>Contador: {state.contador}</h2>
      <button onClick={() => dispatch ( { type: 'incrementar' } )} >Incrementar</button>
      <button onClick={() => dispatch ( { type: 'decrementar' } )} >Decrementar</button>
      <button onClick={() => dispatch ( { type: 'set', payload: valor } )} >Inicializar</button>
    </div>
  )
}

export default App;
