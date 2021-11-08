import './css/header.css'
import './css/contents.css'
import { Formik, Form, Field } from 'formik'
import { useState } from 'react'

const App = () => {
  const [photos, setPhotos] = useState([])
  const [listphotos, setListphotos] = useState([])
  const open = url => window.open(url)

  console.log ('Lista de Fotos', {listphotos})
  return (
    <div>
        <header>
          <Formik 
            initialValues={
              {
                search: '',
                listSearch: '',
              }
            }
            onSubmit={async values=> {
              // llamar a la API de unsplash
              const response = await fetch(`https://api.unsplash.com/search/photos?per_page=25&query=${values.search}`,
              {
                headers: { 
                  'Authorization': 'Client-ID Z0ms5G0y5BEtPsO6a21GIyzYX4PaBp8n8_0OnHXporM'
                }
              })
              const data = await response.json()
              setPhotos(data.results)
              setListphotos (listphotos.concat(values.search))
            }}
          >
            <Form className='formulario'>
              <label>Buscar imagen: </label>
              <Field name='search' />
              <Field 
                name='listSearch' 
                as="select" 
              >
                <option value='' >Seleccione</option>
                {listphotos.map (list => 
                  <option value='${list}' >{list}</option>)}
              </Field>
            </Form>
          </Formik>
        </header>
        <div className="container">
            <div className="center">
                {photos.map (photo => 
                  <article key={photo.id} onClick={() => open(photo.links.html)}>
                    <img src={photo.urls.regular} />
                    <p>{[photo.description, photo.alt_description].join(' - ')}</p>
                  </article>)}
            </div>
        </div>
        <footer>
           <h3>Aplicación realizada para practicar el uso de React Js</h3>
        </footer>
    </div>
  );
}

export default App;
