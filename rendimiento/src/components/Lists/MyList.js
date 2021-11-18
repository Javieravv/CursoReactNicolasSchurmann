// Prevenir que el componente Li no se ejecute si las propiedades no han cambiado. Deberá devolver el mismo componente.

import { isEqual } from 'lodash'
import { memo } from 'react'


// const Li = memo (({ fullname }) => {
//   console.log(`renderizando ${fullname}`)
//   return (
//     <li>
//       {fullname}
//     </li>
//   )
// })

const Li = memo (({ children }) => {
  console.log(`Renderizando ${children} `)
  return (
    <li>
      {children}
    </li>
  )
}, isEqual)

// const MLi = memo(Li)


// const MyList = ({ data }) => {
//   console.log('renderizando lista')
//   return (
//     <ul>
//       {data.map(x =>
//         <Li
//           key={x.name + x.lastname}
//           fullname={`${x.name} ${x.lastname}`}
//         />
//       )}
//     </ul>
//   )
// }

const MyList = ({ data }) => {
  console.log('renderizando lista')
  return (
    <ul>
      {data.map(x =>
        <Li
          key={x.name + x.lastname}>
          {x.name} {x.lastname}
        </Li>
      )}
    </ul>
  )
}

// Así también puede usarse memo, para no tener que colocarlo
// en el componente.

export default memo (MyList)
