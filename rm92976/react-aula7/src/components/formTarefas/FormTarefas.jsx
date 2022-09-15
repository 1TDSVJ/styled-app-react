import styled from 'styled-components'
import React from 'react'

const DivForm = styled.div`
width: 100%;
padding: 20px;
background-color:#993;

form{width:50%; margin:auto;}
form input, form textarea{padding:5px; width:80%;}
form textarea{height:80px;}
form button{padding:10px; background: #3c3; color:#fff;}
`

export default function FormTarefas(props){


    return (
        <div>
            <form method="post" onSubmit={props.funcaoAddTarefa}>
                <div>
                <label > Titulo</label>
                    <input name="titulo" type="text "placeholder="Titulo" value={props.novaTarefa.titulo}
                    onChange={props.funcaoCaptura} />
                    
                </div>
                <div>
                    <label >Setor</label>
                    <input name="setor" type="text "placeholder="Setor" value={props.novaTarefa.setor}
                   onChange={(props.oQueFoiDigitado)}/>
                </div>
                <div>
                    <label>Descrição</label>
                    <textarea name="descricao" placeholder="Descrição"
                  cols="30" rows="10" value={props.novaTarefa.descricao}
                  onChange={props.oQueFoiDigitado}></textarea>
                </div>
                <button type="submit">Adicionar</button>
            </form>
        </div>
    )
}
