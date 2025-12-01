import React from 'react'
import {useDispatch, useSelector} from "react-redux"
import { useNavigate } from 'react-router-dom'

import Footer from '../Componenets/Footer'
import SideBar from '../Componenets/SideBar'

const HomeLayout = ({children}) => {
//   const dispatch=useDispatch()
// const navigate =useNavigate()
// const isLoggedin=useSelector((state)=>state?.auth?.isLogin)

// const role =useSelector((state)=>state?.auth?.role)
  return (
    <>
    {children}
    <SideBar/>
    <Footer/>
  </>
  
  )
}

export default HomeLayout
