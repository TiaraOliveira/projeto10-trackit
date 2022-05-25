import Topo from './Topo';
import styled from 'styled-components';
import MyHabits from './MyHabits';
import Footer from './Footer';

export default function TelaHabitos(){
    return(
        <>
            <Topo />
            <MyHabits />
            <Container>   
                <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>

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
   
`;

