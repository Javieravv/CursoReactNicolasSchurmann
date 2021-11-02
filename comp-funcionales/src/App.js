// Uso de useRef

import { useRef } from 'react'

const App = () => {
  const ref = useRef ()
  const inputRef = useRef ()

  const click = () => {
    ref.current.innerHTML = '<h2>Aprendiendo React</h2>'
  }

  const focus = () => {
    // Nos valemos de useRef para poderacceder al focus del input
    inputRef.current.focus()
  }

  return (
    <div>
      <div onClick={click} ref={ref}>
        Uso de useRef
      </div>
      <input ref = {inputRef}/>
      <button onClick={focus} >Focus Botón</button>
    </div>
    
  )
}

export default App;
