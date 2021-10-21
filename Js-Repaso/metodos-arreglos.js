const arreglo = [0, 1, 200, 3, 4, 5, 8, 9, -8, 15]

// const filtro = arreglo.filter (el => el > 5)
// const filtro1 = arreglo.filter (x => x <= 5)

// // Usando el índice, que recibe la función filte3r
// const filtro2 = arreglo.filter ((el, i) => {
//     // console.log (i) // imprime el índice
//     return el > 5
// })


// console.log (filtro)
// console.log (filtro1)
// console.log (filtro2)

// map

// const mapeado = arreglo.map ((el) => el * 2)
// const mapeado1 = arreglo.map ((el) => `<h1>${el}</h1>`)
// const mapeado2 = arreglo.map ((el) => el * 2).map ((el) => `<h1>${el}</h1>`)
// console.log (arreglo)
// console.log (mapeado)
// console.log (mapeado1)
// console.log (mapeado2)

const usuarios = [
     {id : 1, name: "Adriana"},
     {id : 2, name: "Mariana"},
     {id : 3, name: "Sebastián"},
     {id : 4, name: "Javier"},
]

// const mapUsuarios = usuarios.map ( (user) => `<h2>${user.id} - ${user.name}</h2>`)
// console.log (mapUsuarios)

// método reduce
const getMax = (a, b) => Math.max (a, b)

const resultado = arreglo.reduce ( (acc, el) => acc + el, 0)
const maximo = arreglo.reduce (getMax) // otra forma.
console.log (resultado)
console.log (maximo)

const listUsers = usuarios.reduce ((acc, el) => `${acc === '' ? '': `${acc}, `}${el.name}`, '')
console.log (listUsers)

// uso de reduce para filtar y map al tiempo

const usersEspeciales = usuarios.reduce ((acc, el) => {
    if (el.id <= 2) {
        return acc
    }
    return acc.concat(el)
}, [])

console.log (usersEspeciales)
