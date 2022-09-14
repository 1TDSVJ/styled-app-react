import React from 'react';
import {DivTarefa} from '../style/styled'



function Tarefas = props=>{
  return (
    <DivTarefa>
        <h2>{props.titulo}</h2>
        <p>Para: {props.setor}</p>
        <p>{props.descricao}</p>
    </DivTarefa>
  )
}

export default Tarefas;