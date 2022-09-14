import styled from 'styled-components'

const DivHome = styled.div`
width:100%;
height:85vh;
background:#bbf;
h1, p{padding: 20px;}
`

const Home = () =>{
    return(
        <div>
            <h1>Pagina Principal do projeto</h1>
            <p>Projeto para controle de Tarefas</p>
        </div>
    )
}