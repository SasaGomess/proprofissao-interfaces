import Styles from "./css/Aruba.module.css"
import ComponenteProps from "./ComponenteProps"
import BandeiraAruba from "../assets/imagens/bandeira_aruba.png"

export default function Aruba() {
    return (
        <section className={Styles.fundo_aruba}>
            <h1>Venha conhecer a Aruba</h1>
            <ComponenteProps
            lugar="Aruba"
            texto="Aruba é um paraíso tropical banhado por águas azul-turquesa e areias brancas que brilham ao sol.
             Suas praias calmas e o clima ensolarado o ano todo fazem dela um refúgio perfeito.
             A hospitalidade e a alegria local completam o cenário de sonho." 
             bandeira={BandeiraAruba}
             descricao="Bandeira da Aruba" />
        </section>
    )
}