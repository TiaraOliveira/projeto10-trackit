import Topo from './Topo';
import styled from 'styled-components';
import MyHabits from './MyHabits';
import Footer from './Footer';
import { useState, useEffect } from 'react';
import UserContext from './contexts/UserContext';
import { useContext } from "react";
import axios from 'axios';

export default function TelaHabitos(){

const [listaHabitos, setListaHabitos] = useState([]);   
const {dados} = useContext(UserContext);
const config = {
    headers: {
        "Authorization": `Bearer ${dados.token}`
    }
}


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
    const isExecuted = window.confirm("Are you sure to execute this action?");

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
            <Topo />
            <MyHabits RenderizarHabitos={RenderizarHabitos} />
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
                                <p>{habito.name}</p>
                                <Posicao>
                                    {habito.days}
                                </Posicao>
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

const Container = styled.div`
	display: flex;
    flex-direction: column;
	align-items: center;
	justify-content: center;
	color: #666666;


	p{
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 22px;
        margin: 10px 10px 30px 30px;
    }
   
`
const Subtitle = styled.div`

`

const Activity = styled.div`
        width: 360px;
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

const Posicao = styled.button`
  width: 36px;
  height: 36px;
  
  border: 1px solid #D5D5D5;
  border-radius: 5px;
    display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
  margin: 20px 7px;
 
`

const Deletar  = styled.div`
    width:13px;
    height15px;
    margin-right: 19px;
    margin-top: 10px;

`