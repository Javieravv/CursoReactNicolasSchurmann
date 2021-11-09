import styled, { keyframes } from 'styled-components'

const P = styled.p`
  font-size: 20px;
  color: blue;
` 

const H1 = styled.h1`
  display: inline-block;
  margin: 0 auto;
  text-align: 'center';
  font-size: 2rem;
`

const Content = styled.div`
  padding: 20px 25px;
` 
// puede recibir propiedades y con base en ello hacer alguna cosas.

const Button  = styled.button`
  transition: box-shadow 0.2s ease;
  background-color: ${props => props.primary ? 'red' : 'white'};
  color: ${props => props.primary ? 'white' : 'red'};
  padding: 20px 30px;
  border: ${props => props.primary ? 'solid 2px white' : 'solid 2px red'};
  border-radius: 6px;
  margin-right: 5px;

  &:hover {
    box-shadow: 1px 3px 10px rgba(0, 0, 0, 0.93);
  }

  &.secondary {
    background-color: blue;
    border: solid 3px blue;
    color: white;
    font-weight: bold;
  }
  .info {
    font-size: 36px;
  }
` 

const BlockButton = styled(Button)`
  width: 100%;
  font-size: 24px;
`

const Link = ({ className, ...props }) => {
  return <a className={className} {...props}></a>
}

const StyledLink = styled(Link)`
  color: magenta;
  font-weight: bold;
  margin-left: 10px;
` 

const Input = styled.input.attrs( props => ({
  type: "text",
  color: props.color || 'red'
}))`
  font-size: 20px;
  border: 2px solid red;
  color: ${props => props.color};
`

const Password = styled(Input).attrs ({
  type: 'password',
})`` 

const girar = keyframes`
   from {
     transform: rotate (0deg);
   }

   to {
     transform: rotate(360deg);
   }
`

const Rotar = styled.div`
  display: inline-block;
   animation: ${girar} 2s linear infinite;
`

function App() {
  return (
    <Content>
      <H1>Styled components Section</H1>
      <P>Componente de párrafo creado con Styled Components.</P>
      <Button>Enviar</Button>
      <Button primary="true">Recibir </Button>
      <Button primary="true" className="secondary">Recibir 1 </Button>
      <Button primary="true" className="info">Recibir 2 <h5>Hijos</h5></Button>
      <BlockButton primary>Enviar Gigante</BlockButton>
      <BlockButton >Enviar Gigante de nuevo</BlockButton>
      <BlockButton as="a" href="#">Enviar Gigante de nuevo 1</BlockButton>
      <BlockButton as="h2" href="#">Enviar Gigante de nuevo 2</BlockButton>
      <Link>Link sin estilo</Link>
      <StyledLink>Link con Styled Component</StyledLink>
      <Input />
      <br />
      <Input color="magenta" />
      <br />
      <Password />
      <br />
      <Rotar>Javo girando...</Rotar>
    </Content>
  );
}

export default App;
