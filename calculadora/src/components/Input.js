// Componente Imagen
import styled from 'styled-components'
import { useField} from 'formik'

const Control = styled.div`
    margin-botton: 20px;
` 

const Label = styled.label`
    color: #000;
    display: block;
    margin-botton: 5px;
    font-weight: bold;
`
const MyInput = styled.input`
    outline: none;
    padding; 10px 20px;
    border: solid 2px #b1b3b5;
    border-radius: 6px;
    width: 100%;
    margin-botton: 5px;
    height: 40px;
    margin-top: 6px;
`

const ErrorMessage = styled.div`
    color: #f00;
`

const Input = ( {label, ...props} ) => {
    // usamos este hook para sacar las propieeades del objeto de field y pasárselas al componente
    // MyInput
    const [field, meta] = useField(props)
    return (
        <Control>
            <Label>{label}</Label>
            <MyInput {...field} {...props} />
            {meta.touched && meta.error 
            ? <ErrorMessage>{meta.error}</ErrorMessage>
            : null}
        </Control>
    )
}

export default Input