import { Header } from "../css/styled";
import { Link } from "react-router-dom";


export default function Cabecalho() {
  return (
    <Header>
        <h1>EcoUrban</h1>
        <p>Diminuindo a poluição, um carro de cada vez.</p>

        <nav>
            <ul>
                <li><Link to="/smartcities">SmartCities</Link></li>
                <li><Link to="/problema">Problema</Link></li>
                <li><Link to="/individuais">Deveres Individuais</Link></li>
                <li><Link to="/coletivos">Deveres Coletivos</Link></li>
                <li><Link to="/ideia">Nossa Idéia</Link></li>
                <li><Link to="/pontosNegativos">Pontos Negativos</Link></li>
            </ul>
        </nav>
    </Header>
  )
}
