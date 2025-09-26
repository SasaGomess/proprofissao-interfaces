import styles from './Header.module.css'

function Header() {
    return (
        <header>
            <div className={styles.camada_um}>
                <p>Conteudo da camada 1</p>
            </div>
            
            <div className={styles.camada_dois}>
                <p>Conteudo da camada 2</p>
            </div>
        </header>
    )
}

export default Header