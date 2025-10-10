import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Suecia from "./components/Suecia";
import Aruba from "./components/Aruba";
import GrandCanyon from "./components/GrandCanyon";
import MuralhaDaChina from "./components/MuralhaDaChina";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <main>
        <Router>
          <Header />

          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/Suecia' element={<Suecia/>} />
            <Route path='/Aruba' element={<Aruba/>} />
            <Route path='/GrandCanyon' element={<GrandCanyon/>} />
            <Route path='/MuralhaDaChina' element={<MuralhaDaChina/>} />
          </Routes>
          
          <Footer />
        </Router>
      </main>
    </>
  );
}

export default App;
