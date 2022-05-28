import { useState } from "react";
import styled from "styled-components"
import DiaSemana from "./DiaSemana";
import UserContext from './contexts/UserContext';
import { useContext } from "react";
import axios from 'axios';


export default function MyHabits(){    
    const [diasSelecionados, setDiasSelecionados] = useState([]);
    const [form, setForm] = useState(false);
    const[name, setName] = useState("")
    const {dados} = useContext(UserContext);

    const week = [
        {id:0, dia:"D"},
        {id:1, dia:"S"},
        {id:2, dia:"T"},
        {id:3, dia:"Q"},
        {id:4, dia:"Q"},
        {id:5, dia:"S"},
        {id:6, dia:"S"},
    ]

    function salvarIdDia(selecionado, id) {
        if (!selecionado) {
            setDiasSelecionados([...diasSelecionados, id]);
        }
        else {
            setDiasSelecionados(diasSelecionados.filter((elemento) =>  elemento !== id))
        }
    }

  function CancelarAtividade(){
      setName("")
      setDiasSelecionados([])
      console.log({diasSelecionados})
  }  

  function SalvarAtividade(){
     
      
    const body = { 
        name: name,
        days: diasSelecionados,
     };
     
    const config = {
        headers: {
            "Authorization": `Bearer ${dados.token}`
        }
    }
    
    axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits", body, config)
    .then(answer => console.log("deubom"))
    .catch(err => console.log("deuruim"))

    setTimeout(() => {
        setForm(false)
      }, 1000);
}  
    return(
        <Habits>
            <AdicionarHabito>
                <h1>Meus hábitos</h1>
                <button onClick={() => setForm(true)}>+</button>
              
            </AdicionarHabito>
            {form
                ?
                <NewHabit>
                    <Nome>
                            <input placeholder="Digite seu nome..." type="text" value={name} onChange={e => setName(e.target.value)} required />
                    </Nome>
                    <Semanas>
                        {week.map(dia => {
                                    return (
                                        <DiaSemana
                                            key={dia.id}
                                            id={dia.id}
                                            dia={dia.dia}
                                            salvarIdDia={salvarIdDia}
                                        />
                                    );
                                })}
                    </Semanas>
                    <Changes>
                        <h2 onClick={CancelarAtividade}>Cancelar</h2>
                        <button onClick={SalvarAtividade}>Salvar</button>       
                    </Changes>   
                       
                </NewHabit>
                
                :
                ''}
                
        </Habits>
    )
}

const Habits = styled.div`
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-direction: column;
`

const AdicionarHabito = styled.div`
        display: flex;
        align-items:  center;
        justify-content: space-between;
        width: 90%;
        h1{
            font-family: 'Lexend Deca';
            font-style: normal;
            font-weight: 400;
            font-size: 22.976px;
            line-height: 29px;
            color: #126BA5;
            
            
        }
    
        button{
           
background: #52B6FF;
            border-radius: 5px;
            color: #ffffff;
            width: 40px;
            height: 35px;
            font-family: 'Lexend Deca';
            font-style: normal;
            font-weight: 400;
            font-size: 26.976px;
            line-height: 34px;
            display: flex;
            align-items: center;
            justify-content: center;
        }

`

const HabitoNovo = styled.div`
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        flex-direction: column;

        

        button{
          
            margin-top:10px;
            margin-left:5px;
            width: 30px;
            height: 30px;
           
            
        }
        .Days{
            backgroud-color="red";
        }

`

const Changes = styled.div`
        display: flex;
        justify-content: flex-end;
        align-items: center;
        margin-right: 19px;
             

        button{
            width: 84px;
            height: 35px;
            left: 257px;
            top: 277px;
            background: #52B6FF;
            border-radius: 5px;
            font-family: 'Lexend Deca';
            font-style: normal;
            font-weight: 400;
            font-size: 15.976px;
            line-height: 20px;
            color: #FFFFFF;
            
        }

        h2{
            font-family: 'Lexend Deca';
            font-style: normal;
            font-weight: 400;
            font-size: 16px;
            color: #52B6FF;
            margin-right: 19px;
        }
       
`
const Semanas = styled.div`
    display: flex;
    width: 323px;
    align-items: flex-start;

`
const Nome = styled.div`
input{
    height: 45px;
    width: 303px;
    margin-top:30px;
    margin-left: 15px
}
`

const NewHabit = styled.div`
        width: 350px;
        height: 200px;
        left: 17px;
        top: 147px;
        background: #FFFFFF;
        border-radius: 5px;
        border: 1px solid #D5D5D5;
`