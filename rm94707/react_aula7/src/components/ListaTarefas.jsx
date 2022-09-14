import React from 'react'
import { DivLista } from '../style/styled'
import Tarefa from './Tarefa'

export default function ListaTarefas() {
  return (
    <DivLista>
        <Tarefa/>
        <Tarefa/>
        <Tarefa/>
    </DivLista>
  )
}
