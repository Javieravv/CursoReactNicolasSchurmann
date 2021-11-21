import { Component, createContext } from 'react'

const Context = createContext ('Mi valor')

const Provider = ({children}) => {
  return (
    <Context.Provider value = 'Otro Valor'>
      {children}
    </Context.Provider>
  )
}

class Componente extends Component {
  static contextType = Context
  render () {
    console.log (this.context)
    return (
      <>
        <h1>Context en componentes basados en Clases</h1>
        <p>Aprendiendo el uso de Contexto en componentes basados en clases.</p>
      </>
    )
  }
}

// const App = () => {
//   return (
//     <Provider>
//       <Componente />
//     </Provider>
//   )
// }

const App = () => {
  return (
    <Provider>
      <Componente />
      <Context.Consumer>
        {valor => <div>{valor}</div>}
      </Context.Consumer>
    </Provider>
  )
}

export default App

