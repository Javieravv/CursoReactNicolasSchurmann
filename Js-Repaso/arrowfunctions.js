// Manejo de las arrow functions

function Fn (valor="Esta es mi primera función") {
    return valor
}

const f = Fn()

console.log (f)
console.log ("Estamos aprendiendo React.js")

// uso de las arrow functions
// Cómo se declaran

const arrowFn = () => {
    // Contenido de la función
    return "Esto es una arrow function"
}

const r1 = arrowFn()
console.log(r1)

// Tienen un retorno implícito

const fnImplicito = (num=16) => num
console.log(fnImplicito())
console.log(fnImplicito(36))

// Es similar a escribir:

const fnImplicito1 = (num = 15) => {
    return num
}

console.log (fnImplicito1())
