
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Footer from './Components/Footer/Footer'
import Gallery from './Pages/Gallery/Gallery'
import Login from './Pages/Login/Login'
import Register from './Pages/Register/Register'

function App() {

  return (
    <>
      <Navbar />

      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/' element={<Home />} />
        <Route path='/gallery' element={<Gallery />} />
        
      </Routes>

      <Footer />
    </>
  )
}

export default App
