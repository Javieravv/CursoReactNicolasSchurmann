import './App.css'
import { useState } from 'react'
import Card from './components/Card'
import Container from './components/Container'
import UserForm from './components/UserForm'

function App() {
  // Creamos el estado inicial
  const [usuarios, setUsuarios] = useState([])

  const submit = usuario => {
    setUsuarios ([
      ...usuarios,
      usuario,
    ])
    // seteamos el formulario con el valor inicial
    // resetFormulario()
  }

  console.log (usuarios)

  return (  
    <div style={{marginTop: '12%'}}>
        <Container>
            <Card>
              <div className="containerform">
                  <h2>Usuarios</h2>
                  <UserForm submit={submit} />
              </div>
            </Card>
            <Card>
              <ul className="listausuario">
                  {usuarios.map ( usuario => 
                    <li key={usuario.name} className='filausuario'>
                        <span>
                            {`${usuario.name} - ${usuario.lastname} - ${usuario.email}`}
                        </span>
                    </li>  
                    )}
                  </ul>
            </Card>
        </Container>
    </div>
  )
}

export default App;
