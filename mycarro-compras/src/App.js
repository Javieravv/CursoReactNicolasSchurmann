import { Component } from 'react'
import Productos from './components/Productos'
import Navbar from './components/Navbar'
import Layout from './components/Layout'
import Title from './components/Title'

class App extends Component {
  state = {
    productos: [
      {name: 'Tomate', price: 3500, img: '/productos/tomate.jpg'},
      {name: 'Arveja', price: 5000, img: '/productos/arveja.jpg'},
      {name: 'Limones', price: 6000, img: '/productos/limones.jpg'},
      {name: 'Portatil', price: 2500000, img: '/productos/portatil.jpg'},
      {name: 'All InOne', price: 3500000, img: '/productos/allioone.png'},
      {name: 'Aspiradora', price: 850000, img: '/productos/aspiradora.jpg'},
    ], 
    carro: [
      // {name: 'Tomate', price: 3500, img: '/productos/tomate.jpg', cantidad: 1},
    ],
    esCarroVisible : false,
  }

  agregarAlCarro = (producto) => {
    // lógica para cuando se quiera agregar un elemento al carro.
    // se sigue la misma estructura del arreglo de productos, solo que se le agrega un elemento cantidad.
    const { carro } = this.state
    if (carro.find(x => x.name === producto.name)) {
      const newCarro = carro.map (x => x.name === producto.name 
        ? ({
          ...x,
          cantidad: x.cantidad + 1
        })
        : x)
      return this.setState ( { carro: newCarro })
    }
  
    return this.setState ({
      carro: this.state.carro.concat({
        ...producto,
        cantidad: 1,
      })
    })
  }

  mostrarCarro = () => {
    if (!this.state.carro.length) {
      return
    }
     this.setState ( { esCarroVisible: !this.state.esCarroVisible})
  }

  render () {
    const { esCarroVisible } = this.state
    return (
      <div>
          <Navbar 
            carro={this.state.carro}
            esCarroVisible={esCarroVisible}
            mostrarCarro={this.mostrarCarro}
          />
          <Layout>
            <Title />
            <Productos 
              agregarAlCarro={this.agregarAlCarro}
              productos={this.state.productos}
            />
          </Layout>
      </div>
    )
  }
}

export default App;
