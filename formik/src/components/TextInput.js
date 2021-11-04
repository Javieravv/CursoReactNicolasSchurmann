// componente personalizado
// Recibe este componente un name, que es obligatorio, y label

import { useField } from 'formik'

const TextInput = ( { label, ...props}) => {
    const [field, meta] = useField(props)
    return (
        <div>
            <label>{label}</label>
            <input {...field } {...props}  />
            {meta.touched && meta.error 
                ? <div>{meta.error}</div>
                : null 
            }
        </div>
    )
}

export default TextInput