import Imagen from './components/Imagen'
import './App.css';


const  App = () => {
  const listImages = [
    {
      clasesFigure: "gallery__picture--g1",
      urlImg:"/img/image1.jpg", 
      alt:"Imagen de paisaje 1"
    },
    {
      clasesFigure: "gallery__picture--g2",
      urlImg:"/img/image2.jpg", 
      alt:"Imagen de paisaje 2"
    },
    {
      clasesFigure: "gallery__picture--g3",
      urlImg:"/img/image3.jpg", 
      alt:"Imagen de paisaje 3"
    },
    {
      clasesFigure: "gallery__picture--g4",
      urlImg:"/img/image4.jpg", 
      alt:"Imagen de paisaje 4"
    },
    {
      clasesFigure: "gallery__picture--g5",
      urlImg:"/img/image5.jpg", 
      alt:"Imagen de paisaje 5"
    },
    {
      clasesFigure: "gallery__picture--g6",
      urlImg:"/img/image6.jpg", 
      alt:"Imagen de paisaje 6"
    },
    {
      clasesFigure: "gallery__picture--g7",
      urlImg:"/img/image7.jpg", 
      alt:"Imagen de paisaje 7"
    },
    {
      clasesFigure: "gallery__picture--g8",
      urlImg:"/img/image8.jpg", 
      alt:"Imagen de paisaje 8"
    },
  ]
  console.log(listImages)
  return (
    <>
      <main className="main">
        <h1 className="title">Galería de Imágenes - React</h1>
        <section className="gallery">
          {listImages.map((imagen,ind) => 
            <Imagen 
              clasesFigure={`gallery__picture ${imagen.clasesFigure}`}
              claseImg="gallery__img"
              urlImg={imagen.urlImg}
              alt={imagen.alt}
              key={ind}
            />
          )}
        </section>
      </main>
      <footer>
          <h2>Ejercicios de Css basados en página de Youtube</h2>
          <p>Ejercicio inicialmente realizado en Html normal. Luego se pasó a React Js</p>
          <p>Noviembre de 2.011</p>
      </footer>
    </>
  );
}

export default App;
