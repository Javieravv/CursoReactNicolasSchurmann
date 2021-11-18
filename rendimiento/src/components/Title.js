import { memo } from 'react'

// la propiedad children es un string y no un arreglo, por lo que no 
// cambia

const Title = ({ children }) => {
  console.log('rendering title')
  return (
    <h1>
      {children}
    </h1>
  )
}

export default memo (Title)
