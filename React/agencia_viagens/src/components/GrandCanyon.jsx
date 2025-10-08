import Styles from "./css/GrandCanyon.module.css"
import ComponenteProps from "./ComponenteProps"
import BandeiraUS from "../assets/imagens/bandeira_us.png"

export default function GrandCanyon() {
    return (
        <section className={Styles.fundo_grand_canyon}>
            <h1>Venha conhecer o Grand Canyon</h1>
            <ComponenteProps
            lugar="Grand Canyon"
            texto="O Grand Canyon é uma das paisagens mais impressionantes do planeta.
             Suas imensas formações rochosas exibem cores que mudam com a luz do dia, criando um espetáculo natural inesquecível.
             É um lugar onde a grandiosidade da natureza deixa qualquer um sem palavras."
             bandeira={BandeiraUS}
             descricao="Bandeira do Estados Unidos"/>
        </section>
    )
}