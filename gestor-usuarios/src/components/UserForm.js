// Componente de formulario, para optimizar
import Input from './Input'
import Button from './Button'
import useFormulario from '../hooks/useFormulario'

const UserForm = ({ submit }) => {
    const [formulario, handleChange, resetFormulario] = useFormulario( { 
        name: '', 
        lastname: '',
        email: ''
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        submit (formulario)
        resetFormulario()
    }

    return (
        <form onSubmit={handleSubmit} >
            <Input 
                label='Nombre: '
                name='name'
                value={formulario.name} 
                onChange={handleChange}
                placeholder='Nombres'
            />
            <Input 
                label='Apellido: '
                name='lastname'
                value={formulario.lastname} 
                onChange={handleChange}
                placeholder='Apellidos'
            />
            <Input 
                label='Correo Electrónico: '
                name='email'
                value={formulario.email} 
                onChange={handleChange}
                placeholder='Correo Electrónico'
            />
            <Button>
                Enviar
            </Button>
        </form>  
    )
}

export default UserForm