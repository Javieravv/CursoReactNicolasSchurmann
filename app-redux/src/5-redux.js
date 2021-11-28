import {  useState } from 'react'
import {  useDispatch, useSelector } from 'react-redux'
import { combineReducers } from 'redux'

// Creamos aquí un Middleware

export const asyncMiddleware = store => next => action => {
  // preguntamos si el objeto action es una función y si es así se le pasar
  // dispatch y getState 
  if (typeof action === 'function') {
    return action (store.dispatch, store.getState) // importante retornar esto
  }
  return next(action)
}

export const fetchThunk = () => async dispatch => {
  dispatch({type: 'todos/pending'})
  // para ejecutar y capturar errores se usa try 
  try {
    const response = await fetch('https://jsonplaceholder1.typicode.com/todos')
    // transformamos a json lo que devuelve la API
    const data = await response.json()
    const todos = data.slice (0, 15)
    dispatch ({type: 'todos/fulfilled', payload: todos})
  } catch (e) {
    console.log ('Se presentó error...')
    dispatch ( {type: 'todos/error', error: e.message})
  }
}

// Manejamos los reducers de una manera diferente, creando
// reducers más pequeños dependiendo de lo que se interese hacer con el estado.

export const filterReducer = (state = 'all', action) => {
  switch (action.type) {
    case 'filter/set': 
      return action.payload
    default:
      return state
  }
}

// Creamos el reducer para manejar los estados de loading.
const initialFetching = { loading: 'idle', error: null}
export const fetchingReducer = (state = initialFetching, action) => {
  switch (action.type) {
    case 'todos/pending': {
      return {...state, loading: 'pending'}
    }
    case 'todos/fulfilled': {
      return {...state, loading: 'succeded'} 
    }
    case 'todos/error': {
      console.log('Se ejecutó reducer de error...')
      return { error: action.error, loading: 'rejected' }
    }
    default: {
      return state
    }
  }
}

export const todosReducer = ( state = [], action ) => {
  switch (action.type) {
    case 'todos/fulfilled': {
      // reemplazar los todos existentes
      return action.payload
    }
    case 'todo/add': {
      return state.concat({...action.payload})
    }  
    case 'todo/complete': {
      const newTodos = state.map (todo => {
      if (todo.id === action.payload.id) {
        return {...todo, completed: !todo.completed}
      }
        return todo
      })
      return  newTodos
    }
    default: 
      return state
  }
}

export const reducer = combineReducers ({
  todos: combineReducers ({
    entities: todosReducer,
    status: fetchingReducer, // este se puede reutilizar
  }),
  filter: filterReducer,
})

const selectTodos = state => {
  const  {todos: { entities }, filter} = state
  if (filter === 'complete') {
    return entities.filter (todo => todo.completed)
  }
  if (filter === 'incomplete') {
    return entities.filter (todo => !todo.completed)
  }
  return entities
}

const selectStatus = state => state.todos.status 

const TodoItem = ( {todo}) => {
  const dispatch = useDispatch()
  return (
    <li
      style={{textDecoration: todo.completed ? 'line-through' : 'none'}}
      onClick = {() => dispatch ( {type: 'todo/complete', payload: todo})}
    >
      {todo.title}
    </li>
  )
}

function App() {
  // obtenemos el dispatch y el estado completo o partes del estado
  // para actualizar los todos es darle click a cualquier todo para marcarlo
  // como completado.
  const [value, setValue] = useState('')
  const dispatch = useDispatch()
  // const state = useSelector (x => x)
  const todos = useSelector (selectTodos)
  const status = useSelector (selectStatus)

  const submit = e => {
    e.preventDefault()
    if (!value.trim()) {
      return
    }
    const id = Math.random().toString(36)
    const todo = { title: value, completed: false, id}
    dispatch ( {type: 'todo/add', payload: todo} )
    setValue('')
  }

  if (status.loading === 'pending') {
    return <h3>Cargando...</h3>
  }
  if (status.loading === 'rejected') {
    console.log ('Aquí capturamos o mostramos el error')
    return <h3>{status.error}</h3>
  }
  return (
    <div>
      <h1>Ejercicio con Redux</h1>
      <h2>Aplicación de tareas</h2>
      <form onSubmit={submit}>
        <input value={value} onChange={e => setValue(e.target.value)} />
      </form>
      <br/>
      <button onClick={() => dispatch({type: 'filter/set', payload: 'all'})} >Mostar todas las tareas</button>
      <button onClick={() => dispatch({type: 'filter/set', payload: 'complete'})} >Tareas completas</button>
      <button onClick={() => dispatch({type: 'filter/set', payload: 'incomplete'}) } >Tareas incompletas</button>
      <button onClick={() => dispatch(fetchThunk())} >Fetch</button>
      <h3>Lista de Tareas-</h3>
      <ul>
         {todos.map(todo => <TodoItem key={todo.id} todo={todo} />)}
      </ul>

    </div>
  );
}

export default App;
