import {Link} from 'react-router-dom'
import styled from 'styled-components'

const DivMenu = styled.div`
    background-color: #999;
    height: 15vh;
    display: flex;
    justify-content: center;
    ul{display:flex;}
    ul li{list-style:none;}
    ul li a{display: inline-block; text-decoration:none; padding: 20px; color:#fff; font-size: 1.5em;}
`

export default function Menu() {

    return(
        <DivMenu>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/tarefa">Tarefa</Link></li>
            </ul>
        </DivMenu>
    )
}