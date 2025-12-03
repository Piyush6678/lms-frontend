import React from 'react'
import { useNavigate } from 'react-router-dom'

const NotFoundpage = () => {
const navigate=useNavigate()
    return (
    <div className='flex items-center flex-col w-full justify-center h-screen bg-[#1A2238] '  >
        <h1  className='text-white text-9xl font-extrabold tracking-widest ' >  404   </h1>
        <div className='bg-black text-white px-2 text-sm rounded rotate-12 absolute '  >
PAGE NOT FOUND ..
        </div>

     <button className=' mt-5 ' >
        <a className='relative inline-block text-sm font-medium group text-[#FF6A4D]  active:text-yellow-500 focus:outline-none focus:ring ' >
<span  onClick={()=>navigate(-1)} className='realtive block px-8 py-3 bg-[#1A2238]border  border:border-current'>

Go Back

</span>


        </a>
        
     </button>

    </div>
  )
}

export default NotFoundpage
