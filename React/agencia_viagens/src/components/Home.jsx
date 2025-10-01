import styles from "./css/Home.module.css"
import Mala from '../assets/imagens/mala.png'

function Home() {
    return(
        <section className={styles.home_fundo}>

            <img src={Mala} alt="Mala de Viagens" className={styles.home_mala}/>

            <div className={styles.home_conteudo}>
                <h1>Encontre aqui a viagem dos seus sonhos</h1>
                <p>Transforme seus sonhos em realidade! Explore destinos paradisíacos, conheça novas culturas e crie memórias inesquecíveis. Nossa plataforma oferece as melhores opções de pacotes turísticos, com preços acessíveis e atendimento personalizado para tornar sua viagem perfeita do início ao fim.</p>
            </div>
            
        </section>
    )
}
export default Home