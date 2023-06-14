import { RxUpdate } from "react-icons/rx";
import { Link } from "react-router-dom";


const MyClassesTable = ({ course, index, handleUpdateClass }) => {
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
                        <div className="mask h-36 w-36">
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
                <div className="text-xl font-semibold">${course.price}</div>
            </td>
            <td></td>
            <td>
                <div className="text-xl font-semibold">{course.status}</div>
            </td>
            <td>

            </td>
            <th>
                <button onClick={() => handleUpdateClass(course._id)} className="btn btn-lg btn-circle"><RxUpdate></RxUpdate></button>
            </th>
        </tr>
    );
};

export default MyClassesTable;