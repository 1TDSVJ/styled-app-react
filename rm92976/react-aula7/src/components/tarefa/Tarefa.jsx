import React from 'react';
import styled from 'styled-components'

const DivTarefa = styled.div`
background-color: #ffb;
border: 2px solid #333;
box-shadow: 5px 5px 5px #333;
padding: 20px;
text-align: center;
width: 350px;
height: 200px;
margin: 10px;
h2,p{
    padding-bottom: 10px;
    }
`

    
//div para pegar o componente desejado

export default function Tarefa(){
    return(
        <DivTarefa>
            <h1>Relatório de Vendas</h1>
            <p>Para: departamento de Vendas</p>
            <p>Levantar os valores das vendas deste mês</p>
        </DivTarefa>
    )
}