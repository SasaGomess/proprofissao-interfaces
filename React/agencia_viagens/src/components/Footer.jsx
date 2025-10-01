import styles from './css/Footer.module.css'
import Facebook from '../assets/imagens/face.jfif'
import Instagram from '../assets/imagens/insta.jfif'
import TikTok from '../assets/imagens/tiktok.jpg'
import WhatsApp from '../assets/imagens/whats.jpg'

function Footer() {
    return(
        <footer className={styles.rodape_fundo}>
            <p>Nos siga nas nossas Redes Sociais</p>
            <div className={styles.rodape_logos}>
                <img src={Facebook} alt="Facebook" className={styles.logos} />
                <img src={Instagram} alt="Instagram" className={styles.logos}  />
                <img src={TikTok} alt="TikTok" className={styles.logos}  />
                <img src={WhatsApp} alt="WhatsApp" className={styles.logos}  />
            </div>
            <p>@Copyright</p>
        </footer>
    )
}

export default Footer