import React from 'react'

import Footer from '../Componenets/Footer'
import SideBar from '../Componenets/SideBar'

const HomeLayout = ({children}) => {

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
