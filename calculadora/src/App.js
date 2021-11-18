import { Formik, Form } from 'formik'
import { useState } from 'react'
import * as Yup from 'yup'
import Input from './components/Input'
import Button from './components/Button'
import Container from './components/Container'
import Section from './components/Section'
import Balance from './components/Balance'

// Fórmula para calcular el interés compuesto.
const compoundInterest = (deposit, contribution, years, rate) => {
  let total = deposit
  for (let i= 0; i < years; i++) {
    total = (total + contribution) * (rate + 1)
  }
  return Math.round(total)
}

// Creamos una función para mostrar el total formateado. Por
const formatter = new Intl.NumberFormat ('en-US', { 
  styled: 'currency',
  currency: 'USD',
  minimumFractionDigits: 2,
  maximumFractionDigits: 2
})

function App() {
  const [balance, setBalance] = useState('')
  const handleSubmit = ( {deposit, contribution, years, rate}) => {
    const val = compoundInterest (Number(deposit), Number(contribution), Number(years), Number(rate))
    setBalance(formatter.format(val))
    console.log('Valor devuelto', val)
  }
  return (
    <Container>
      <Section>
        <Formik
          initialValues = {{
            deposit: '',
            contribution: '',
            years: '',
            rate: '',
          }}
          onSubmit={handleSubmit}
          validationSchema={
            Yup.object({
              deposit: Yup.number().required('Debe tener un valor de depósito').typeError('Debe escribir un número'),
              contribution: Yup.number().required('Debe escribir el valor de la contribución').typeError('Debe escribir un número'),
              years: Yup.number().required('Debe escribir número de años').typeError('Debe escribir un número'),
              rate: Yup.number().required('Debe escribir valor de la tasa').typeError('Debe escribir un número').min(0, 'El valor mínimo debe ser cero').max(1,'El valor máximo debe ser 1'),
            })
          }
        >
          <Form>
            <Input name="deposit" label= "Depósito Inicial:" />
            <Input name="contribution" label= "Contribución anual:" />
            <Input name="years" label= "Años:" />
            <Input name="rate" label= "Interés estimado:" />
            <Button type="submit">Calcular</Button>
          </Form>
        
        </Formik>
        {balance !== '' ? <Balance>Balance Final: {balance}</Balance> : null}
      </Section>
    </Container>
  );
}

export default App
