

import './App.css'

import { Route, Routes } from 'react-router-dom'

import Footer from './Componenets/Footer'
import SideBar from './Componenets/SideBar'
import AboutUsPage from './pages/AboutUsPage'
import HomePage from './pages/HomePage'
import Login from './pages/Login'
import NotFoundpage from './pages/NotFoundpage'
import Signup from './pages/Signup'

function App() {


  return (
    <>
   
    <Routes>
    <Route path="/" element={<HomePage/>}/>
    <Route path="/signup" element={<Signup/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/about" element={<AboutUsPage/>}/>
    
    <Route path="*" element={<NotFoundpage/>}/>

   </Routes> 
   
 
   
    </>
  )
}

export default App


