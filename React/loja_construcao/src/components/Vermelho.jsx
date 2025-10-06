import Styles from "./css/Vermelho.module.css"
import ContainerRosa from "./ContainerRosa"

export default function Vermelho() {
    return (
        <section className={Styles.fundo_vermelho}>
            <ContainerRosa
            texto="Rosa" />
            <ContainerRosa
            texto="Rosa"  />
        </section>
    )
}