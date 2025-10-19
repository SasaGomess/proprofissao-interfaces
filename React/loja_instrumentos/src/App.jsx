import './App.css'
import Cabecalho from './components/Cabecalho/Cabecalho'
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Hero from './components/Hero/Hero'
import Produtos from './components/Produtos/Produtos'
import Endereco from './components/Endereco/Endereco'
import Contato from './components/Contato/Contato'
import Rodape from "./components/Rodape/Rodape"

function App() {
  return (
    <>
    <Cabecalho/>
      <main className='principal'>
        <Hero/>
        <Produtos/>
        <Endereco/>
        <Contato/> 
      </main>
      <Rodape/>
    </>
  )
}

export default App
