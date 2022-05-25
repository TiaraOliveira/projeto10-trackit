import styled from 'styled-components';
import Bob from "./assets/bob.png"
export default function Topo(){
    return(
        <Header>
             <h2>Trackit</h2>
             <img src={Bob} alt="" />
        </Header>
    )
}

const Header = styled.div`
	display: flex;
    align-items: center;
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
        margin-right: 19px;
    }
	
`;