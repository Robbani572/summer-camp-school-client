import useCourses from "../../hooks/useCourses/useCourses";


const InstructorDetailsCard = ({instructor}) => {

    const { img, name, email } = instructor;
    const [courses] = useCourses()
    const currentInstructorCourses = courses.filter(course => course.email === email)
    const totalStudents = currentInstructorCourses.reduce((sum, item) => item.enrolledStudents + sum, 0)

    return (
        <div className='card col h-[650px] bg-base-200 md:bg-white rounded-none shadow-xl transition'>
            <figure className="p-2"><img className="w-full rounded" src={img} alt="Arts and Crafts" /></figure>
            <div className="card-body w-full">
                <div className="grid grid-cols-2">
                    <h4 className="text-2xl uppercase font-bold">{name}</h4>
                    <p className="text-gray-600 font-bold mt-2">Email: <span className="lowercase">{email}</span></p>
                </div>
                <div className="mt-2">
                    <p className="text-gray-600 tracking-tight">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos explicabo dolores dolore delectus.</p>
                </div>
                <div className="my-4 flex justify-between">
                    <h4 className="font-semibold uppercase">Total Classes: {currentInstructorCourses.length}</h4>
                    <h4 className="font-semibold uppercase">Enrolled students: {totalStudents}</h4>
                </div>
            </div>
        </div>
    );
};

export default InstructorDetailsCard;