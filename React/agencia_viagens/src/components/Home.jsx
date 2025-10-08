import Styles from "./css/Home.module.css"
import Mala from '../assets/imagens/mala.png'

export default function Home() {
    return(
        <section className={Styles.home_fundo}>

            <div className={Styles.home_mala}></div>

            <div className={Styles.home_conteudo}>
                <h1>Encontre aqui a viagem dos seus sonhos</h1>
                <p>Transforme seus sonhos em realidade! Explore destinos paradisíacos, conheça novas culturas e crie memórias inesquecíveis. Nossa plataforma oferece as melhores opções de pacotes turísticos, com preços acessíveis e atendimento personalizado para tornar sua viagem perfeita do início ao fim.</p>
            </div>
            
        </section>
    )
}
