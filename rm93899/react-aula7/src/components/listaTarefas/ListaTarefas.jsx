import React from 'react'
import { DivLista } from '../../style/styled'
import Tarefa from '../tarefa/Tarefa'
import { useState } from 'react'





export default function ListaTarefas() {
  
  const [nTarefa, setNTarefa] = useState({
    titulo:'', setor:'', descricao:'',})
  
  const addTarefa = e => {
    e.preventDefault()

    setNTarefa({titulo:'', setor:'', descricao:'',})
  }

  const captura = e => {
    const {value, name} = e.target

    if(name === 'titulo') {
      setNTarefa({'titulo':value, 'setor':nTarefa.setor, 'descricao':nTarefa.descricao})
    } else if(name === 'setor') {
      setNTarefa({'titulo':nTarefa.titulo, 'setor':value, 'descricao':nTarefa.descricao})
    } else if(name === 'descricao') {
      setNTarefa({'titulo':nTarefa.titulo, 'setor':nTarefa.setor, 'descricao':value})
    }

  }

  return (
    <DivLista>
      {tarefa.map((tar, i) => (
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