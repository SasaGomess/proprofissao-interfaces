import Styles from "./css/ContainerRosa.module.css"

export default function ContainerRosa({texto}) {
    return (
        <div className={Styles.fundo_rosa}>
            <p>{texto}</p>
        </div>
    )
}