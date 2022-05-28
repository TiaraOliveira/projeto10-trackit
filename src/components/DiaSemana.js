import { useState } from 'react';
import styled from 'styled-components';

function DiaSemana({ dia, id, salvarIdDia}) {

  const [selecionado, setSelecionado] = useState(false);
    
  function selecionar(selecionado, id) {
    if (selecionado) {
      setSelecionado(false);
      salvarIdDia(selecionado, id)
    }
    else {
      setSelecionado(true);
      salvarIdDia(selecionado, id)
   }
  }

  return (
    <Posicao
      selecionado={selecionado}
      onClick={() => { selecionar(selecionado, id)}}
    >
      {dia}
    </Posicao>
  );
}

function corAssento(selecionado) {  
  if (selecionado) return '#CFCFCF';
  else return '#ffffff';
}

const Posicao = styled.button`
  width: 36px;
  height: 36px;
  
  border: 1px solid #D5D5D5;
  border-radius: 5px;
    display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${({selecionado}) =>
    corAssento(selecionado)};
  cursor: pointer;
  margin: 20px 7px;
 
`;

export default DiaSemana;