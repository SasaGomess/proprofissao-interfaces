import Styles from "./css/Azul.module.css"
import CaixaBranca from "./CaixaBranca"

export default function Azul() {
    return (
        <section className={Styles.fundo_azul}>
            <CaixaBranca 
            texto="Branca"/>
            <CaixaBranca 
            texto="Branca"/>
            <CaixaBranca 
            texto="Branca"/>
            <CaixaBranca 
            texto="Branca"/>
        </section>
    )
}