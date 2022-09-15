import React, { useState } from 'react'
import { DivLista } from '../../style/styled';
import FormTarefas from '../formTarefas/FormTarefas';
// import styled from 'styled-components';
import Tarefa from '../tarefa/Tarefa';

// const DivLista = styled.div`
// width: 100%;
// padding: 20px;
// min-height: 85vh;
// background-color: #ccc;
// display: flex; flex-wrap: wrap;
// justify-content: space-around;
// `

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

const [nTarefa, setNTarefa] = useState({
  titulo:'', setor:'', descricao:''})

  //ADD-TAREFA
  const addTarefa = (e)=>{
    e.preventDefault()
    
    //Adicionando uma nova tarefa
    setNTarefa({titulo:"",setor:"",descricao:""})

    // const novaTarefa = {
    //   titulo : "Planilha de Notas",
    //   setor : "Dep. Graduação",
    //   descricao : "Lançar notas."
    // }

    //ADICIONANDO MAIS UMA TAREFA A LISTA DE TAREFAS
    // setTarefa([...tarefa, novaTarefa])
  }

  //FUNÇÃO DE CAPTURA DOS DADOS DO FORM
  const captura = (e)=>{
    const {value,name} = e.target

    if(name === "titulo"){
      setNTarefa({titulo: value, setor: nTarefa.setor , descricao: nTarefa.descricao})
    }else if(name === "setor"){
      setNTarefa({titulo: nTarefa.titulo, setor: value , descricao: nTarefa.descricao})
    }else if(name === "descricao"){
      setNTarefa({titulo: nTarefa.titulo, setor: nTarefa.setor , descricao: value})
    }

  }

  const removerTarefa = tar => {
    let lista = tarefa
    lista = lista.filter(t => t !== tar)
    setTarefa(lista)
  }


  // const novaTarefa = {
  //   titulo: 'Planilha de Salários',
  //   setor: 'Dep. Pessoal',
  //   descricao: 'Gerar Planilhas'
  // }

  // setTarefa([...tarefa, novaTarefa])


  return (

  //   <DivLista>
  //       <Tarefas />
  //       <Tarefas />
  //       <Tarefas />
  //   </DivLista>

  <DivLista>
    <FormTarefas addTarefa={addTarefa} tarefa={nTarefa} 
      digit={captura}/>
    {tarefa.map((tar, i)=>(
      <Tarefa
        key={i}
        titulo={tar.titulo}
        setor={tar.setor}
        descricao={tar.descricao}
        remove={removerTarefa.bind(this, tar)}
      />
    ))}
    {/* <button onClick={addTarefa}>Adicionar</button> */}
  </ DivLista>
  )
}
