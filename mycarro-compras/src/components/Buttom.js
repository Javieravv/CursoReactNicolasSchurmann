// Componente de botón.

import { Component } from 'react'

const styles = {
    button: {
        backgroundColor: '#0A283E',
        color: '#fff',
        padding: '15px 20px',
        border: 'none',
        borderRadius: '10px',
        cursor: 'pointer',
    }
}

class Buttom extends Component {
    render () {
        return (
            <button style={styles.button} {...this.props}/> // pasa todas las propiedades
        )
    }
}

export default Buttom