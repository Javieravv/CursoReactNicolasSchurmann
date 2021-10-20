// Importamos un archvo

// const nombres = require('./importexport')

import nombres, { apellidosPersonas, apodosPersonas, fnOperacion } from './importexport.mjs'

console.log(nombres)
console.log (apellidosPersonas)
console.log(apodosPersonas)
console.log(fnOperacion(4, 6, 'suma'))
console.log(fnOperacion(4, 6, 'resta'))
