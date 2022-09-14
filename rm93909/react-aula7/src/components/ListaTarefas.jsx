import React, { useState } from 'react'
import Tarefa from './Tarefa'
import { DivLista } from '../style/styled'

export default function ListaTarefas() {

    const [tarefa, setTarefa]= useState([{
        titulo: 'Lista de Pagamento',
        setor: 'Dep. Vendas',
        descricao: 'Levantar os valores das vendas',
      },
      {
        titulo: 'Planilha de Salários',
        setor: 'Dep. Pessoal',
        descricao: 'Gerar planilhas',
      },
    ])

    return (
    <DivLista>
        {tarefa.map((tar, i)=>(
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
