import React from 'react'
import { DivLista } from '../../style/styled'
import Tarefa from '../tarefa/Tarefa'
import { useState } from 'react'


export default function listaTarefas() {
  
  const [tarefas, setTarefas] = useState([{
    titulo: 'Lista de Pagamento',
    setor: 'Dep. Vendas',
    descricao: 'Levantar os valores de vendas.',
  },
  {
    titulo: 'Planilha de Salários',
    setor: 'Dep. Pessoal',
    descricao: 'Gerar planilhas',
  },
])
  
  return (
    <DivLista>
      {tarefas.map((tar, i) => (
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