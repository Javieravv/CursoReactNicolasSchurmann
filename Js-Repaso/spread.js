// Manejo de spread operator

// const fnSuma = (a, b, c) => a + b + c

// console.log (fnSuma (5,10,15))

// const arreglo = [12, 14, 16, 18]
// const arreglo1 = [4,5,6,7]

// console.log (fnSuma (arreglo[0], arreglo[1], arreglo [2]))
// console.log (fnSuma (...arreglo))
// console.log (fnSuma(0, ...arreglo))

// // para unir arreglos
// const arreglo3 = arreglo.concat(arreglo1)
// console.log (arreglo3)

// // Aquí usamos spread operator

// const arreglo4 = [...arreglo, ...arreglo1, ...arreglo3]
// console.log (arreglo4)
// const arreglo5 = [...arreglo, 100, 2000, ...arreglo1, 800, ...arreglo3]
// console.log (arreglo5)

// Para los objetos también funciona.

const objeto1 = {a: 10, b : 15}
const objeto2 = {b: 20, c : 25}

console.log (objeto1)
const objeto3 = { ...objeto1, ...objeto2}
console.log (objeto3)

const objeto5 = {
    ...objeto1,
    lugar: 'casa',
    estado: 'casado',
    vendido: false
}

console.log (objeto5)
