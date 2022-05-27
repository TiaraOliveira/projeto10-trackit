import styled from "styled-components"
import {useNavigate} from "react-router-dom";

export default function Footer(){
const navigate = useNavigate()
function Habits(){
    navigate("/Habitos");
}
function Historic(){
    navigate("/Historico");
}
    return(
        <Conteiner>
            <p onClick={Habits}>Hábitos</p>
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
    justify-content: space-between;
    width: 85%;
    height: 70px;
    margin: 10px 10px 30px 30px;

	p{
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 17.976px;
        line-height: 22px;
        text-align: center;
        color: #52B6FF;


    }
   
`;
