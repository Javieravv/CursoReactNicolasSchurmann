import { Formik, Form, Field, ErrorMessage } from 'formik'
import TextInput from './components/TextInput'
import CheckBox from './components/CheckBox'
import Select from './components/Select'
import Radio from './components/Radio'


const validate = (values) => {
  const errors = {}
  // para validar el campo name
  if (!values.name) {
    errors.name='Nombre Requerido'
  } else if (values.name.length < 5)  {
      errors.name='El nombre es muy corto'
  }

  // para validar el campo LASTname
  if (!values.lastname) {
    errors.lastname='Apellido Requerido'
  } else if (values.lastname.length < 5)  {
      errors.lastname='El apellido es muy corto'
  }

  // validar campo profesión
  if (!values.profesion) {
    errors.profesion='Profesión Requerida'
  }

 return errors
}

function App() {
  
  return (
    <Formik
      initialValues={{
        name: '',
        lastname: '',
        email: '',
        description: '',
        city: '',
        accept: false,
        profesion: ''
      }}
      validate={validate}
      onSubmit={values => console.log (values)}
    >
        <Form>
          <TextInput name='name' label='Nombre: ' />
          <br />
          <TextInput name='lastname' label='Apellido: ' />
          <br />
          <TextInput name='email' label='Correo Electrónico: ' />
          <br />
          <label>Descripción: </label>
          <Field name="description" as="textarea" />
          <ErrorMessage name="description"/>
          <br />
          <Select label='Ciudad de Origen' name='city'>
              <option value=''>Seleccione Ciudad</option>
              <option value='miraflores'>Miraflores</option>
              <option value='bogota'>Bogotá</option>
              <option value='Ramiriqui'>Ramiriquí</option>
              <option value='tunja'>Tunja</option>
              <option value='medellin'>Medellín</option>
          </Select>
          <br />
          <CheckBox name='accept' >
            Aceptar términos y condiciones
          </CheckBox>
          <br />
          <Radio name='profesion' value='abogado' label='Abogado' />
          <Radio name='profesion' value='estudiante' label='Estudiante' />
          <Radio name='profesion' value='ingeniero' label='Ingeniero' />
          <Radio name='profesion' value='medico' label='Médico' />
          <ErrorMessage name='profesion' />
          <button type='submit'>Enviar formulario</button>
        </Form>
    </Formik>
  )
}

export default App;
