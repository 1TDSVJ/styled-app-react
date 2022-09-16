import React, { useState } from 'react';
import Tarefa from '../tarefa/Tarefa';
import { DivLista } from '../../style/styled';
import FormTarefas from '../formTarefas/FormTarefas';

export default function ListaTarefas() {
  const [tarefa, setTarefa] = useState([
    {
      titulo: 'Lista de Pagamento',
      setor: 'Dep. Vendas',
      descricao: 'Levantar os valores das vendas',
    },
    {
      titulo: 'Planilha de Salários',
      setor: 'Dep. Pessoal',
      descricao: 'Gerar planilhas',
    },
  ]);

  const addTarefa = (e) => {
    e.preventDefault();
    setNovaTarefa({titulo:"", setor:"", descricao:""})
    setTarefa([...tarefa, novaTarefa]);
  }

  const [novaTarefa, setNovaTarefa] = useState({titulo:"", setor:"", descricao:""});

  const captura = (e) => {
    const {name, value} = e.target;

    if(name === "titulo") {
      setNovaTarefa({titulo: value, setor: novaTarefa.setor, descricao: novaTarefa.descricao})
    } else if(name === "setor") {
      setNovaTarefa({titulo: novaTarefa.titulo, setor: value, descricao: novaTarefa.descricao})
    } else if(name === "descricao") {
      setNovaTarefa({titulo: novaTarefa.titulo, setor: novaTarefa.setor, descricao: value})
    }
  }

  return (
    <DivLista>
      <FormTarefas 
        funcaoAddTarefa={addTarefa}
        novaTarefa={novaTarefa}
        funcaoCaptura={captura}
      />
      {tarefa.map((tar, i) => (
        <Tarefa
          key={i}
          titulo={tar.titulo}
          setor={tar.setor}
          descricao={tar.descricao}
        />
      ))}
    </DivLista>
  );
}
