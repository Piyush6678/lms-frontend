import React, { useState } from 'react'
import { BsPersonCircle } from 'react-icons/bs'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'

import HomeLayout from '../layouts/HomeLayout'
import toast from 'react-hot-toast'
import { createAccount } from '../Redux/Slices/AuthSlice'

const Signup = () => {

    const dispatch=useDispatch()
    const navigate=useNavigate()

const [previewImage,setPreviewImage]=useState("")

const[signUpData,setSignUpData]=useState({
    fullName:"",
    email:"",
    password:"",
    avatar:""
})
function handleUserInput(e){
    const{name,value}=e.target;
    setSignUpData((prev)=>({...prev,[name]:value}))

}


function getImage(event){
    event.preventDefault();
    const uploadedImage=event.target.files[0];
    if(uploadedImage){
        setSignUpData((prev)=>({...prev,avatar:uploadedImage}))

        const fileReader=new FileReader();
        fileReader.readAsDataURL(uploadedImage)
        fileReader.addEventListener("load",function(){
            setPreviewImage(this.result)
        })




    }
}

async function createNewAccount(event){
    event.preventDefault()

if(!signUpData.email ||!signUpData.fullName ||!signUpData.password){
   toast.error("Please fill all the details")
    return 
}

//  checking name length
if(signUpData.fullName.length<3){
 toast.error("   name should be atleast of 3 character")
 return 
}
if(!signUpData.email.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)){
 toast.error("   invalid email id ")
 return 
}
if(!signUpData.password.match(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/)) {
            toast.error("Password should be 6 - 16 character long with atleast a number and special character");
            return;
        }
const formData=new FormData();
formData.append("fullName",signUpData.fullName);
formData.append("email",signUpData.email);
formData.append("password",signUpData.password);
signUpData.avatar&&formData.append("avatar",signUpData.avatar);

 // dispatch create account action
        const response = await dispatch(createAccount(formData));
        if(response?.payload?.success){

            navigate("/");
        }

setSignUpData({
      fullName:"",
    email:"",
    password:"",
    avatar:""

});
setPreviewImage("")

}



    return (
    <HomeLayout>
      <div className='flex overflow-x-auto items-center justify-center h-screen '>
        <form noValidate onSubmit={createNewAccount} className='flex flex-col justify-center gap-3 rounded-lg p-4 text-white w-96 shadow-[0_0_10px_black]'>
<h1 className='text-center text-2xl font-bold' >RegisterationPage</h1>
<label htmlFor='image_uploads' className='cursor-pointer'>
{previewImage?(<img className='w-24 h-24 rounded-full m-auto 'src={previewImage}/>):(

<BsPersonCircle className='w-24 h-24 rounded-full m-auto'/>

)}


</label>
<input 
className='hidden'
type="file"
name="image_uploads"
id="image_uploads"
accept=".jpg ,.jpeg,.png,.svg"
onChange={getImage}

/>
<div className='flex flex-col gap-1' >
<label htmlFor="fullName" className='font-semibold'  >Name</label>
<input 
type='text'
name="fullName"
id="fullName"
placeholder="enter Your full Name.."
className='bg-transparent px-2 pt-1 border'
value={signUpData.fullName}
onChange={handleUserInput}
/>

</div>
<div className='flex flex-col gap-1' >
<label htmlFor="email" className='font-semibold'  >Name</label>
<input 
type='email'
required
name="email"
id="email"
placeholder="enter Your email"
className='bg-transparent px-2 pt-1 border'

value={signUpData.email}
onChange={handleUserInput}
/>


</div>
<div className='flex flex-col gap-1' >
<label htmlFor="password" className='font-semibold'  >Name</label>
<input 
type='password'
required
name="password"
id="password"
placeholder="enter Your password"
className='bg-transparent px-2 pt-1 border'

value={signUpData.password}
onChange={handleUserInput}

/>


</div>

<button type="submit" className='mt-2 bg-yellow-500 transitionall ease-in-out duration-300 rounded-sm py-2 font-semibold text-lg cursor-pointer ' >
Create account
</button>
<p className="text-center" > Already have an account? <Link to ="/Login"className="link text-accent cursor-pointer">Login</Link> </p>
        </form>


      </div>
    </HomeLayout>
  )
}

export default Signup
