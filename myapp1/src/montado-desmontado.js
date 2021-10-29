// Componentes basados en clase.

import { Component  } from 'react'

class Boton extends Component {
  state = {}
  constructor (props) {
    // siempre llamamos la palabra super
    // porque reemplazamos el constructor con nuetro propio constructor
    super(props)
    this.propiedad1 = 5
    console.log('Constructor', props)
  }

  // montamos el componente
  // Se usa para evaluar algo del DOM para mostrar algo, o usar un llamado ajax 
  // o llamar a una api.
  componentDidMount () {
    console.log ('Component Did Mount')
  }

  componentDidUpdate (prevProps, prevState) {
    console.log('Component Did Update', prevProps, prevState)
  }

  componentWillUnmount () {
    console.log ('Desmontando Componente', this.props, this.state)
  }

  render () {
    console.log('Render del botón....')
    return (
      <button onClick={() => this.setState ({ propiedad: 11})}>
        Enviar...
      </button>
    )
  }
}

class App extends Component {
  state = { 
    valor: 1
  }
  render() {
    console.log (this.state)
    return (
      <div>
        <h2>Componente basado en clase</h2>
        <p>Este es un componente basado en clases</p>
        {this.state.valor === 1
          ? <Boton estadoInicial = 'feliz'/>
          : null}
        <button onClick = {() => this.setState({ valor : 32}) }>Sumar el valor</button>
      </div>
    )
  }
}

export default App