import React from 'react';
import styled from 'styled-components'

// ` ` define o limite do styled
const DivTarefa = styled.div` 
    background-color: #ffb;
    border: 2px solid #333;
    box-shadow: 5px 5px 5px #333;
    padding: 20px;
    text-align: center;
    width: 350px;
    height: 200px;
    margin: 10px;
    h2,p{ padding-bottom: 10px; }
    `

function Tarefas() {
  return (
    <DivTarefa>
        <h2>Relatório de Vendas</h2>
        <p>Para: Depto de Vendas</p>
        <p>Levantar os valores de vendas deste mês.</p>
    </DivTarefa>
  )
}

export default components;