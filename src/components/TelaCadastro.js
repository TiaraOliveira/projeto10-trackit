import styled from 'styled-components';
import React from 'react';
import { Link, useNavigate } from "react-router-dom";
import {useState } from "react";
import Logomarca from './Logomarca';
import axios from 'axios';
import { ThreeDots } from  'react-loader-spinner'

export default function TelaCadastro(){

    const [email, setEmail] = useState([]);
    const [name, setName] = useState([]);
    const [password, setPassword] = useState([]);
    const [foto, setFoto] = useState([]);
    const navigate = useNavigate()
    const [Loading, setLoading] = useState(false);

    
    function singUp(event){
        event.preventDefault();
        setLoading(true);
        const body = {
            email: email,
            name: name,
            image: foto,
            password: password,
        }
        const promise = axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up', body)
        promise.then(() => navigate("/"))
        promise.catch((e) => {
            alert("Campos invalos, verifique preenchiment.");
            setLoading(false);
          });
       
    }
 
    return(
        <Container>
            <Logomarca />
            <form>
                <input placeholder="email" type="email"  onChange={e => setEmail(e.target.value)}  value={email} disabled={Loading} required />
                <input placeholder="senha" type="password"  onChange={e => setPassword(e.target.value)}  value={password} disabled={Loading} required />
                <input placeholder="nome" type="text"  onChange={e => setName(e.target.value)}  value={name} disabled={Loading} required />
                <input placeholder="foto" type="text"  onChange={e => setFoto(e.target.value)}  value={foto} disabled={Loading} required />
                <button onClick={singUp}>{Loading ? (
             <ThreeDots color="#ffffff" height={25} width={316}/>
            ) : (
              "Cadastrar"
            )}</button>
               
            </form>
            
            <Link to={`/`}>
             <h4>Já tem uma conta? Faça login!</h4>
			</Link>
       
            
            
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
	margin-top: 90px;
	
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
    form{
        display:flex;
        flex-direction: column;
    }
    h4{
        margin-top:15px;
    }
`;
