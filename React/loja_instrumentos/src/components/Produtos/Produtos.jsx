import Styles from "./Produtos.module.css"
import Produto from "./Produto"

export default function Produtos() {
    return (
        <section className={Styles.fundo_produtos}>
            <Produto/>
            <Produto />
            <Produto />
            <Produto />
        </section>
    )
}