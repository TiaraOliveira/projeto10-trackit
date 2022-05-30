import Topo from './Topo';
import styled from 'styled-components';
import MyHabits from './MyHabits';
import Footer from './Footer';
import { useState, useEffect } from 'react';
import UserContext from './contexts/UserContext';
import { useContext } from "react";
import axios from 'axios';
import { createGlobalStyle } from 'styled-components';

export default function TelaHabitos(){

const [listaHabitos, setListaHabitos] = useState([]);   
const {dados} = useContext(UserContext);
const config = {
    headers: {
        "Authorization": `Bearer ${dados.token}`
    }
}
const week = [
    {id:0, dia:"D"},
    {id:1, dia:"S"},
    {id:2, dia:"T"},
    {id:3, dia:"Q"},
    {id:4, dia:"Q"},
    {id:5, dia:"S"},
    {id:6, dia:"S"},
]


useEffect(()=>{
    
    RenderizarHabitos()
}, [])

function RenderizarHabitos(){
    const promise = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits", config);

    promise.then(response => {
        setListaHabitos(response.data);
        console.log(listaHabitos)
      });

      promise.catch(err => {
        const message = err.response.statusText;
        alert(message);
      });
}
function HabitoApagado(id){
    const isExecuted = window.confirm("Certeza que deseja deletar este hábito?");

    if (isExecuted===true){
        const promise = axios.delete(
            `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}`,
            config
          );
         
          promise.then(RenderizarHabitos());
          promise.catch(console.log("foi errado"));
    }

    else{
        console.log("aqui")
    }
       
     
   }
  


    return(
        <>
        <GlobalStyle />
            <Topo />
            <MyHabits listaHabitos={listaHabitos} setListaHabitos={setListaHabitos} />
            <Container>   
                        {listaHabitos.length === 0 ?
                        <Subtitle>
                        Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!
                        </Subtitle>
                    :
                    listaHabitos.map((habito) => {
                        return(
                        <Activity>
                            <Infos>
                                <Frase>
                                        <p>{habito.name}</p>
                                </Frase>
                                 <Caixas>
                                {week.map((day, index) => (
                                        <Caixadias key={index} selected={habito.days.includes(index) ? true : false}>
                                            {day.dia}
                                        </Caixadias>
                                         ))}
                                </Caixas>
                            </Infos>
                            <Deletar onClick={()=> HabitoApagado(habito.id)} >
                                <ion-icon name="trash-outline"></ion-icon>
                            </Deletar>
                        </Activity>
                        );
                    })
                    }
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
	display: flex;
    flex-direction: column;
	align-items: center;
	justify-content: center;
	color: #666666;
    margin-bottom: 130px;

	
`
const Subtitle = styled.div`
    margin: 40px 15px 40px 40px;
`

const Activity = styled.div`

        width: 90%;
        height: 115px;
        display: flex;
        background: #FFFFFF;
        border-radius: 5px;
        border: 1px solid #D5D5D5;
        justify-content: space-between;
        margin-top:20px;

`

const Infos = styled.div`

  button{
    width: 36px;
    height: 36px;
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    margin: 20px 7px;
    
  }
  p{
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 25px;
    color: #666666;
   
}
`

const Caixas = styled.div`
    border-radius: 5px;
    display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px 7px;
  background-color: #ffffff
 `

const Deletar  = styled.div`
    width:13px;
    height15px;
    margin-right: 19px;
    margin-top: 10px;

`
const Caixadias = styled.div`
  width: 30px;
  height: 30px;
  font-size: 20px;
  font-family: "Lexend Deca", sans-serif;
  color: ${(props) => (props.selected ? "#FFFFFF" : "#DBDBDB")};
  background-color: ${(props) => (props.selected ? "#CFCFCF" : "#FFFFFF")};
  border: 1px solid #d5d5d5;
  border-radius: 5px;
  margin: 10px 10px 1px 1px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Frase = styled.div`
p{
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    margin: 10px 10px 30px 30px;
}

`
