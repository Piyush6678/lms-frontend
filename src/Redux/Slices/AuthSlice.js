import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

import axiosInstance from "../../Helpers/axiosinstace"


const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
const role = localStorage.getItem("role") || "";
let data = {};
const storedData = localStorage.getItem("data");
if (storedData && storedData !== "undefined" && storedData !== "null") {
  try {
    data = JSON.parse(storedData);
  } catch (error) {
    console.error("Error parsing user data from localStorage:", error);
    localStorage.removeItem("data"); // Clear potential bad data
  }
}

const initialState = {
    isLoggedIn,
    role,
    data
}

export const createAccount=createAsyncThunk("/auth/signup",async(data)=>{
    try {
        const res = axiosInstance.post("user/register",data)
        toast.promise(res,{
            loading:"Wait! creating your account ",
            success:(data)=>{
                return data?.data?.message;
            },
            error:"failed to create account"
        })
        return (await res).data

    } catch (error) {
        toast.error(error?.response?.data?.message)
    }
})

export const login=createAsyncThunk("/auth/login",async(data)=>{
    try {
        const res = axiosInstance.post("user/login",data)
        toast.promise(res,{
            loading:"Wait! authentication in process ",
            success:(data)=>{
                return data?.data?.message;
            },
            error:"failed to login"
        })
        return (await res).data

    } catch (error) {
        toast.error(error?.response?.data?.message)
    }
})

export const logout=createAsyncThunk("/auth/logout",async()=>{
    try {
         const res = axiosInstance.post("user/logout")
        toast.promise(res,{
            loading:"Wait! logout in process ",
            success:(data)=>{
                return data?.data?.message;
            },
            error:"failed to logout"
        })
        return (await res).data
    } catch (error) {
        toast.error(error?.response?.data?.message)
    }
})

export const updateProfile=createAsyncThunk("/user/update/profile",async (data)=>{
    try{
        const response=axiosInstance.put(`user/update/${data[0]}`,data[1])
console.log(response)
        toast.promise(response, {
            loading: "Wait! profile update in progress...",
            success: (data) => {
                console.log("update profile thunk",data)
                return data?.data?.message;
            },
            error: "Failed to update profile"
        });
        return (await response).data;



    }catch(e){
        toast.error(e.response?.data?.message)
    }
})

export const getUserData = createAsyncThunk("/user/details", async () => {
    try {
        const res = axiosInstance.get("user/me");
        return (await res).data;
    } catch(error) {
        toast.error(error.message);
    }
})






const authSlice=createSlice({
    name:"auth",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(createAccount.fulfilled,(state,action)=>{
            localStorage.setItem("data",JSON.stringify(action?.payload?.user));
            localStorage.setItem("isLoggedIn",true);
            localStorage.setItem("role",action?.payload?.user?.role)
            state.isLoggedIn=true
            state.data=action?.payload?.user
            state.role=action?.payload?.user?.role
        })
        .addCase(login.fulfilled,(state,action)=>{
            localStorage.setItem("data",JSON.stringify(action?.payload?.user));
            localStorage.setItem("isLoggedIn",true);
            localStorage.setItem("role",action?.payload?.user?.role)
            state.isLoggedIn=true
            state.data=action?.payload?.user
            state.role=action?.payload?.user?.role
        })
        .addCase(logout.fulfilled,(state)=>{
            localStorage.clear();
            state.data={};
            state.isLoggedIn=false;
            state.role=""
        })
        .addCase(getUserData.fulfilled, (state, action) => {
            if(!action?.payload?.user) return;
            localStorage.setItem("data", JSON.stringify(action?.payload?.user));
            localStorage.setItem("isLoggedIn", true);
            localStorage.setItem("role", action?.payload?.user?.role);
            state.isLoggedIn = true;
            state.data = action?.payload?.user;
            state.role = action?.payload?.user?.role;
        })
    }
})





// export const{}=authSlice.actions
export default authSlice.reducer