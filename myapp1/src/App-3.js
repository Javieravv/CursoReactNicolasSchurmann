import './App.css';

const estiloLi = {
  backgroundColor: "#456",
  color: "#fff",
  padding: '10px 15px',
  margin: '10px 15px',
}

const estiloLi1 = (bgc = "#333") => ({
  backgroundColor: bgc,
  color: "#fff",
  padding: '10px 15px',
  margin: '10px 15px',  
})

const estiloLi2 = {
  boxShadow: '0 5px 3px rgba(0, 0, 0, 0.6)'
}

function Li({ children, propiedad }) {
  return (
    <li style={{...estiloLi2, ...estiloLi1("#546")}} className="clase-li">El estudiante es {children} y su propiedad es {propiedad}</li>
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