import React from 'react'
import { DivTarefa } from '../../style/styled'

export default function Tarefa() {
  
  const Tarefa = (props) => {
    return (
      <DivTarefa>
        <h2>{props.titulo}</h2>
        <p>Para: {props.setor}</p>
        <p>{props.descricao}</p>
      </DivTarefa>
    )
  }
  
  return (
    <DivTarefa>
        <h2>Relatório de Vendas</h2>
        <p>Para: Departamento de vendas</p>
        <p>Levantar os valores de vendas deste mês.</p>
    </DivTarefa>
  )
}
