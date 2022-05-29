import styled from "styled-components"
import {useNavigate} from "react-router-dom";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useContext } from "react";
import PercentageContext from './contexts/PercentageContext';



export default function Footer(){
    const { percentage} = useContext(PercentageContext);
    
const navigate = useNavigate()
function Habits(){
    navigate("/Habitos");
}
function Historic(){
    navigate("/Historico");
}
function Hoje(){
    navigate("/Hoje");
}
    return(
        <Conteiner>
            <p onClick={Habits}>Hábitos</p>
            <Circulo onClick={Hoje}>
                 <CircularProgressbar  value={percentage} text={`${percentage}%`} />
            </Circulo>
           
            <p onClick={Historic}>Histórico</p>
        </Conteiner>
        
    )
}


const Conteiner = styled.div`
	display: flex;
    align-items: center;
	color: #666666;
    position: fixed;
	bottom: 0;
    z-index:1;
    justify-content: space-between;
    width: 100%;
    height: 70px;
    background-color: #ffffff;

	p{
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 17.976px;
        line-height: 22px;
        text-align: center;
        color: #52B6FF;


    }
   
`

const Circulo = styled.div`
width: 95px;
heigth:100px;
margin-botton: 20px;
justify-content: space-around;
`