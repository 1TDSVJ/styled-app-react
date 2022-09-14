import React, {useState} from 'react';
import Tarefa from '../tarefa/Tarefa';
import { DivLista } from '../../style/styled';

export default function listaTarefas() {
  
  const [tarefa, setTarefa] = useState([{
    
  }])

  return(
    <DivLista>
        <Tarefa/>
        <Tarefa/>
        <Tarefa/>
    </DivLista>
  )
}