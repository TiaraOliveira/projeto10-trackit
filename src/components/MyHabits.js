import styled from "styled-components"
export default function MyHabits(){
    return(
        <Habits>
            <h1>Meus hábitos</h1>
            <button>+</button>
        </Habits>
    )
}

const Habits = styled.div`
        display: flex;
        margin: 10px 10px 30px 30px;
        justify-content: space-between;
        align-items: center;


 
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