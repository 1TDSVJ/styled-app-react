import React, {useState} from 'react';
import { DivLista } from '../../style/styled';
import FormTarefas from '../formTarefas/FormTarefas';
import Tarefa from '../tarefa/Tarefa';




export default function ListaTarefas() {

  const [tarefa, setTarefa] = useState([{
    titulo: 'Lista de Pagamento',
    setor: 'Dep. Vendas',
    descricao: 'Levantar os valores de vendas',
  },
  {
    titulo: 'Planilha de Salários',
    setor: 'Dep. Pessoal',
    descricao: 'Gerar planilhas',
  },

]);

const addTarefa = e => {
  e.preventDefault()

  setNTarefa({titulo:'', setor:'', descricao:'',})

  }
  setTarefa([...tarefa, novaTarefa])
}

const[nTarefa, setNTarefa] = useState({
titulo:'', setor:'', descricao:'',})

const captura= e =>{
  const {value, name} = e.target

  if(name === 'titulo'){
    setNTarefa({'titulo':value, 'setor':nTarefa.setor, 'descricao':nTarefa.descricao})
  } else if (name === 'setor'){
    setNTarefa({'titulo':nTarefa.titulo, 'setor':value, 'descricao':nTarefa.descricao})
  } else if(name === 'descricao'){
    setNTarefa({'titulo': nTarefa.titulo, 'setor':nTarefa.setor, 'descricao':value})
  }
}

const removerTarefa = tar =>{
  let lista = tarefa
  lista = lista.filter((t)=> t!== tar)
  setTarefa(lista)
}

 return (
    <DivLista>
      <FormTarefas addTarefa={addTarefa} tarefa={nTarefa} 
        digit={captura}/>
      {tarefa.map((tar, i)=>
      <Tarefa
      key={i}
      titulo={tar.titulo}
      setor={tar.setor}
      descricao={tar.descricao}
      remove={removerTarefa.bind(this,tar)}
      />
      ))}
      </DivLista>
  )



