import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'

import HomeLayout from '../layouts/HomeLayout'
import { login } from '../Redux/Slices/AuthSlice'

const Login = () => {

    const dispatch=useDispatch()
    const navigate=useNavigate()



const[loginData,setLoginData]=useState({
   
    email:"",
    password:"",
  
})
function handleUserInput(e){
    const{name,value}=e.target;
    setLoginData((prev)=>({...prev,[name]:value}))

}




async function onLogin(event){
    event.preventDefault()

if(!loginData.email  ||!loginData.password){
   toast.error("Please fill all the details")
    return 
}




 // dispatch create account action
        const response = await dispatch(login(loginData));
        if(response?.payload?.success){

            navigate("/");
        }

setLoginData({
      
    email:"",
    password:"",
   

});


}



    return (
    <HomeLayout>
      <div className='flex overflow-x-auto items-center justify-center h-screen '>
        <form noValidate onSubmit={onLogin} className='flex flex-col justify-center gap-3 rounded-lg p-4 text-white w-96 shadow-[0_0_10px_black]'>
<h1 className='text-center text-2xl font-bold' >Login Page</h1>


<div className='flex flex-col gap-1' >
<label htmlFor="email" className='font-semibold'  >Name</label>
<input 
type='email'
required
name="email"
id="email"
placeholder="enter Your email"
className='bg-transparent px-2 pt-1 border'

value={loginData.email}
onChange={handleUserInput}
/>


</div>
<div className='flex flex-col gap-1' >
<label htmlFor="password" className='font-semibold'  >Password</label>
<input 
type='password'
required
name="password"
id="password"
placeholder="enter Your password"
className='bg-transparent px-2 pt-1 border'

value={loginData.password}
onChange={handleUserInput}

/>


</div>

<button type="submit" className='mt-2 bg-yellow-500 transitionall ease-in-out duration-300 rounded-sm py-2 font-semibold text-lg cursor-pointer ' >
Login
</button>
<p className="text-center" > Dont  have an account? <Link to ="/signup"className="link text-accent cursor-pointer">SignUp</Link> </p>
        </form>


      </div>
    </HomeLayout>
  )
}

export default Login
