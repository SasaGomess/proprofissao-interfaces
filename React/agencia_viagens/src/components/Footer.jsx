import Styles from './css/Footer.module.css'
import Facebook from '../assets/imagens/facebook.png'
import Instagram from '../assets/imagens/instagram.png'
import TikTok from '../assets/imagens/tiktok.png'
import WhatsApp from '../assets/imagens/whats.png'

export default function Footer() {
    return(
        <footer className={Styles.rodape_fundo}>
            <p>Nos siga nas nossas Redes Sociais</p>
            <div className={Styles.rodape_logos}>
                <img src={Facebook} alt="Facebook" className={Styles.logos} />
                <img src={Instagram} alt="Instagram" className={Styles.logos}  />
                <img src={TikTok} alt="TikTok" className={Styles.logos}  />
                <img src={WhatsApp} alt="WhatsApp" className={Styles.logos}  />
            </div>
            <p>@Copyright</p>
        </footer>
    )
}

