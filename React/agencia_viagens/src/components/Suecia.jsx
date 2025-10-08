import Styles from "./css/Suecia.module.css"
import ComponenteProps from "./ComponenteProps"
import BandeiraSuecia from "./../assets/imagens/bandeira_suecia.png"

export default function Suecia() {
    return(
        <section className={Styles.fundo_suecia}>
            <h1>Venha conhecer a Suécia</h1>
            <ComponenteProps
                lugar="Suécia"
                texto="A Suécia encanta com seus lagos cristalinos, 
                florestas infinitas e cidades que combinam tradição e modernidade.
                Estocolmo, com suas ilhas e arquitetura charmosa, é um convite à contemplação. 
                No norte, as luzes da aurora boreal pintam o céu com cores mágicas." 
                bandeira={BandeiraSuecia}
                descricao="Bandeira da Suécia"/>
        </section>
    )
}
