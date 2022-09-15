import React from 'react'
import { Botao, DivTarefa } from '../style/styled'

export default function Tarefa(props) {
  return (
    <DivTarefa>
        <h2>{props.tituloProps}</h2>
        <p>{props.setorProps}</p>
        <p>{props.descricaoProps}</p>
        <Botao>Fechar</Botao>
    </DivTarefa>
  )
}
