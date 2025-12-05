import React, { useState } from 'react'
import { AiFillCloseCircle } from "react-icons/ai";
import { FiMenu } from "react-icons/fi"
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

import { logout } from '../Redux/Slices/AuthSlice';
const SideBar = () => {
const isLoggedin=useSelector((state)=>state?.auth?.isLogin)
const navigate=useNavigate()
const role =useSelector((state)=>state?.auth?.role)
const [isOpen,setIsOpen ]=useState(false)
const dispatch=useDispatch()
async function handleLogout(e){
    e.preventDefault();
     const res = await dispatch(logout())
    if(res?.payload?.success)
        navigate("/")
    
}

    return ( 
<>

{!isOpen &&  (<FiMenu  
                            onClick={()=>setIsOpen(true)}
                            size={"32px"} 
                            className=" fixed top-1 left-1  font-bold text-white m-4 z-50 "
                        />)}
<div className={`fixed bg-black/50 inset-0 z-30  transition-opacity duration-300 ${
isOpen? "opacity-100 visible ":"opacity-0 invisible"} `}  

onClick={()=>setIsOpen(false)}
/>
        <div className={`min-h-[90vh] w-fit  fixed top-0 left-0 z-50 bg-gray-800 transition-translate duration-300  ${isOpen? 'translate-x-0':'-translate-x-full' }`} >




            <div className=" h-[90vh]  left-0 ">
              
                
                <div className="h-[90vh]">
                    
                    <ul className="menu h-[100%] p-4 w-48 sm:w-80  text-base-content relative">
                        <li className="w-fit absolute right-2 z-50">
                            <button onClick={()=>setIsOpen(false)}>
                                <AiFillCloseCircle size={24} />
                            </button>
                        </li>
                        <li>
                            <Link to="/">Home</Link>
                        </li> 
                            {isLoggedin && role === "ADMIN" && (
                                <li>
                                    <Link to="/admin/dashboard">Admin Dashboard</Link>
                                </li>
                            )}
                        <li>
                            <Link to="/courses">All Courses</Link>
                        </li>

                        <li>
                            <Link to="/contact">Contact Us</Link>
                        </li>

                        <li>
                            <Link to="/about">About Us</Link>
                        </li  >
                                {!isLoggedin && ( 
                                    <li className='absolute  bottom-4 w-[90%]'  >   
                                    <div className='w-full flex items-center justify-center ' >
                                        <button  className='btn btn-primary px-4 py-1  font-semibold rounded-md w-1/2 '  >  
                                            <Link to="/login" >Login</Link>
                                             </button>
                                        <button  className='btn btn-secondary px-4 py-1  font-semibold rounded-md w-1/2 '  >  
                                            <Link to="/signup" >Signup</Link>
                                             </button>
                                    </div></li>
                                )}
                                {isLoggedin && ( 
                                    <li className=' absolute bottom-4 w-[90%]'  >   
                                    <div className='w-full flex items-center justify-center ' >
                                        <button  className='btn btn-primary px-4 py-1  font-semibold rounded-md w-1/2 '  >  
                                            <Link to="/user/profile" >Profile</Link>
                                             </button>
                                        <button  className='btn btn-secondary px-4 py-1  font-semibold rounded-md w-1/2 ' onClick={handleLogout} >  
                                            Logout
                                             </button>
                                    </div></li> 
                                )}



                    </ul>
                </div>
            </div>

           
        </div>
        
    </>
    )
}

export default SideBar
