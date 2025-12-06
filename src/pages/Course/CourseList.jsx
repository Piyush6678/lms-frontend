import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import CourseCard from '../../Componenets/CourseCard'
import { getAllCourses } from '../../Redux/Slices/CourseSlice'

const CourseList = () => {
    const dispatch=useDispatch()
    const {courseData}=useSelector((state)=>state.course)
async function loadCourses(){
    await dispatch(getAllCourses());

}
    useEffect(()=>{
loadCourses()
},[])


    return (
    <HomeLayout>
      <div className='min-h-[90vh] pt-12 pl-29 flex flex-col gap-10 text-white '  >
        <h1 className='text-center text-3xl font-semibold mb-5 ' >
        <span className='font-bols text-yellow-500' >
        Industry experts


        </span>


        </h1>
        <div className='font-bold text-yellow-500'>
        {courseData?.map((element)=>{
            return <CourseCard key={element.id}data={element}/>
        })}
        </div>

      </div>
    </HomeLayout>
  )
}

export default CourseList
