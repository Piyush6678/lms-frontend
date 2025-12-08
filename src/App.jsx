

import './App.css'

import { Route, Routes } from 'react-router-dom'

import Footer from './Componenets/Footer'
import SideBar from './Componenets/SideBar'
import AboutUsPage from './pages/AboutUsPage'
import Contact from './pages/Contact'
import CourseDescription from './pages/Course/CourseDescription'
import CourseList from './pages/Course/CourseList'
import CreateCourse from './pages/Course/CreateCourse'
import Denied from './pages/Denied'
import HomePage from './pages/HomePage'
import Login from './pages/Login'
import NotFoundpage from './pages/NotFoundpage'
import Signup from './pages/Signup'
import EditProfile from './pages/User/EditProfile'
import Profile from './pages/User/Profile'

function App() {


  return (
    <>
   
    <Routes>
    <Route path="/" element={<HomePage/>}/>
    <Route path="/signup" element={<Signup/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/courses" element={<CourseList/>}/>
    <Route path="/courses/description" element={<CourseDescription/>}/>
    <Route path="/about" element={<AboutUsPage/>}/>
    <Route path="/contact" element={<Contact/>}/>
    <Route path="/denied" element={<Denied/>}/>
    
    <Route element={<RequiredAuth allowedRoles={["ADMIN"]}/> } >
    <Route path ="/course/create" element={<CreateCourse/>}/>
    
    
    </Route>

        <Route element={<RequireAuth allowedRoles={["ADMIN", "USER"]} />}>
          <Route path='/user/profile' element={<Profile />} />
                <Route path='/user/editprofile' element={<EditProfile />} />
        </Route>

    <Route path="*" element={<NotFoundpage/>}/>

   </Routes> 
   
 
   
    </>
  )
}

export default App


