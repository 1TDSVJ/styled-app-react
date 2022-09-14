import React, { useState } from 'react'
import { DivLista } from '../../style/styled';
// import styled from 'styled-components';
import Tarefa from '../tarefa/Tarefa';

// const DivLista = styled.div`
// width: 100%;
// padding: 20px;
// min-height: 85vh;
// background-color: #ccc;
// display: flex; flex-wrap: wrap;
// justify-content: space-around;
// `

export default function ListaTarefas() {

  const [tarefa, setTarefa] = useState([{
    titulo: 'Lista de Pagamento',
    setor: 'Dep. Vendas',
    descricao: 'Levantar os valores de vendas',
  },
  {
    titulo: 'Planilha de Salários',
    setor: 'Dep. Pessoal',
    descricao: 'Gerar planilhas',
  },

]);

const addTarefa = () => {
  const novaTarefa = {
    titulo: 'Planilha de Salários',
    setor: 'Dep. Pessoal',
    descricao: 'Gerar Planilhas'
  }

  setTarefa([...tarefa, novaTarefa])
}

  return (

  //   <DivLista>
  //       <Tarefas />
  //       <Tarefas />
  //       <Tarefas />
  //   </DivLista>

  <DivLista>

    {tarefa.map((tar, i)=>(
      <Tarefa
        key={i}
        titulo={tar.titulo}
        setor={tar.setor}
        descricao={tar.descricao}
      />
    ))}
    <button onClick={addTarefa}>Adicionar</button>
  </ DivLista>
  )
}
