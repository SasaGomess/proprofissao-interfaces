import Styles from "./Cabecalho.module.css"

export default function Cabecalho() {
    return (
        <header className={Styles.fundo_cabecalho}>
            <nav className={Styles.cabecalho_nav}>
                <a href="#">Home</a>
                <a href="#hero">Quem Somos</a>
                <a href="#produtos">Instrumentos</a>
                <a href="#endereco">Endereco</a>
                <a href="#contato">Contato</a>
            </nav>
        </header>
    )
}