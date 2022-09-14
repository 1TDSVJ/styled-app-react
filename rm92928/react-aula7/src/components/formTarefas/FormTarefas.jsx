import React from 'react'
import { DivForm } from '../../style/styled'

export default function FormTarefas(props) {
  return (
    <DivForm>
        <form method='POST' onSubmit={props.addTarefa}>
            <div>
                <input name='titulo' placeholder='Título' value={props.tarefa.titulo} onChange={props.digiit} />
            </div>
            <div>
                <input name='setor' placeholder='Setor' value={props.tarefa.setor} onChange={props.digiit} />
            </div>
            <div>
                <input name='desrcicao' placeholder='Descrição' value={props.tarefa.desrcicao} onChange={props.digiit} />
            </div>
            <button type='submit'>Adicionar</button>
        </form>
    </DivForm>
  )
}
