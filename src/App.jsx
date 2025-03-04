import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./assets/pages/Home/Home"
import Projects from "./assets/components/Projects/Projects"
import Navbar from "./assets/components/Navbar/Navbar"
import Footer from "./assets/components/Footer"
import Contact from "./assets/pages/Contact/Contact"


function App() {

  return (
    
   <BrowserRouter>
     <Navbar />
   <Routes>
   <Route path="/proyectos" element={<Projects/>} />
   <Route path="/" element={<Home/>} />
   <Route path="/contacto" element={<Contact/>} />

   </Routes>
   <Footer />
    </BrowserRouter>
 
  
  )
}

export default App
