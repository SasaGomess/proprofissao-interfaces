import Styles from "./Rodape.module.css";
import Whats from "../../assets/imagens_atividade_violão/imagens/whats.png"
import Insta from "../../assets/imagens_atividade_violão/imagens/insta.png"
import Face from "../../assets/imagens_atividade_violão/imagens/face.png"

export default function Rodape() {
  return (
    <footer className={Styles.fundo_rodape}>
      <p>Nossa Loja - Instrumentos Musicais</p>
      <p>Rua Tito, 54 - Lapa</p>
      <p>São Paulo - Brasil</p>
      <div className={Styles.redes_sociais_icons}>
        <img src={Whats} alt="WhatsApp" />
        <img src={Insta} alt="Instagram" />
        <img src={Face} alt="Facebook" />
      </div>
    </footer>
  );
}
