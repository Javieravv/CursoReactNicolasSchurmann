// Compoennte que tiene el carro de compras y su botón

import { Component } from 'react'
import BubbleAlert from './BubbleAlert'
import DetallesCarro from './DetallesCarro'

const styles = {
    carro : { 
        backgroundColor: '#359A2C',
        color: '#FFF',
        border: 'none',
        padding: '15px',
        borderRadius: '15px',
        cursor: 'pointer',
        minWidth: '100px',
    },
    bubble : {
        position: 'relative',
        left: 12,
        top: 20,
    },
}

class Carro extends Component {
    render () {
        const { carro, esCarroVisible, mostrarCarro } = this.props
        const cantidad = carro.reduce((acc, el) => acc + el.cantidad, 0)
        const totalCompra = carro.reduce((acc, el) => acc + el.price * el.cantidad, 0)
        console.log ('cantidad= ', cantidad, 'Total = ', totalCompra)
        return (
            <div>
                <span style={styles.bubble}>
                    {cantidad !== 0
                        ? <BubbleAlert value={cantidad}/>
                        : null
                    }
                </span>
                <button style={styles.carro} onClick={mostrarCarro}>
                    Carro
                </button>
                {esCarroVisible
                    ? <DetallesCarro carro={carro} totalCompra={totalCompra} />
                    : null
                }
            </div>
        )
    }
}

export default Carro