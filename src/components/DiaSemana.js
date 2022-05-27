import styled from 'styled-components';

function DiaSemana(props) {
  const { id, dia,  selecionado, aoSelecionar } = props;

  function selecionarDia() {
   
    aoSelecionar(id, dia);
  }

  return (
    <Posicao
      selecionado={selecionado}
      onClick={selecionarDia}
    >
      {dia}
    </Posicao>
  );
}

function corAssento(selecionado) {
  if (selecionado) return 'red';
  else return 'black';
}

const Posicao = styled.button`
  width: 26px;
  height: 26px;
  color: #D4D4D4
  border: 1px solid #D5D5D5;
  border-radius: 5px;
    display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({selecionado}) =>
    corAssento(selecionado)};
  cursor: pointer;
  margin: 20px 7px;
  color: #222;
`;

export default DiaSemana;