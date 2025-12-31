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
            error:"failed to get courses"


        });
      
        return (await response).data.courses
    } catch (error) {
        toast.error(error?.response?.data?.message)
    }
})

export const createNewCourse=createAsyncThunk("/course/create",async(data)=>{
    try {
        let formData=new FormData();
        formData.append("title",data?.title)
        formData.append("description",data?.description)
        formData.append("category",data?.category)
        formData.append("createdBy",data?.createdBy)
        formData.append("thumbnail",data?.thumbnail)
        console.log("formdata from create course",formData)
        const response =axiosInstance.post("/courses",formData);
        toast.promise(response,{
            loading:"Creating New Course",
            success:"Course Created Successfully",
            error:"Course Creation Failed",
        })
        return (await response).data
    } catch (error) {
        toast.error(error?.respone?.data?.maeesage)
    }
})
export const deleteCourse = createAsyncThunk("/course/delete", async (id) => {
    try {
        const response = axiosInstance.delete(`/courses/${id}`);
        toast.promise(response, {
            loading: "deleting course ...",
            success: "Courses deleted successfully",
            error: "Failed to delete the courses",
        });

        return (await response).data;
    } catch(error) {
        toast.error(error?.response?.data?.message);
    }
});


export const updateCourse = createAsyncThunk("/course/update", async (data) => {
    try {


        let formData = new FormData();
        formData.append("title", data?.title);
        formData.append("category", data?.category);
        formData.append("createdBy", data?.createdBy);
        formData.append("description", data?.description);
        if (data.thumbnail) {
            formData.append("thumbnail", data.thumbnail);
        }

        const response = axiosInstance.put(`/courses/${data.id}`, formData);
        toast.promise(response, {
            loading: "Updating Course...",
            success: "Course Updated Successfully",
            error: "Failed to update course",
        });

        return (await response).data;
    } catch (error) {
        toast.error(error?.response?.data?.message);
    }
});


const courseSlice=createSlice({
    name:"course",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
builder.addCase(getAllCourses.fulfilled,(state,action)=>{
    if(action.payload){
        state.courseData=[...action.payload]
    }
})
    }

})


export default courseSlice.reducer




