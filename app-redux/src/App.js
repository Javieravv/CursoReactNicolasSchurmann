import {  useState } from 'react'
import {  useDispatch, useSelector } from 'react-redux'
import { setFilter,  setComplete, fetchThunk, selectTodos, selectStatus } from './features/todos'

const TodoItem = ( {todo}) => {
  const dispatch = useDispatch()
  return (
    <li
      style={{textDecoration: todo.completed ? 'line-through' : 'none'}}
      onClick = {() => dispatch (setComplete(todo))}
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
      <button onClick={() => dispatch(setFilter('all'))} >Mostar todas las tareas</button>
      <button onClick={() => dispatch(setFilter('complete'))} >Tareas completas</button>
      <button onClick={() => dispatch(setFilter('incomplete')) } >Tareas incompletas</button>
      <button onClick={() => dispatch(fetchThunk())} >Fetch</button>
      <h3>Lista de Tareas-</h3>
      <ul>
         {todos.map(todo => <TodoItem key={todo.id} todo={todo} />)}
      </ul>

    </div>
  );
}

export default App;
