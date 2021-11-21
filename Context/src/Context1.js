import { createContext, useContext } from 'react'

// Creamos el contexto de la app
// El valor por defecto se usa cuando no se emplea un provider.
// El provider se emplea cuando queremos usar valores dinámicos.

const ContextDefault = createContext('Valor por defecto')
const Context2 = createContext('Valor por defecto 2')

const DefaultProvider = ( {children} ) => {
  return (
    <ContextDefault.Provider value={'Mi valor'}>
      {children}
    </ContextDefault.Provider>
  )
}

const Contenido = () => {
  const ctx  = useContext (ContextDefault) // context abreviado
  return (
    <div>
      {ctx}
    </div>
  )
}

const Contenido2 = () => {
  const ctx  = useContext (Context2) // context abreviado
  return (
    <div>
      {ctx}
    </div>
  )
}

function App() {
  return (
    <div>
      <h1>Aprendiendo Context en ReactJs y Udemy</h1>
      <DefaultProvider>
        <Contenido />
      </DefaultProvider>
      <Contenido />
      <Contenido2 />
    </div>
  );
}

export default App;
