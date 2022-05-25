import logotipo from "./assets/logo.png";
import styled from "styled-components"
export default function Logomarca(){
    return(
        <Logo>
              <img src={logotipo} alt="" />
              <h1>TrackIt</h1> 
        </Logo>
    )
}

const Logo = styled.div`
        img{
            width: 255px;
        }

        h1{
            font-family: 'Playball', cursive;
            font-weight: 400;
            font-size: 69px;
            line-height: 86px;
            text-align: center;
}
`