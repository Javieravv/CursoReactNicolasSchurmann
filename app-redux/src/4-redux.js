import {  useState } from 'react'
import {  useDispatch, useSelector } from 'react-redux'
import { combineReducers } from 'redux'

// const initialState = {
//   entities: [],
//   filter: 'all', // complete || incomplete
// }

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

export const todosReducer = ( state = [], action ) => {
  switch (action.type) {
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

// con esto simplifiamos los reducers, para volverlos más sencillos.
// Esta una forma y la otra es con combineReducers

// export const reducer = (state = initialState, action) =>{
//   return {
//     entities: todosReducer (state.entities, action),
//     filter: filterReducer (state.filter, action),
//   }
// }

export const reducer = combineReducers ({
  entities: todosReducer,
  filter: filterReducer,
})



// export const reducer = (state = initialState, action) => {
//   // Siempre se retorna una copia nueva del estado, cada vez que se actualice
//   // Ello es para prevenir potenciales errores silenciosos, para impedir la mutabilidad.
//   // Si no se retorna nueva copia la aplicación no se renderizará.
//   switch (action.type) {
//     case 'todo/add': {
//       return { 
//         ...state, //una copia del estado
//         entities: state.entities.concat({...action.payload})
//       }
//     }
//     case 'todo/complete': {
//       const newTodos = state.entities.map (todo => {
//         if (todo.id === action.payload.id) {
//           return {...todo, completed: !todo.completed}
//         }
//         return todo
//       })
//       return {
//         ...state, 
//         entities: newTodos
//       }
//     }
//     case 'filter/set': {
//       return { 
//         ...state,
//         filter: action.payload,
//       }
//     }
//   }
//   return state
// }

const selectTodos = state => {
  const  {entities, filter} = state
  if (filter === 'complete') {
    return entities.filter (todo => todo.completed)
  }
  if (filter === 'incomplete') {
    return entities.filter (todo => !todo.completed)
  }
  return entities
}

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
      <h3>Lista de Tareas-</h3>
      <ul>
         {todos.map(todo => <TodoItem key={todo.id} todo={todo} />)}
      </ul>

    </div>
  );
}

export default App;
