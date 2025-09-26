import styles from './Conteudo.module.css'
import AsideImages from './AsideImages'
import AsideLE from './AsideLE'
import CameraImage from './CameraImage'
import ConteudoPrincipal from './ConteudoPrincipal'

function Conteudo() {
    return (
        <section className={styles.conteudo}>
            <AsideLE/>
            <ConteudoPrincipal/>
            <CameraImage />
            <AsideImages />
        </section>
    )
}
export default Conteudo