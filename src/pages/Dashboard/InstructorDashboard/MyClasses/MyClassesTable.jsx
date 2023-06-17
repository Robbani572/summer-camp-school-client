import { RxUpdate } from "react-icons/rx";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const MyClassesTable = ({ course, index, }) => {

    const handleShowFeedback = course => {
        Swal.fire({
            title: 'Feedback!',
            text: `Admin says: ${course.feedback.feedback}`,
          })
    }

    return (
        <tr>
            <th>
                <label>
                    {index + 1}
                </label>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask h-24 w-24 rounded-xl">
                            <img src={course.image} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>

                </div>
            </td>
            <td>
                <div>
                    <div className="font-bold">
                        {course.courseName}
                    </div>
                </div>
            </td>
            <td>
                <div className="flex items-center space-x-3">
                    <div>
                        <div className="font-bold">Available Seats: {course.availableSeats}</div>
                        <div className="font-bold mt-2">Enrolled Students: {course.enrolledStudents}</div>
                        <div className="font-semibold mt-2">Price: ${course.price}</div>
                    </div>
                </div>
            </td>
            <td></td>
            <td>
                <div className="text-xl font-semibold">{course.status}</div>
            </td>
            <td>

            </td>
            <th>
                {
                    course.feedback ? <button onClick={() => handleShowFeedback(course)} className="btn btn-sm">Show</button> : 
                    <div className="font-semibold">No feedback</div>
                }
            </th>
        </tr>
    );
};

export default MyClassesTable;