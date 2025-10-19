import './App.css'
import Imagem from './assets/react.svg'

function App() { 
  let versao = 19.2;

  let nome = "React js";

  return(
    <>
      <p>Texto</p>
      <img src={Imagem} alt="Logo react"/>
      <p>O nome é {nome} e sua última versao é {versao}</p>
    </>
  )
}
export default App;

