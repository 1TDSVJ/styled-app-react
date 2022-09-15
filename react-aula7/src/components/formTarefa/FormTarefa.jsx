import React from 'react';

function formTarefa(props) {
  return (
    <>
        <form method='post' onSubmit={props.funcaoAddTarefa}>
            <div>
                <label>Título</label>
                <input type='text' name='titulo' placeholder='Título' value={props.novaTarefa.titulo} onChange={props.funcaoCaptura}/>
            </div>
            <div>
                <label>Setor</label>
                <input type='text' name='setor' placeholder='Setor' value={props.novaTarefa.setor} onChange={props.funcaoCaptura}/>
            </div>
            <div>
                <label>Descrição</label>
                <textarea name="descricao" cols="30" rows="10" placeholder='Descricão' value={props.novaTarefa.descricao} onChange={props.funcaoCaptura}></textarea>
            </div>
            <div>
                <button type='submit'>Adicionar</button>
            </div>
        </form>
    </>
  )
}

export default formTarefa;