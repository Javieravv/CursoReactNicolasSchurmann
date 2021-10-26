import logo from './logo.svg';
import './App.css';

export function Final() {
  return (
    <div className="finpagina">
      <h3>Esto es un pie de página</h3>
    </div>
  );
}

export function Inicio() {
  return (
    <div className="encabezado">
      <h1>
      Primera App en React
      </h1>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <h2>Estamos aprendiendo React</h2>
      <p>
      No ha sido fácil porque es difícil configurlo en Windows10.
      </p>
    </div>
  );
}

export default App;
