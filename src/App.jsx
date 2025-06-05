import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import Header from "./components/Header"
import Home from "./components/Home"
import Education from "./components/Education"
import Services from "./components/Services"
import Contact from "./components/Contact"
import Footer from "./components/Footer"


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Header />
        <Home />
        <Education />
        <Services />
        {/* <Contact /> */}
        <Footer />
    </>
  )
}

export default App
