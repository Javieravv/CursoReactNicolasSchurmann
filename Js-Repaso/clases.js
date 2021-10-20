// Manejo de clases en Js
// ESto es una expresión de clase

// const Rectangulo = class R {

// }

// // También sirve

// const Circulo = class {

// }

// // Para declarar una clases

// class Ovalo {

// }

// // También se pude con la palabra reservada function

// function Cuadrado () {

// }


// const r = new Rectangulo()
// const c = new Circulo()
// const o = new Ovalo()
// const c1 = new Cuadrado()

// console.log (r, c, o, c1, Cuadrado)

class Persona {
    propiedad = "mi propiedad"
    #hambre = false
    static edadPersona = 18
    constructor(nombre="", apellido="", estado="Seguro", hambre = true) {
        this.nombre = nombre
        this.apellido = apellido
        this.estado = estado 
        this.#hambre = hambre
    }
    // Este es un método
    Presentar () {
        console.log (`Mis nombres son ${this.nombre} ${this.apellido} y estoy ${this.estado} y ${this.#hambre ? 'tengo hambre' : 'no tengo hambre'}`)
    }

    static Dormir () {
        console.log (`${this.edadPersona} Estoy durmiendo`)
    }
}

const P = new Persona("Javier Armando", "Vargas Vega", "Feliz")
P.Presentar()
// P.Dormir()
Persona.Dormir()
