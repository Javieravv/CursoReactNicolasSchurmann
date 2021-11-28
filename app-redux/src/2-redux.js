import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import App from './App';
import reportWebVitals from './reportWebVitals';

// Creamos el primer estado.

const store = createStore ((state=0, action) => { // es un reducer
  // action es un objeto que recibe una propiedad type y un payload, que puede
  // ser cualquier objeto.
  switch (action.type) {
    case 'incrementar': {
      return state + action.payload
    }
    case 'decrementar': {
      return state - action.payload
    }
    case 'set': {
      return action.payload
    }
    default: {
      return state
    }
  }
})

// console.log ( {store} )
// console.log ( store.getState() )

// La propiedad de type siempre DEBER ESTAR.
// con payload pasamos más datos al reducer.
// Con payload actualizamos el estado.

console.log (store.getState())
store.dispatch ( {type: 'multiplicar', payload: 50})
console.log (store.getState())
store.dispatch ( {type: 'incrementar', payload: 50})
console.log (store.getState())
store.dispatch ( {type: 'decrementar', payload: 50})
console.log (store.getState())
store.dispatch ( {type: 'set', payload: 15})
console.log (store.getState())

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
