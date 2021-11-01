// Clase para imprimir producto

import { Component } from 'react';
import Buttom from './Buttom'

const styles = {
    producto : {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        border: 'solid 1px #eee',
        boxShadow: '0 5px 5px rgb(0, 0, 0, 0,1)',
        width: '30%',
        padding: '10px 15px',
        margin: '2px 2px',
        borderRadius: '5px',
    },
    img: {
        width: '100%',
        objectFit: 'cover',
        // height: '300px',
    },
}

class Producto extends Component {
    render () {
        const { producto, agregarAlCarro } = this.props
        return (
            <div style={styles.producto}>
                <img style={styles.img} alt={producto.name} src = {producto.img} />
                <div>
                    <h3>{producto.name}</h3>
                    <p>{producto.price}</p>
                    <Buttom onClick={()=> agregarAlCarro(producto)}>
                        Agregar Al Carro
                    </Buttom>
                </div>
            </div>
        )
    }
}

export default Producto