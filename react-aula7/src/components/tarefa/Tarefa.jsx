import React from 'react'
import { Botao , DivTarefa } from '../../style/styled'

const Tarefa = (props) => {
  return (
    <DivTarefa>
        <h2>{props.titulo}</h2>
        <p>Para: {props.setor}</p>
        <p>{props.descricao}</p>
        <Botao>Fechar</Botao>
    </DivTarefa>
  )
}
export default Tarefa;