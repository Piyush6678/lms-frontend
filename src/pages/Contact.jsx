import React, { useState } from 'react'
import toast from 'react-hot-toast'

import axiosInstance from '../Helpers/axiosinstace'
import { isEmail } from '../Helpers/regrexMatcher'
import HomeLayout from '../layouts/HomeLayout'

const Contact = () => {
    const [userInput,setUserInput]=useState({
name:"",
email:"",
message:"",

    })

    function handleInputChange(e){
        const {name,value}=e.target
        setUserInput((prev)=>({...prev,[name]:value}))
    }

async function onFormSubmit(e){
    e.preventDefault();
    if(!userInput.email||!userInput.name || !userInput.message){
        toast.error("All fields are mandatoru");
        return 
    }
    if(!isEmail(userInput.email)){
        toast.error("Invalid  Email")
        return 
    }
    try {
        const res=axiosInstance.post("/contact",userInput);

        toast.promise(res,{
            loading:"submitting your request",
            success:" form submitted successfully  ",
            error:"failed to submit the form"
        })
        const contactResponse=await res;
        if(contactResponse?.data.success){
            setUserInput({
                name:"",
                email:"",
                message:""


            })
        }


    } catch (error) {
        toast.error("operation failed",error)
    }


}

  return (
    <HomeLayout>
      <div  className='flex items-center justify-center h-screen'>

    <form 
    noValidate
    className='flex flex-col justify-center items-center p-5 gap-2  shadow-[0_0_10px_black] w-88  rounded-md text-white '
    >
<h1 className="text-3xl font-semibold" >  Contact Form</h1>

<div className='flex flex-col gap-1' ><label className='text-xl font-semibold ' htmlFor='name' >name</label><input className='bg-transparent border px-2 py-1 rounded-sm'
placeholder='enter your name' 
id="name" 
type='text'  name="name" onChange={handleInputChange} value={userInput.name} ></input></div>
<div className='flex flex-col gap-1' ><label className='text-xl font-semibold ' htmlFor='email' >email</label><input  className='bg-transparent border px-2 py-1 rounded-sm' id="email" 
type='email'  name="email" onChange={handleInputChange} 
placeholder='enter your email'
value={userInput.email} ></input></div>
<div className='flex flex-col gap-1' ><label className='text-xl font-semibold ' htmlFor='message' >message</label><input 
placeholder='enter your message' 
className='bg-transparent border px-2 py-1 rounded-sm' id="message" 
type='text'  name="message" onChange={handleInputChange} value={userInput.message} ></input></div>

<button 

onClick={onFormSubmit}
className='wfull bg-yellow-600 hover:bg-yellow-500 transition-all ease-in-out rounded-sm py-2 px-4 font-semibold text-lg cursor-pointer ' >Submit</button>

    </form>


      </div>

    </HomeLayout>
  )
}

export default Contact
