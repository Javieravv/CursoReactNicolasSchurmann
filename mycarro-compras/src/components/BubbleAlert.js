// Componente de burbuja, para mostrar el total de productos comprados al lado del 
// carrito de comprados

import { Component } from 'react'

const styles = {
    bubbleAlert : {
        backgroundColor: '#e9725a',
        borderRadius: '15px',
        color: '#fff',
        padding: '2px 10px',
        fontSize: '0.9',
    }
}

class BubbleAlert extends Component {
    // Otenemos el número que mostremos en el span, dependiendo de si hay menos o más de 9 productos
    getNumber (n) {
        if (!n) { return ' '}
        return n >  9 ? '9+' : n
    }

    render () {
        const { value } = this.props
        return (
            <span style={styles.bubbleAlert}>
                {this.getNumber(value)}
            </span>
        )
    }
}

export default BubbleAlert