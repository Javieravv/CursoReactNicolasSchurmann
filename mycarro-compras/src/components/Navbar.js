// Componente barra de navegación

import { Component } from 'react'
import Logo from './Logo'
import Carro from './Carro'

const styles = {
    navbar : {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        height: '80px',
        justifyContent: 'space-between',
        position: 'relative',
        width: '95%',
        margin: '0 auto',
    },
    container: {
        // position: 'relative',
        // display: 'block',
        position: 'fixed',
        width: '100%',
        backgroundColor: '#fff',
        boxShadow: '0 2px 3px rgb(0, 0, 0, 0.1)',
    }
}

class Navbar extends Component {
    render () {
        const { carro, esCarroVisible, mostrarCarro } = this.props
        return (
            <div style={styles.container}>
                <nav style={styles.navbar}>
                    <Logo />
                    <Carro 
                        carro={carro}
                        esCarroVisible={esCarroVisible}
                        mostrarCarro={mostrarCarro}
                    />
                </nav>
            </div>
        )
    }
}

export default Navbar

