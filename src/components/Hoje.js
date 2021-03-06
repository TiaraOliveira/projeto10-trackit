import Topo from './Topo';
import dayjs from 'dayjs';
import styled from 'styled-components';
import Footer from './Footer';
import { useState, useEffect } from 'react';
import UserContext from './contexts/UserContext';
import { useContext } from "react";
import axios from 'axios';
import PercentageContext from './contexts/PercentageContext';
import 'dayjs/locale/pt-br'
import { createGlobalStyle } from 'styled-components'

export default function Hoje(){
  const now = dayjs()
  const {dados} = useContext(UserContext);
  const [listaHabitosHoje, setListaHabitosHoje] = useState([]);   
  const { setPercentage } = useContext(PercentageContext);

  const config = {
    headers: {
        "Authorization": `Bearer ${dados.token}`
    }
}

  useEffect(()=>{
    
    RenderizarHabitosHoje()
    
}, [])

function RenderizarHabitosHoje(){
  const promise = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today", config);

    promise.then(response => {
        setListaHabitosHoje(response.data);
        
      });

      promise.catch(err => {
        const message = err.response.statusText;
        alert(message);
      });
}
function HabitoFeito(id, done){
    if (!done) {
      
        const promise = axios.post(
          `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/check`,
          {},
          config
        );
        promise.then(RenderizarHabitosHoje());
        promise.catch(console.log("foi errado"));
        
      } else {
        
        const promise = axios.post(
          `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/uncheck`,
          {},
          config
        );
        promise.then(RenderizarHabitosHoje());
     
   }
}


const habitsDone = listaHabitosHoje.filter((habit) => {
    return habit.done === true;
  })

  let habitsCompleted = ((habitsDone.length/listaHabitosHoje.length) * 100);
  setPercentage(habitsCompleted)

  
  return(
      <>
       <GlobalStyle />
         <Topo />
         <Container>   
             <h2> {now.locale('pt-br').format("dddd").replace("-feira", "")}, {now.format("DD/MM")}</h2>
             <Done habitsDone={habitsDone.length}>
                 {listaHabitosHoje.length === 0 ?
              `Voc?? n??o tem nenhum h??bito a ser feito hoje. Adicione um h??bito na guia de "H??bitos" apresentada no Menu no canto inferior da tela.`
            :
              habitsDone.length === 0 ?
                "Nenhum h??bito conclu??do ainda"
              :
                `${habitsCompleted.toFixed(0)}% dos h??bitos conclu??dos`
            }</Done>
             <HabitList>   
                        {listaHabitosHoje.length === 0 ?
                       ''
                    :
                    listaHabitosHoje.map((habito) => {
                        return(
                            <Atividade>
                                <eii>
                                    <h4>{habito.name}</h4>
                                   
                                    <SeqAtual>
                                       <p>Sequencia atual:</p>
                                       <Atual currentSequence= {habito.currentSequence}>{habito.currentSequence} dias</Atual>
                                    </SeqAtual>
                                    
                                    <SeqAtual>
                                       <p>Seu Record:</p>
                                       <Record seque= {habito.highestSequence >= habito.currentSequence} highestSequence={habito.highestSequence}>{habito.currentSequence} dias</Record>
                                    </SeqAtual>
                                </eii>
                                <Icon check={habito.done} onClick={()=> HabitoFeito(habito.id, habito.done)}>
                                    <ion-icon name="checkmark"></ion-icon>
                                </Icon>
                            
                            </Atividade>
                        );
                    })
                    }
                </HabitList>
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
    margin-top: 60px;
    overflow-y: scroll;
    scrollbar-width: none;
    margin-botton: 10px;
	
    h2{
        color: #126BA5;
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 38.982px;
        line-height: 49px;
        margin-left: 28px;
        margin-botton: 40px;
        margin-top: 30px;
    }
    button{
        height: 70px;
        width: 70px;
        background: #8FC549;
        border-radius: 5px;
    }

    span{
      margin-left: 18px;
      font-family: 'Lexend Deca';
      font-style: normal;
      margin-top: 20px;
      margin-left: 28px;
      color: ${(props) => props.habitsDone !== 0 ? "#8FC549" : "#BABABA"};
      
      
    }
`;

const Atividade = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 10px 10px 30px 30px;
    height: 170px;
    background: #FFFFFF;
    border-radius: 5px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    padding-left: 15px;
p{
    
    font-family: 'Lexend Deca';
    font-style: normal;
    margin-top: 15px;
    margin-left: 18px;
    margin-top: 15px;
    margin-left: 28px;
  
  
}
eii{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
}
ion-icon{
    font-size: 50px;
    color: #ffffff
}

h4{
  margin-left: 28px;
  font-family: 'Lexend Deca';
  font-style: normal;
  font-weight: 400;
  font-size: 19.976px;
  line-height: 25px;
  color: #666666;


}
`
const Icon = styled.div`
        background: ${(props) => (props.check ? "#8FC549" : "#EBEBEB")};
        border: 1px solid #E7E7E7;
        border-radius: 5px;
        
        margin-right: 19px;
`
const HabitList = styled.div`
    margin-bottom: 100px;
    margin-top: 40px;
    width: 98%;
`

const Done = styled.div`

  margin-left: 18px;
  font-family: 'Lexend Deca';
  font-style: normal;
  margin-top: 20px;
  margin-left: 28px;
  color: ${(props) => props.habitsDone !== 0 ? "#8FC549" : "#BABABA"};
  
  
`

const SeqAtual = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Lexend Deca';
    font-style: normal;
 
    margin-top: 15px;

    p{
    
      font-family: 'Lexend Deca';
      font-style: normal;
      margin-rigth: 5px;
      display: flex;
      justify-content: center;
      align-items: center;
  }
   
`

const Atual =styled.div`
color: ${(props) => props.currentSequence !== 0 ? "#8FC549" : "#BABABA"};
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 5px;
`

const Record = styled.div`
    color: ${(props) => props.seq===true || props.highestSequence !==0? "#8FC549" : "#BABABA"};
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 5px;
`