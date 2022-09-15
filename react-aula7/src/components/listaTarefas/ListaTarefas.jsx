import React, {useState} from 'react';
import Tarefa from '../tarefa/Tarefa';
import FormTarefa from '../formTarefa/FormTarefa';
import { DivLista } from '../../style/styled';

export default function ListaTarefas() {
  
  const [tarefa, setTarefa] = useState([{
    titulo:'Lista de Pagamentos',
    setor:'Dep. Vendas',
    descricao:'Levantar os valores das vendas',
  },
  {
    titulo:'Planilha de Salários',
    setor:'Dep. Pessoal',
    descricao:'Gerar planilhas',
  }])

  //ADD-TAREFA
  const addTarefa = (e) => {
    e.preventDefault()
    
    //ADICIONANDO UMA NOVA TAREFA
    setNTarefa({titulo:'',setor:'',descricao:''})
    setTarefa([...tarefa, nTarefa])
    
    // const novaTarefa = {
    //   titulo:'Planilha de Notas',
    //   setor:'Dep. Graduação',
    //   descricao:'Lançar notas',
    // }
    //ADICIONANDO MAIS UMA TAREFA A LISTA DE TAREFAS
    //setTarefa([...tarefa, novaTarefa])
  }

  // CRIANDO STATE DE NOVA TAREFA
  const [nTarefa, setNTarefa] = useState({titulo:'',setor:'',descricao:''})

  // FUNÇÃO PARA CAPTURAR OS VALORES DO FORMULÁRIO
  const captura = (e) => {
    const {value, name} = e.target

    if(name == "titulo"){
      setNTarefa({titulo: value, setor: nTarefa.setor, descricao: nTarefa.descricao})
    }else if(name == "setor"){
      setNTarefa({titulo: nTarefa.titulo, setor: value, descricao: nTarefa.descricao})
    }else if(name == "descricao"){
      setNTarefa({titulo: nTarefa.titulo, setor: nTarefa.setor, descricao: value})
    }
  }

  return(
    <DivLista>

      <FormTarefa
        funcaoAddTarefa={addTarefa}
        novaTarefa={nTarefa}
        funcaoCaptura={captura}
      />
      
      {tarefa.map((tar, i) => (
        <Tarefa key={i} 
          titulo={tar.titulo} 
          setor={tar.setor} 
          descricao={tar.descricao} 
        />
      ))}
    </DivLista>
  )
}