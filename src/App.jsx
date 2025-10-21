
import { Routes, Route } from "react-router-dom";
import './App.css'

import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import About from './Pages/About'
import Shop from './Pages/Shop'
import Services from './Pages/Services'
import Contact from './Pages/Contact'

function App() {

  return (
    <>
      <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          
        </Routes>
    </>
  )
}

export default App
