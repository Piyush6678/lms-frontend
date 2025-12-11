import { configureStore } from "@reduxjs/toolkit";

import authSliceReducer from "./Slices/AuthSlice"
import courseSliceReducer from "./Slices/CourseSlice"
import lectureSlice from "./Slices/LectureSlice";
import razorpaySlice from "./Slices/RazorpaySlice"
import statSliceReducer from "./Slices/StatSlice"
const store=configureStore({
    reducer:{
        auth:authSliceReducer,
        course:courseSliceReducer,
        razorpay:razorpaySlice,
        lecture:lectureSlice,
        stat: statSliceReducer,
    },
    devTools:true
})


export default store