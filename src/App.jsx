

import './App.css'

import { Route, Routes } from 'react-router-dom'

import RequireAuth from './Componenets/Auth/RequireAuth'
import AboutUsPage from './pages/AboutUsPage'
import Contact from './pages/Contact'
import CourseDescription from './pages/Course/CourseDescription'
import CourseList from './pages/Course/CourseList'
import CreateCourse from './pages/Course/CreateCourse'
import AddLecture from './pages/Dashboard/AddLectures'
import AdminDashboard from './pages/Dashboard/AdminDashboard'
import Displaylectures from './pages/Dashboard/DisplayLectures'
import Denied from './pages/Denied'
import HomePage from './pages/HomePage'
import Login from './pages/Login'
import NotFoundpage from './pages/NotFoundpage'
import Checkout from './pages/Payments/Checkout'
import CheckoutFailure from './pages/Payments/CheckoutFailure'
import CheckoutSuccess from './pages/Payments/CheckoutSuccess'
import Signup from './pages/Signup'
import EditCourse from './pages/Course/EditCourse'
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
    <Route path="/course/description" element={<CourseDescription/>}/>
    <Route path="/about" element={<AboutUsPage/>}/>
    <Route path="/contact" element={<Contact/>}/>
    <Route path="/denied" element={<Denied/>}/>
    
    <Route element={<RequireAuth allowedRoles={["ADMIN"]}/> } >
    <Route path ="/course/create" element={<CreateCourse/>}/>
    <Route path ="/course/edit" element={<EditCourse/>}/>
    <Route path="/course/addlecture" element={<AddLecture />} />
    <Route path="/admin/dashboard" element={<AdminDashboard />} />
    </Route>

        <Route element={<RequireAuth allowedRoles={["ADMIN", "USER"]} />}>
          <Route path='/user/profile' element={<Profile />} />
                <Route path='/user/editprofile' element={<EditProfile />} />
                <Route path='/checkout' element={<Checkout />} />
        <Route path='/checkout/success' element={<CheckoutSuccess />} />
    <Route path='/course/displaylectures' element={<Displaylectures />}/>
    <Route path='/checkout/fail' element={<CheckoutFailure />} />
        </Route>

    <Route path="*" element={<NotFoundpage/>}/>

   </Routes> 
   
 
   
    </>
  )
}

export default App


