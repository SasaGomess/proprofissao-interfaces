import Styles from "./Cabecalho.module.css"
// import { Link } from 'react-router-dom'

export default function Cabecalho() {
    return (
        <header className={Styles.fundo_cabecalho}>
            <nav className={Styles.cabecalho_nav}>
                <a href="#">Home</a>
                <a href="#">Quem Somos</a>
                <a href="#">Instrumentos</a>
                <a href="#">Endereco</a>
                <a href="#">Contato</a>
                
                {/* <Link to="/">Home</Link>
                <Link to="/">Quem Somos</Link>
                <Link to="/">Instrumentos</Link>
                <Link to="/">Endereço</Link>
                <Link to="/">Contato</Link> */}
            </nav>
        </header>
    )
}