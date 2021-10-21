// Ejemplos de resta

// const rest = (a1, b1, ...argumentos) => {
//     console.log (a1, b1)
//     console.log (argumentos)
// }

// console.log (rest (1, 5, 6, 8, 10, 12, 14))

// const objeto = {
//     a: 1,
//     b: 2,
//     c: 3,
//     d: 4
// }

// console.log (objeto)

// // Usamos object distractoring
// const { b, c, ...restobj  } = objeto

// console.log (b, c, restobj)

// // Con arreglos

// arreglo1 = [2, 4, 6, 8, 10, 12]

// const [x, y, z, ...z1] = arreglo1

// console.log (x, y, z, z1)

const useState = () => ['valor', () => {}]

console.log (useState)
console.log (useState())

const [valor, setValor] = useState()

console.log (valor, setValor)
console.log (valor, setValor())
