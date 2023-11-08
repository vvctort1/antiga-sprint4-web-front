import "./_variaveis.scss"
import styled from "styled-components"


export const DivApp = styled.div`
    min-height: 100vh;
`


export const Header = styled.header`
    background-color: var(--roxo3);
    margin: 0;
    height: 15%;
`


export const DivMain = styled.div`   /*Conteúdo das Seções, Login e Tabela*/
    min-height: 78%;
    background-color: gold;
`


export const DivMainHome = styled.div`  /*Conteúdo da Home */
    height: 78%;
    background-color: gold;
    padding: 5% 28%;
`


export const DivMainVeiculos = styled.div`  /*Conteúdo da  */
    height: 78%;
    background-color: gold;
    width: 100%;
    padding: 5% 20%;
    display: flex;
    justify-content: center;
    flex-direction: column;
`

