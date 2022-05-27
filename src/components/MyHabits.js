import { useState } from "react";
import styled from "styled-components"



export default function MyHabits(){

const[NewHabits, setNewHabits] = useState([])
const [toggle, setToggle] = useState(false);
const week = [
    {id:1, dia:"D"},
    {id:2, dia:"S"},
    {id:3, dia:"T"},
    {id:4, dia:"Q"},
    {id:5, dia:"Q"},
    {id:6, dia:"S"},
    {id:7, dia:"S"},
]
   
    function addHabito(){
        return(
        setNewHabits(
        <HabitoNovo>
            <input placeholder="nome do hábito" type="text" />
            
                {week.map((day) => <Days onClick={()=> setToggle(true)} toggle={toggle}>{day.dia}</Days>)}
            
         <Changes>
                <h2>Cancelar</h2>
                <button>Salvar</button>    
         </Changes>   
        </HabitoNovo>
        ))
        
    }
    return(
        <Habits>
            <AdicionarHabito>
                <h1>Meus hábitos</h1>
                <button onClick={(addHabito)}>+</button>
            </AdicionarHabito>
         {NewHabits}
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

        input{
            height: 45px;
            width: 303px;
            margin-top:30px;
        }

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
        }
       
`

const Days = styled.div`  
        display: flex;
        justify-content: center;
        align-items: center;
        background: ${({toggle}) => toggle ? '#ffffff': '#446677'};
        margin-top:10px;
        margin-left:5px;
        width: 30px;
        height: 30px;
        border: 1px solid #D5D5D5;
        border-radius: 5px;
`