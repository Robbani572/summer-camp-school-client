import { Link } from "react-router-dom";
import useCourses from "../../../hooks/useCourses/useCourses";


const InstructorCard = ({ instructor }) => {

    const { _id, img, name, email } = instructor;
    const [courses] = useCourses()
    const currentInstructorCourses = courses.filter(course => course.email === email)
    const totalStudents = currentInstructorCourses.reduce((sum, item) => item.enrolledStudents + sum, 0)
    console.log(currentInstructorCourses)

    return (
        <div className='card col h-[650px] bg-base-200 md:bg-white rounded-none hover:shadow-xl transition'>
            <figure className="p-2"><img className="w-full h-[200px] rounded" src={img} alt="Arts and Crafts" /></figure>
            <div className="card-body relative w-full">
                <div>
                    <h4 className="font-bold">{name}</h4>
                    <p className="text-gray-600 font-bold mt-2 uppercase">Email: {email}</p>
                </div>
                <div className="mt-2">
                    <p className="text-gray-600 tracking-tight">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos explicabo dolores dolore delectus.</p>
                </div>
                <div className="my-2">
                    <p className="font-semibold">Total Classes: {currentInstructorCourses.length}</p>
                    <p className="font-semibold">Enrolled students: {totalStudents}</p>
                </div>
                <div  className="card-actions justify-center mt-2 absolute bottom-0 w-5/6 mb-4">
                    <Link className="w-full" to={`/instructorDetails/${_id}`}>
                        <button className="btn btn-outline border-4 font-semibold w-full border-[#DCFDFF]">Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default InstructorCard;