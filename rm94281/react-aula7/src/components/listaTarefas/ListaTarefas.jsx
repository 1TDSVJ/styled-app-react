import React, { useState } from 'react';
import Tarefa from '../tarefa/Tarefa';
import { DivLista } from '../../style/styled';
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

  const addTarefa = () => {
    const novaTarefa = {
      titulo: 'Planilha de Salários',
      setor: 'Dep. Pessoal',
      descricao: 'Gerar planilhas',
    };

    setTarefa([...tarefa, novaTarefa]);
  };
  return (
    <DivLista>
      {tarefa.map((t, i) => (
        <Tarefa
          key={i}
          titulo={t.titulo}
          setor={t.setor}
          descricao={t.descricao}
        />
      ))}
      <button onClick={addTarefa}>Adicionar Tarefa</button>
    </DivLista>
  );
}
