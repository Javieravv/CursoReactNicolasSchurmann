import { Component } from 'react'
import Productos from './components/Productos'

class App extends Component {
  state = {
    productos: [
      {name: 'Tomate', price: 3500, img: '/productos/tomate.jpg'},
      {name: 'Arveja', price: 5000, img: '/productos/arveja.jpg'},
      {name: 'Limones', price: 6000, img: '/productos/limones.jpg'},
      {name: 'Portatil', price: 2500000, img: '/productos/portatil.jpg'},
      {name: 'All InOne', price: 3500000, img: '/productos/allioone.png'},
      {name: 'Aspiradora', price: 850000, img: '/productos/aspiradora.jpg'},
    ]
  }
  render () {
    return (
      <div>
          <Productos 
            agregarAlCarro={() =>console.log('Iniciando...')}
            productos={this.state.productos}
          />
      </div>
    )
  }
}

export default App;
