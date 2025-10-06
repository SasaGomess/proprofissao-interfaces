import Styles from "./css/ComponenteProps.module.css"

export default function ComponenteProps({lugar, texto, bandeira, descricao}) {
    return (
        <div className={Styles.corpo_texto}>
            <h2>Venha conhecer esse lugar incrível {lugar}! </h2>
            <p>{texto}</p>
                <img src={bandeira} className={Styles.imagem_props} alt={descricao} />
        </div>
    )
}