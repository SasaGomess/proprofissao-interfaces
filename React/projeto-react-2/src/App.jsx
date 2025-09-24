import './App.css'
import Header from './components/Header'
import Menu from './components/Menu'
import Conteudo from './components/Conteudo'
import Footer from './components/Footer'

function App() {

  return (
    <main className='principal'>
      <Header />
      <Menu />
      <Conteudo/>
      <Footer/>
    </main>
  )
}

export default App
