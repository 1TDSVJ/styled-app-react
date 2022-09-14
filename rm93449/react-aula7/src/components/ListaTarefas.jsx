import React from 'react'
import { DivLista } from '../style/styled'
import Tarefa from './Tarefa'

export default function ListaTarefas() {
  return (
    <div>
        <DivLista>
            <Tarefa/>
            <Tarefa/>
            <Tarefa/>
        </DivLista>
    </div>
  )
}
