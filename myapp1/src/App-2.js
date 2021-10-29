import './App.css';

const nombres = ['Aleida', 'María', 'Mariana','Marcela', 'Ximena', 'Carolina', 'Vanessa']

const Li = ( {consecutivo, nombre}) => {
    console.log (consecutivo, nombre)
    return (
        <li key={consecutivo}>{consecutivo}. {nombre}</li>
    )
}

const ImprimirNombres = ({children}) => {
    //console.log(nombres)
    console.log(children)
    return (
        <div>
            <h3>NOMBRES DE LAS MUJERES</h3>
            <ul>
               {nombres.map((nom, ind) => {
                   return <Li consecutivo={ind} nombre={nom}></Li>
               })}
             </ul>
        </div>
    )
}


function App() {
  return (
    <div className="App">
      <h2>Estamos aprendiendo React Js</h2>
      <ImprimirNombres>Listado de Nombres</ImprimirNombres>
    </div>
  );
}

export default App;