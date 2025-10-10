import Styles from './css/Header.module.css'
import ViagensLogo from '../assets/imagens/viagens.jpg' 
import Lupa from '../assets/imagens/lupa.png'
import { Link } from 'react-router-dom'



export default function Header() {
    return(
        <header className={Styles.cabecalho}>
            <img src={ViagensLogo} alt="Logo da Travel" className={Styles.cabecalho_logo}/>
            <nav className={Styles.cabecalho_conteudo}>
                <Link to='/'>Home</Link>
                <Link to='/GrandCanyon'>Grand Canyon</Link>
                <Link to='/Suecia'>Suécia</Link>
                <Link to='/MuralhaDaChina'>Muralha da China</Link>
                <Link to='/Aruba'>Aruba</Link>
            </nav>
            <div className={Styles.busca}>
                <input type="search" />
            </div>

            <img src={Lupa} alt="Pesquisar" className={Styles.pesquisar} />

        </header>

    )
}
