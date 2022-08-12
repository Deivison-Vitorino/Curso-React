import { StyleItem } from "./style"
import { Texto } from "./style"

export default function HomePageItem () {

    return(
        <StyleItem>

            <p>Esse projeto foi desenvolvido na atividade da aula 15 no curso de React consumindo a API da PEXELS</p><br></br>
            <p>Os Temas abordados foram:</p>
            <Texto>Estado Global</Texto >
            <Texto>REACT-ROUTER-DOM</Texto >
            <Texto>Props Drilling</Texto >
            <Texto>Estado global</Texto >
            <Texto>Contexto</Texto >
            <Texto>Como construir contextos</Texto >
            <Texto>useContext()</Texto >
            <p>Na aula simulamos um e-comerce onde o usuáriio visualiza os produtos e preços
                podendo adicionar ao carrinho os que forem do seu interesse.</p>
            <p>O usuário também pode visualizar os produtos adicionados ao carrinho navegando entre as páginas podendo
                 excluir os que desejar.</p>
            <p>O objetivo foi criar as rotas utilizando "react-router-dom"</p>
            <p>Para visualizar as funcionalidades navegue entre as paginas através dos botões a cima.</p>
            
        </StyleItem>
    )
}