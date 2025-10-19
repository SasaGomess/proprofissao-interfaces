import Styles from "./css/CaixaBranca.module.css"

export default function CaixaBranca({texto}) {
    return (
        <div className={Styles.fundo_branco}>
            <p>{texto}</p>
        </div>
    )
}