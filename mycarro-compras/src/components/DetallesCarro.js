// Componente para mostrar los productos que hay en el carrito de compras

import { Component } from 'react'

const styles = {
    detallesCarro : {
        backgroundColor: '#fff',
        position: 'absolute',
        marginTop: 30,
        boxShadow: '1px 5px 5px rgb(0,0,0,0.3)',
        borderRadius: '5px',
        width:'300px',
        right: 10,
    },
    ul : {
        margin: 0,
        padding: 0,
    }, 
    producto: {
        listStyle: 'none',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '25px 20px',
        borderBottom: 'solid 1px #aaa',
    },
    totalCompra : {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        padding: '0 20px',
    }
}

class DetallesCarro extends Component {
    render () {
        const { carro, totalCompra } = this.props
        // console.log(totalCompra)
        return (
            <div style={styles.detallesCarro}>
                <ul style={styles.ul}>
                    {carro.map (x => 
                        <li key={x.name} style={styles.producto}>
                            <img alt={x.name} src={x.img} width='50' height='32'/>
                            {x.name}
                            <span>{x.cantidad}</span>
                        </li>
                    )}
                </ul>
                <div style={styles.totalCompra} >
                    <h3>Total compra:</h3>
                    <p>{totalCompra}</p>
                </div>
            </div>
        )
    }
}

export default DetallesCarro