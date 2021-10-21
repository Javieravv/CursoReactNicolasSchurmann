// Maneo de fetch.js

// Esta api devuelve un listado de usarios.
const url = 'https://jsonplaceholder.typicode.com/users'

// fetch (url, {
//     method: 'POST', // GET, DELETE, POST, PUT, PATCH, Y HAY MAS
//     headers: {
//         'Content-Type': 'application/json',
//         'Authorization': 'Bearer tokenauthorization'
//     },
//     body: JSON.stringify({
//         name:'Javier Armando1',
//         website: 'www.javv.com'
//     })
// })
//     .then ( (response) => response.json() )
//     .then (data => console.log (data))

const fnFetch = async () => {
    const response = await fetch (url, {
        method: 'POST', // GET, DELETE, POST, PUT, PATCH, Y HAY MAS
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer tokenauthorization'
        },
        body: JSON.stringify({
            name:'Javier Armando1',
            website: 'www.javv.com'
        })
    })
    const data = await response.json()
    console.log (data)
}

fnFetch()