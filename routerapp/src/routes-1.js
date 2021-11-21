import { Routes, Route, Link } from 'react-router-dom'

const Portafolio = () => {
  return (
    <div>
      <h1>Portafolio de servicios</h1>
      <p>lorem ipsum dolor sit amet, consectetur adip</p>
      <p>lorem ipsum dolor sit amet, consectetur adip</p>
      <p>lorem ipsum dolor sit amet, consectetur adip</p>
    </div>
  )
}

const Productos = () => {
  return (
    <div>
      <h1>Productos ofrecidos</h1>
      <p>lorem ipsum dolor sit amet, consectetur adip</p>
      <p>lorem ipsum dolor sit amet, consectetur adip</p>
      <p>lorem ipsum dolor sit amet, consectetur adip</p>
      <p>lorem ipsum dolor sit amet, consectetur adip</p>
      <p>lorem ipsum dolor sit amet, consectetur adip</p>
    </div>
  )
}

function App() {
  return (
    <div>
      <h2>Primeros pasos con React Router-.</h2>
      <nav>
        <ul>
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/portafolio">Portafolio</Link>
          </li>
          <li>
            <Link to="/productos">Productos</Link>
          </li>
        </ul>
      </nav>
      <section>
        <Routes>
          <Route path="/" element={<h1>Ruta Inicio</h1>} />
          <Route path="/portafolio" element = {<Portafolio />} />
          <Route path="/productos" element = {<Productos />} />
        </Routes>
      </section>
    </div>
  );
}

export default App;
