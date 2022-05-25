import styled from 'styled-components';

import Logomarca from './Logomarca';

export default function TelaCadastro(){
    return(
        <Container>
            <Logomarca />
            <input placeholder="email" type="email" />
            <input placeholder="senha" type="text" />
            <input placeholder="nome" type="email" />
            <input placeholder="foto" type="text" />
            <button>Cadastrar</button>
            <h4>Já tem uma conta? Faça login!</h4>
         </Container>
       
    )
}


const Container = styled.div`
	display: flex;
    flex-direction: column;
	align-items: center;
	justify-content: center;
	color: #126BA5;
	width:100%;
    position: fixed;
    top: 100px;
	
	
    input{
        color: #F2F2F2
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 19.976px;
        line-height: 25px;
        width: 303px;
        height: 45px;
        margin-top: 10px;
        padding-left: 10px;
    }
    

    button{
        width: 316px;
        height: 45px;
        background: #52B6FF;
        opacity: 0.7;
        border-radius: 4.63636px;
        margin-top: 10px;
        color: #FFFFFF;
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 20.976px;
        line-height: 26px;
        text-align: center;

    }
`;
