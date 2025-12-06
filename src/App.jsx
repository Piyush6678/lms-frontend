

import './App.css'

import { Route, Routes } from 'react-router-dom'

import Footer from './Componenets/Footer'
import SideBar from './Componenets/SideBar'
import AboutUsPage from './pages/AboutUsPage'
import CourseList from './pages/Course/CourseList'
import HomePage from './pages/HomePage'
import Login from './pages/Login'
import NotFoundpage from './pages/NotFoundpage'
import Signup from './pages/Signup'
import Contact from './pages/Contact'

function App() {


  return (
    <>
   
    <Routes>
    <Route path="/" element={<HomePage/>}/>
    <Route path="/signup" element={<Signup/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/courses" element={<CourseList/>}/>
    <Route path="/about" element={<AboutUsPage/>}/>
    <Route path="/contact" element={<Contact/>}/>
    
    <Route path="*" element={<NotFoundpage/>}/>

   </Routes> 
   
 
   
    </>
  )
}

export default App


