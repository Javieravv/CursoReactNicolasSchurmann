import { createContext, useContext, useState } from 'react'

const Context = createContext({
  valor: false,
  toggle: () => {}
})

const Provider = ({children}) => {
  // Sacamos del useState valor y setValor y con ellos construimos
  // un objeto 
  const [valor, setValor] = useState(false)
  const value = {
    valor, 
    toggle: () => setValor(!valor),
  }
  return (
    <Context.Provider value={value}>
      {children}
    </Context.Provider>
  )
}

const Componente = () => {
  // En este componente cambiamos el valor de la variable valor.
  const { valor, toggle } = useContext (Context)
  return (
    <div>
      <label>{valor.toString()}</label>
      <br />
      <button onClick={toggle}>Toggle</button>
    </div>
  )
}

function App() {
  return (
    <div>
      <h1>Aprendiendo Context en ReactJs y Udemy</h1>
      <Provider>
         <Componente />
      </Provider>
    </div>
  );
}

export default App;
