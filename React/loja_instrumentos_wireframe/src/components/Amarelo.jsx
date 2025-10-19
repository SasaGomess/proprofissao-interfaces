import Styles from "./css/Amarelo.module.css"


export default function Amarelo() {
    return (
        <section className={Styles.fundo_amarelo}>
            <div className={Styles.container_azul}>
                <p>Azul</p>
            </div>
            <div className={Styles.container_verde}>
                <p>Verde</p>
            </div>
        </section>
    )
}