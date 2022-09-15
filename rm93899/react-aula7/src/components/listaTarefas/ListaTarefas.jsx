import React from 'react'
import { DivLista } from '../../style/styled'
import Tarefa from '../tarefa/Tarefa'
import { useState } from 'react'





export default function ListaTarefas() {
  
  const addTarefa = () => {
    const novaTarefa = {
      titulo: 'Planilha de Salários',
      setor: 'Dep. Pessoal',
      descricao: 'Gerar planilhas',
    }

    setTarefa([...tarefa, novaTarefa])

  }
  
  const [tarefa, setTarefa] = useState([{
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
      {tarefa.map((tar, i) => (
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