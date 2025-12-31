import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const CourseCard = ({data}) => {
  const navigate=useNavigate()
  const { role } = useSelector((state) => state.auth);

  
    return (
    <div
    onClick={()=>navigate("/course/description/" ,{state:{...data}} )}
    className='
    cursor-pointer group overflow-hidden bg-zinc-700 text-white w-[22rem ] h-[430px] shadow-lg rounded-lg'
    
    >
      <div className='overflow-hidden' >
        <img 
        className='h-48 w-full rounded-tr-lg group-hover:scale=[1,2] transition-all ease-in-out duration-300'
        src={data?.thumbnail?.secure_url} alt="course thumbnail" />
<div className='p-3 space-y-1 text-white' > <h2 className='text-xl fint-bold text-yellow-500 line-clamp-2' >
    {data?.title}
    </h2> <p className='line-clamp-2' > {data?.description} </p> 
    <p className='font-semibold' >  <span className='text-yellow-500 font-bold'  > Category :  </span>
    {data?.category}
    
    </p>
     <p className="font-semibold">
                        <span className="text-yellow-500 font-bold">Total lectures : </span>
                        {data?.numberoflectures}
                    </p>
                    <p className="font-semibold">
                        <span className="text-yellow-500 font-bold">Instructor : </span>
                        {data?.createdBy}
                    </p>

     </div>
      </div>
      {role === "ADMIN" && (
        <div className="flex items-center justify-between gap-2 p-2">
            <button
                onClick={(e) => {
                    e.stopPropagation();
                    navigate("/course/edit", { state: { ...data } });
                }}
                className="bg-green-500 hover:bg-green-600 text-white px-2 py-1 rounded-md font-bold w-full"
            >
                Edit
            </button>
            <button
                onClick={(e) => {
                    e.stopPropagation();
                    navigate("/course/addlecture", { state: { ...data } });
                }}
                className="bg-blue-500 hover:bg-blue-600 text-white px-2 py-1 rounded-md font-bold w-full"
            >
                Add Lecture
            </button>
        </div>
      )}
    </div>
  )
}

export default CourseCard
