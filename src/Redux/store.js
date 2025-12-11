import { configureStore } from "@reduxjs/toolkit";

import authSliceReducer from "./Slices/AuthSlice"
import courseSliceReducer from "./Slices/CourseSlice"
import razorpaySlice from "./Slices/RazorpaySlice"
const store=configureStore({
    reducer:{
        auth:authSliceReducer,
        course:courseSliceReducer,
        razorpay:razorpaySlice
    },
    devTools:true
})


export default store