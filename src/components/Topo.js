import styled from 'styled-components';
import UserContext from './contexts/UserContext';
import { useContext } from "react";
export default function Topo(){
    const {dados} = useContext(UserContext);
    const listaSerializada = localStorage.getItem("user"); 
    const lista = JSON.parse(listaSerializada); 
    console.log(` lista aqui ${lista}`)

    return(
        <Header>
            <h2>Tracklit</h2>
            <img src={dados.image} alt="" />
        </Header>
    )
}

const Header = styled.div`
	display: flex;
    align-items: center;
    position: fixed;
	top: 0;
    width: 100%;
    justify-content: space-between;
	color: #126BA5;
	height: 70px;
    background: #126BA5;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);

    h2{
        color: #FFFFFF;
        font-family: 'Playball';
        font-style: normal;
        font-weight: 400;
        font-size: 38.982px;
        line-height: 49px;
        margin-left: 18px
    }
    img{
        height: 51px;
        width: 51px;
        margin-right: 19px;
        border-radius: 100px;
    }
	
`;