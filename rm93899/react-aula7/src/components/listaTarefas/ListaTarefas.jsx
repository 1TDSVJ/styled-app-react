import React from 'react'
import { DivLista } from '../../style/styled'
import Tarefa from '../tarefa/Tarefa'


export default function listaTarefas() {
  return (
    <DivLista>

      <Tarefa/>
      <Tarefa/>
      <Tarefa/>

    </DivLista>
  )
}