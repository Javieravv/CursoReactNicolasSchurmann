import { useFormik } from 'formik'

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

 return errors
}

function App() {
  const formik = useFormik (
    {
      initialValues: {
        name: '',
        lastname: '',
        email: '',
      },
      validate,
      onSubmit: values => console.log (values)
    }
  )

  return (
    <div className="App">
      <h1>Formik Library One</h1>
      <form onSubmit={formik.handleSubmit}>
        <label>Nombre</label>
        <input 
          type='text'
          {...formik.getFieldProps('name')}
          placeholder='Nombres'
        />
        {formik.touched.name && formik.errors.name 
          ? <div>{formik.errors.name} </div>
          : null
        }
        <br />
        <label>Apellido</label>
        <input 
          type='text'
          {...formik.getFieldProps('lastname')}
          placeholder='Apellidos'
        />
        {formik.touched.lastname && formik.errors.lastname 
          ? <div>{formik.errors.lastname} </div>
          : null
        }
        <br />
        <label>Email</label>
        <input 
          type='email'
          {...formik.getFieldProps('email')}
          placeholder='Email'
        />
        {formik.touched.email && formik.errors.email 
          ? <div>{formik.errors.email} </div>
          : null
        }
        <button type='submit'>Enviar formulario</button>
      </form>
    </div>
  )
}

export default App;
