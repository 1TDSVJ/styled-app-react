import React from 'react'
import { DivLista } from '../../style/styled';
// import styled from 'styled-components';
import Tarefas from '../tarefas/Tarefas';

// const DivLista = styled.div`
// width: 100%;
// padding: 20px;
// min-height: 85vh;
// background-color: #ccc;
// display: flex; flex-wrap: wrap;
// justify-content: space-around;
// `

export default function ListaTarefas() {
  return (
    <DivLista>
        <Tarefas />
        <Tarefas />
        <Tarefas />
    </DivLista>
  )
}
