import { combineReducers } from 'redux'
import { makeFetchingReducer, makeSetReducer, reduceReducers, makeCrudReducer, makeActionCreator, makeAsyncTypes, asyncMac } from './utils'

const asyncTodos = makeAsyncTypes('todos')

const [setPending, setFulfilled, setError] = asyncMac(asyncTodos)
// aquí trabajamos los  action creator.
export const setComplete = makeActionCreator ('todo/complete', 'payload')
export const setFilter = makeActionCreator ('filter/set', 'payload')


export const fetchThunk = () => async dispatch => {
    dispatch(setPending())
    // para ejecutar y capturar errores se usa try 
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos')
        // transformamos a json lo que devuelve la API
        const data = await response.json()
        const todos = data.slice (0, 15)
        dispatch (setFulfilled(todos))
    } catch (e) {
        console.log ('Se presentó error...')
        dispatch (setError(e.message))
    }
}

// Manejamos los reducers de una manera diferente, creando
// reducers más pequeños dependiendo de lo que se interese hacer con el estado.

export const filterReducer = makeSetReducer (['filter/set'])

export const fetchingReducer = makeFetchingReducer (asyncTodos)

const fulfilledReducer = makeSetReducer(['todos/fulfilled'])
const crudReducer = makeCrudReducer(['todo/add', 'todo/complete'])

const todosReducer = reduceReducers(crudReducer, fulfilledReducer)

export const reducer = combineReducers ({
    todos: combineReducers ({
      entities: todosReducer,
      status: fetchingReducer, // este se puede reutilizar
    }),
    filter: filterReducer,
})
  
export const selectTodos = state => {
    const  {todos: { entities }, filter} = state
    if (filter === 'complete') {
      return entities.filter (todo => todo.completed)
    }
    if (filter === 'incomplete') {
      return entities.filter (todo => !todo.completed)
    }
    return entities
  }
  
export const selectStatus = state => state.todos.status 
