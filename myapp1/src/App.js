// Componentes basados en clase.

import { Component  } from 'react'

class Input extends Component {
  // state = { valor: ''}

  // // Esto funciona como una propiedad, pero que es una arrow function
  // hadleChange = (value) => {
  //   this.setState ( { valor: value })
  // }

  render () {
    return (
      <input 
        value={this.props.value}
        onChange={this.props.onChange}
      />
    )
  }

}


class App extends Component {
  state = { 
    nombre: '',
    apellido: '',
  }

  updateValues = (prop, value) => {
    // Uso de propiedades dinámicas, con los paréntesis angulares.
    this.setState ({ [prop]: value } )
  }

  render() {
    return (
      <div>
        <h1>Nombre Completo:</h1>
        <h2>{`${this.state.nombre} ${this.state.apellido}`}</h2>
        <Input
          value={this.state.nombre}
          onChange={e => this.updateValues('nombre', e.target.value)}
        />
        <Input
        value={this.state.apellido}
        onChange={e => this.updateValues('apellido', e.target.value)}
        />
      </div>
    )
  }
}

export default App