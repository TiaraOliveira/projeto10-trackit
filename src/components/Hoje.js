import Topo from './Topo';
import dayjs from 'dayjs';
import styled from 'styled-components';
import Footer from './Footer';
import { useState, useEffect } from 'react';
import UserContext from './contexts/UserContext';
import { useContext } from "react";
import axios from 'axios';


export default function Hoje(){
  const now = dayjs()
  const {dados} = useContext(UserContext);
  const [listaHabitosHoje, setListaHabitosHoje] = useState([]);   

  useEffect(()=>{
    const config = {
        headers: {
            "Authorization": `Bearer ${dados.token}`
        }
    }
    
    const promise = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today", config);

    promise.then(response => {
        setListaHabitosHoje(response.data);
        
      });

      promise.catch(err => {
        const message = err.response.statusText;
        alert(message);
      });
}, [])


  return(
      <>
         <Topo />
         <Container>   
             <h2> {now.format("dddd")} {now.format("DD/MM/YYYY")}</h2>
             <p>Nenhum hábito concluído ainda</p>
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
                                <Icon>
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
        background: #EBEBEB;
        border: 1px solid #E7E7E7;
        border-radius: 5px;
        
        margin-right: 19px;
`