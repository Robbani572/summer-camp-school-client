import { useLoaderData } from "react-router-dom";
import useCourses from "../../hooks/useCourses/useCourses";
import InstructorDetailsCard from "./InstructorDetailsCard";


const InstrcutorDetails = () => {

    const instructor = useLoaderData()

    const { _id, img, name, email } = instructor;
    const [courses] = useCourses()
    const currentInstructorCourses = courses.filter(course => course.email === email)

    return (
        <div className="max-w-screen-xl mx-auto min-h-screen pt-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
                <div className="col">
                    <InstructorDetailsCard key={_id} instructor={instructor}></InstructorDetailsCard>
                </div>
                <div className="col">
                    <h2 className="text-center font-semibold text-xl">All Classes by {name}</h2>
                    <div>
                        <div className="overflow-x-auto">
                            <table className="table">
                                {/* head */}
                                <thead>
                                    <tr>
                                        <th>
                                            <label>
                                                <input type="checkbox" className="checkbox" />
                                            </label>
                                        </th>
                                        <th></th>
                                        <th>Class Name</th>
                                        <th>Price</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        currentInstructorCourses.length == 0 ? <p className="text-center font-bold text-orange-600 mt-8">No class teken yet</p> : currentInstructorCourses.map((singleClass, index) => <tr key={singleClass._id}>
                                        <td>
                                            {index + 1}
                                        </td>
                                        <td>
                                            <div className="flex items-center space-x-3">
                                                <div className="avatar">
                                                    <div className="mask mask-squircle w-12 h-12">
                                                        <img src={singleClass.image} alt="Class" />
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            {singleClass.courseName}
                                        </td>
                                        <td>{singleClass.price}</td>
                                        <th>
                                            <button className="btn btn-ghost btn-xs">details</button>
                                        </th>
                                    </tr>)
                                    }
                                    
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InstrcutorDetails;