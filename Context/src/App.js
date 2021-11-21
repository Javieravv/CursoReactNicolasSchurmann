import { createContext, Component, useContext } from 'react'

const Context1 = createContext('mi primer context')
const Context2 = createContext('mi segundo context')

const Provider = ({ children }) => {
  return (
    <Context1.Provider value="valor Context 1">
      <Context2.Provider value="valor Context2">
        {children}
      </Context2.Provider>
    </Context1.Provider>
  )
}

// Manera para acceder en múltiples contextos en conponentes basados en clases
class Componente extends Component {
  render() {
    return (
      <Context1.Consumer>
        {
          valor1 =>
            <Context2.Consumer>
              {valor2 => <div>{`${valor1} ${valor2}`}</div>}
            </Context2.Consumer>
        }
      </Context1.Consumer>
    )
  }
}

// Manera para usar múltiples contextos en componentes basados en funciones.
// se usa el hook de useContext
const Componente2 = () => {
  const valor1 = useContext(Context1)
  const valor2 = useContext(Context2)
  return (
    <div>{`${valor1} ${valor2}`}</div>
  )
}

const App = () => {
  return (
    <Provider>
      <Componente />
      <Componente2 />
    </Provider>
  )
}

export default App