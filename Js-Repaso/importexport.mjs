// Maneo de export e import

const nombresPersonas = ['Maria', 'Pedro', 'Juan','Laura','Adriana','Javier']

export const apellidosPersonas = ['Vargas', 'Romero', 'Cárdenas', 'Soler', 'Rodríguez', 'Quintero']

export const apodosPersonas = ['Gordo', 'Feo', 'Lalo', 'El niño']


//module.exports nombresPersonas

// module.exports = {
//     nombresPersonas,
//     apellidosPersonas
// }
// export { apellidosPersonas, apodosPersonas }

export const fnOperacion = (n1 = 1, n2= 1, tipo='suma') => {
    switch (tipo) {
        case 'suma': 
            return `El valor de la suma de ${n1} + ${n2} es ${n1+n2}`
        default:
            return `La operación dada es ${tipo} y no se ha implementado`
    }
}

export default nombresPersonas