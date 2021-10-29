// import './App.css';

import './main.css'

function Li({ children, propiedad }) {
  return (
    <li className="clase-li">El estudiante es {children} y su propiedad es {propiedad}</li>
  );
}

const  App = () => {
  const name = 'Javier Armando'
  const estudiantes = [
    'Javier Armando', 
    'José Octavio', 
    'María Fernanda', 
    'Alirio'
  ]
  return (
    <>
      <h1>Estudiantes de React</h1>
      <Li propiedad={1} otra={false}>{estudiantes[0]}</Li>
      <Li propiedad="2">{estudiantes[1]}</Li>
      <Li propiedad="3">{estudiantes[2]}</Li>
      <Li propiedad="4">{estudiantes[3]}</Li>
    </>
  )
}

export default App;