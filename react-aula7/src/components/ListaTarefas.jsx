import React, { useState } from 'react';
import Tarefas from './Tarefa'
import {DivLista} from '../style/styled'

function ListaTarefas=()=>{
  const [tarefa,setTarefa]=useState([{
    titulo:'Lista de Pagamento',
    setor:'Depto. Vendas',
    descricao:'Levantar Valores',
  },
  {
    titulo:'Planilha de Salários',
    setor:'Depto. Pessoal',
    descricao:'Gerar Planilhas',
  }])
  return(
    <DivLista>
        {tarefa.map((tar,i)=>(
          <Tarefa
          key={i}
          titulo={tar.titulo}
          setor={tar.setor}
          descricao={tar.descricao}
          />
        ))}
    </DivLista>
  )
}

export default ListaTarefas;