import styled from "styled-components"
export default function Footer(){
    return(
        <Conteiner>
            <p>Hábitos</p>
            <p>Histórico</p>
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
    width: 95%;
    height: 70px;

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
