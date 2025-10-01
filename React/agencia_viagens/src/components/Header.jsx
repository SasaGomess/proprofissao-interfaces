import Styles from './css/Header.module.css'
import ViagensLogo from '../assets/imagens/viagens.jpg' 
import Lupa from '../assets/imagens/lupa.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';



function Header() {
    return(
        <header className={Styles.cabecalho}>
            <img src={ViagensLogo} alt="Logo da Travel" className={Styles.cabecalho_logo}/>
            <nav className={Styles.cabecalho_conteudo}>
                <a href="">Home</a>
                <a href="">GrandCanyon</a>
                <a href="">Suécia</a>
                <a href="">Muralhas da China</a>
                <a href="">Aruba</a>
            </nav>
            <div className={Styles.busca}>
                <input type="search" />
            </div>

            <img src={Lupa} alt="Pesquisar" className={Styles.pesquisar} />

        </header>

    )
}
export default Header