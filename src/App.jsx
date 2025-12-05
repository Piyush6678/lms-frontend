

import './App.css'

import { Route, Routes } from 'react-router-dom'

import Footer from './Componenets/Footer'
import SideBar from './Componenets/SideBar'
import AboutUsPage from './pages/AboutUsPage'
import HomePage from './pages/HomePage'
import NotFoundpage from './pages/NotFoundpage'
import Signup from './pages/Signup'

function App() {


  return (
    <>
   
    <Routes>
    <Route path="/" element={<HomePage/>}/>
    <Route path="/Signup" element={<Signup/>}/>
    <Route path="/about" element={<AboutUsPage/>}/>
    
    <Route path="*" element={<NotFoundpage/>}/>

   </Routes> 
   
 
   
    </>
  )
}

export default App


