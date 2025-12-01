

import './App.css'

import { Route, Routes } from 'react-router-dom'

import Footer from './Componenets/Footer'
import SideBar from './Componenets/SideBar'
import AboutUsPage from './pages/AboutUsPage'
import HomePage from './pages/HomePage'

function App() {


  return (
    <>
   
    <Routes>
    <Route path="/" element={<HomePage/>}/>
    <Route path="/about" element={<AboutUsPage/>}/>

   </Routes> 
   
 
   
    </>
  )
}

export default App


