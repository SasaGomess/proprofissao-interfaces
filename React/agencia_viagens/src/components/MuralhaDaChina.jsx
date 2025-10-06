import Styles from "./css/MuralhaDaChina.module.css"
import ComponenteProps from "./ComponenteProps"
import BandeiraChina from "../assets/imagens/bandeira_china.png"

export default function MuralhaDaChina(){
    return (
        <section className={Styles.fundo_muralha_china}>
            <h1>Venha conhecer a Muralha Da China</h1>
            <ComponenteProps
            lugar="Muralha Da China"
            texto="A Muralha da China é uma das maiores maravilhas do mundo,
             serpenteando por montanhas e vales com vistas impressionantes.
             Cada pedra conta séculos de história e resistência.
             Caminhar por ela é como viajar no tempo,
             cercado por uma paisagem grandiosa e silenciosa."
            bandeira={BandeiraChina}
            descricao="Bandeira China" />
        </section>
    )
}