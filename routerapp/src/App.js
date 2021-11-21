import { Routes, Route, Link, useRouteMatch } from 'react-router-dom'

const Portafolio = () => {
  return (
    <div>
      <h1>Portafolio de servicios</h1>
      <p>lorem ipsum dolor sit amet, consectetur adip</p>
      <p>lorem ipsum dolor sit amet, consectetur adip</p>
      <p>lorem ipsum dolor sit amet, consectetur adip</p>
      <ul>
        <li>
          <Link to={'/portafolio/proyecto-1'}>Ir a Proyecto 1 </Link>
        </li>
        <li>
          <Link to={'/portafolio/proyecto-2'}>Ir a Proyecto 2 </Link>
        </li>
        <li>
            <Link to="/">Inicio</Link>
          </li>
      </ul>
      <section>
        <Routes>
          <Route path="proyecto-1" element = {<h1>Proyecto 1</h1>} />
          <Route path="proyecto-2" element = {<h1>Proyecto 2</h1>} />
          <Route path="/" element={<h1>Ruta Inicio</h1>} />
        </Routes>
      </section>
    </div>
  )
}

const Portafolio1 = () => {
  // const match = useRouteMatch()
  // console.log (match)
  return (
    <div>
      <h1>Portafolio de Prueba</h1>
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
            <Link to="/portafolio1">Portafolio1</Link>
          </li>
          <li>
            <Link to="/productos">Productos</Link>
          </li>
        </ul>
      </nav>
      <section>
        <Routes>
          <Route path="/" element={<h1>Ruta Inicio</h1>} />
          <Route path="/portafolio/*" element = {<Portafolio />} />
          <Route path="/portafolio1/" element = {<Portafolio1 />} />
          <Route path="/productos" element = {<Productos />} />
        </Routes>
      </section>
    </div>
  );
}

export default App;
