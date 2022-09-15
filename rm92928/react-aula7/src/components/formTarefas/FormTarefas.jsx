import React from 'react'
import { DivForm } from '../../style/styled'

export default function FormTarefas(props) {
  return (
    <DivForm>
        <form method='POST' onSubmit={props.addTarefa}>
            <div>
                <input name='titulo' placeholder='Título' value={props.tarefa.titulo} onChange={props.digit} />
            </div>
            <div>
                <input name='setor' placeholder='Setor' value={props.tarefa.setor} onChange={props.digit} />
            </div>
            <div>
                <input name='descricao' placeholder='Descrição' value={props.tarefa.descricao} onChange={props.digit} />
            </div>
            <button type='submit'>Adicionar</button>
        </form>
    </DivForm>
  )
}
