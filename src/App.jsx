
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Logement from "./pages/Logement.jsx";
import About from "./pages/About.jsx";
import Error from "./pages/Error.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";

export default function App(){
  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/logement/:id" element={<Logement/>} />
        <Route path="/about" element={<About/>} />
        <Route path="*" element={<Error/>} />
        <Route path="/404" element={<Error />} />
      </Routes>
      <Footer/>
    </>
  )
}
