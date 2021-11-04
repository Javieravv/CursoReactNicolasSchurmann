// hook personalizado del formulario

import { useState } from 'react'

const useFormulario = (inicial) => {
    const [formulario, setFormulario] = useState (inicial)
    
    const handleChange = (e) => {
      setFormulario ( {
        ...formulario,
        [e.target.name]: e.target.value
        })
    }

    const resetFormulario = () => {
      // seteamos el formulario con el objeto inicial que tiene propiedades vacías.
      setFormulario (inicial)
    }

    return [formulario, handleChange, resetFormulario]
}

export default useFormulario