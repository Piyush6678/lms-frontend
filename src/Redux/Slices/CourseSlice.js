import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import toast from "react-hot-toast"

import axiosInstance from "../../Helpers/axiosinstace"

const initialState={
    courseData:[]
}

export const getAllCourses=createAsyncThunk("/course/get",async ()=>{
    try {
        const response=axiosInstance.get("/courses")
        toast.promise(response,{
            loding:"loding all courses",
            success:"Courses loaded successfully",
            errpr:"failed to get courses"


        });
        return (await response).data.courses
    } catch (error) {
        toast.error(error?.response?.data?.message)
    }
})

 const courseSlice=createSlice({
    name:"course",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
builder.addCase(getAllCourses.fulfilled,(state,action)=>{
    if(action.payload){
        state.courseData={...action.payload}
    }
})
    }

})


export default courseSlice.reducer




