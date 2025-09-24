import styles from './Conteudo.module.css'
import imagem from '../assets/all images/study.gif'

function Conteudo() {

    return (
        <section className='conteudo'>
            <p>Conteudo da pagina</p>
            <div>
                <img src={imagem} alt="gif estudos"/>
            </div>
        </section>
    )

}
export default Conteudo