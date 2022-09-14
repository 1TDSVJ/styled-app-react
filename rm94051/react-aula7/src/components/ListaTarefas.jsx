import React, { useState } from 'react'
import { DivLista } from '../style/styled'
import Tarefa from './Tarefa'

export default function ListaTarefas() {

    const [tarefa, setTarefa] = useState([{
            titulo:"Lista de Pagamento",
            setor:"Dep. Vendas",
            descricao: "Levantar os valores das vendas",
        },
        {
            titulo:"Planilha de Sálarios",
            setor:"Dep. Pessoal",
            descricao: "Gerar planilhas",
        }
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
