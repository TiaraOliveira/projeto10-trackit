import Topo from './Topo';
import styled from 'styled-components';
import Footer from './Footer';
import { createGlobalStyle } from 'styled-components'
export default function Historico(){
 
  return(
      <>
       <GlobalStyle />
         <Topo />
         <Container>   
             <h2>Histórico</h2>
             <p>Em breve você poderá ver o histórico dos seus hábitos aqui!</p>
             
         </Container>
         <Footer />
      </>
  )
}
const GlobalStyle = createGlobalStyle`
  body {
    background:  #E5E5E5;;
  }
`

const Container = styled.div`

margin-top: 90px;
    p{
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 22px;
        margin: 10px 10px 30px 30px;
    }

    h2{
        color: #126BA5;
        
font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 38.982px;
        line-height: 49px;
        margin-left: 18px
   
`;
