import { createContext, useContext, useState, memo, useCallback } from 'react'

const Context = createContext()

const ContadorProvider = ({children}) => {
  const [contador, setContador] = useState(0)
  const incrementar = useCallback(() => setContador(x => x + 1), [])
  const decrementar = useCallback(() => setContador(x => x - 1), [])

  return (
    <Context.Provider value={{contador, incrementar, decrementar}}>
      {children}
    </Context.Provider>
  )
}

const Incrementar = memo(() => {
  console.log('Incrementar')
  const { incrementar } = useContext (Context)
  return (
    <button onClick={incrementar}>Incrementar</button>
  )
})

const Decrementar = memo(() => {
  console.log('Decrementar')
  const { decrementar } = useContext (Context)
  return (
    <button onClick={decrementar}>Decrementar</button>
  )
})

const Label = () => {
  console.log('Label')
  const {  contador } = useContext (Context)
  return (
    <h1>{contador}</h1>
  )
}

function App() {
  return (
    <div>
      <h1>Aprendiendo Context en ReactJs y Udemy</h1>
      <ContadorProvider>
          <Label />
          <Incrementar />
          <Decrementar />
      </ContadorProvider>
    </div>
  );
}

export default App;
