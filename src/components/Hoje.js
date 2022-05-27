import Topo from './Topo';
import dayjs from 'dayjs';
import styled from 'styled-components';
import Footer from './Footer';

export default function Hoje(){
  const now = dayjs()
  return(
      <>
         <Topo />
         <Container>   
             <h2> {now.format("dddd")} {now.format("DD/MM/YYYY")}</h2>
             <p>Nenhum hábito concluído ainda</p>
             <Atividade>
                <div>
                    <h4>Ler 1 capitulo de livro</h4>
                    <p>sequencia atual</p>
                    <p>Seu recorde: 5 dias</p>
                </div>
                <button>check</button>
             </Atividade>
         </Container>
         <Footer />
      </>
  )
}


const Container = styled.div`
	

    h2{
        color: #126BA5;
        
font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 38.982px;
        line-height: 49px;
        margin-left: 18px
    }
    button{
        height: 70px;
        width: 70px;
        background: #8FC549;
        border-radius: 5px;
    }
	
`;

const Atividade = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 40px 10px 30px 30px;
    height: 94px;
    background: #FFFFFF;
    border-radius: 5px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);

p{
  font-family: 'Lexend Deca';
  font-style: normal;
  
  
}

div{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
}
`