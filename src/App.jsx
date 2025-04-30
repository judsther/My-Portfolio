import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./assets/pages/Home/Home"
import Projects from "./assets/components/Projects/Projects"
//import Navbar from "./assets/components/Navbar/Navbar"
//import Footer from "./assets/components/Footer"
import Contact from "./assets/pages/Contact/Contact"
import QuienesSomos from "./assets/pages/QuienesSomos/QuienesSomos"


function App() {

  return (
    <BrowserRouter>
    
      <Routes>
        <Route path="/contacto" element={<Contact />} />
        <Route path="/proyectos" element={<Projects />} />
        <Route path="/" element={<Home />} />
        <Route path="/contacto" element={<Contact />} />
        <Route path="/somos" element={<QuienesSomos />} />
      </Routes>
    
    </BrowserRouter>
  );
}

export default App
