// Componente de logo

import { Component } from 'react'

const styles = {
    logo: {
        fontWeight: '700',
        fontSize: '2rem',
    }
}

class Logo extends Component { 
    render () {
        return (
            <div style={styles.logo}>
                Shop Javv
            </div>
        )
    }
}

export default Logo