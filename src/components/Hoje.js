import Topo from './Topo';
import dayjs from 'dayjs';
import styled from 'styled-components';
import Footer from './Footer';
import { useState, useEffect } from 'react';
import UserContext from './contexts/UserContext';
import { useContext } from "react";
import axios from 'axios';
import PercentageContext from './contexts/PercentageContext';


export default function Hoje(){
  const now = dayjs()
  const {dados} = useContext(UserContext);
  const [listaHabitosHoje, setListaHabitosHoje] = useState([]);   
  const { percentage, setPercentage } = useContext(PercentageContext);


  const config = {
    headers: {
        "Authorization": `Bearer ${dados.token}`
    }
}

  useEffect(()=>{
    
    
    const promise = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today", config);

    promise.then(response => {
        setListaHabitosHoje(response.data);
        
      });

      promise.catch(err => {
        const message = err.response.statusText;
        alert(message);
      });
}, [])

function HabitoFeito(id, done){
    if (!done) {
        const promise = axios.post(
          `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/check`,
          {},
          config
        );
        promise.then(console.log("foi certo"));
        promise.catch(console.log("foi errado"));
      } else {
        const promise = axios.post(
          `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/uncheck`,
          {},
          config
        );
        
     
   }
  
}


const habitsDone = listaHabitosHoje.filter((habit) => {
    return habit.done === true;
  })

  let habitsCompleted = ((habitsDone.length/listaHabitosHoje.length) * 100);
  setPercentage(habitsCompleted)

  
  return(
      <>
         <Topo />
         <Container>   
             <h2> {now.format("dddd")} {now.format("DD/MM/YYYY")}</h2>
             <p>
                 {listaHabitosHoje.length === 0 ?
              `Você não tem nenhum hábito a ser feito hoje. Adicione um hábito na guia de "Hábitos" apresentada no Menu no canto inferior da tela.`
            :
              habitsDone.length === 0 ?
                "Nenhum hábito concluído ainda"
              :
                `${habitsCompleted.toFixed(0)}% dos hábitos concluídos`
            }</p>
             <Container>   
                        {listaHabitosHoje.length === 0 ?
                       'ESPERA AI'
                    :
                    listaHabitosHoje.map((habito) => {
                        return(
                            <Atividade>
                                <div>
                                    <h4>{habito.name}</h4>
                                    <p>sequencia atual: {habito.currentSequence} dias</p>
                                    <p>Seu recorde: {habito.highestSequence} dias</p>
                                </div>
                                <Icon check={habito.done} onClick={()=> HabitoFeito(habito.id, habito.done)}>
                                    <ion-icon name="checkmark"></ion-icon>
                                </Icon>
                            
                            </Atividade>
                        );
                    })
                    }
                </Container>
             
           
         </Container>
         <Footer />
      </>
  )
}


const Container = styled.div`
margin-top: 90px;
overflow-y: scroll;
scrollbar-width: none;
margin-botton: 100px;
	
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
ion-icon{
    font-size: 50px;
    color: #ffffff
}
`
const Icon = styled.div`
        background: ${(props) => (props.check ? "#8FC549" : "#EBEBEB")};
        border: 1px solid #E7E7E7;
        border-radius: 5px;
        
        margin-right: 19px;
`