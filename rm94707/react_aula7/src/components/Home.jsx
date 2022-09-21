import styled from 'styled-components'
import Menu from './Menu'

const DivHome = styled.div`
    width: 100%;
    height: 85vh;
    background-color: #bbf;
    h1, p{padding:20px}
`

export default function Home() {

    return(
        <div>
            <Menu/>
            <h1>Página principal do projeto</h1>
            <p>Projeto para controle de Tarefas.</p>
        </div>
    )
}