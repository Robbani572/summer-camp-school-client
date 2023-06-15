import { BsFillTrash3Fill } from "react-icons/bs";
import { Link } from "react-router-dom";


const AllClassesTable = ({ singleClass, index, handleApproveClass, handlePendingClass, handleDenyClass}) => {




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
                            <img src={singleClass.image} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>

                </div>
            </td>
            <td>
                <div className="flex items-center space-x-3">
                    <div>
                        <div className="font-bold">{singleClass.courseName}</div>
                        <div className="text-xl font-bold mt-2">By: {singleClass.instructor}</div>
                    </div>
                </div>
            </td>
            <td>
                <div className="flex items-center space-x-3">
                    <div>
                        <div className="font-bold">Available Seats: {singleClass.availableSeats}</div>
                        <div className="font-bold mt-2">Enrolled Students: {singleClass.enrolledStudents}</div>
                        <div className="font-semibold mt-2">Price: ${singleClass.price}</div>
                    </div>
                </div>
            </td>
            <th>
                <div className="text-sm font-semibold">{singleClass.status}</div>
            </th>
            <th>
                
            </th>

            <th>
                <div className="grid grid-cols-1 gap-2">
                    <div className="col">
                        {
                            singleClass.status === 'pending' || singleClass.status === 'deny' ? <button className="btn btn-sm btn-disabled">Pending</button> :
                                <button onClick={() => handlePendingClass(singleClass)} className="btn btn-sm">Pending</button>
                        }
                    </div>
                    <div className="col">
                        {
                            singleClass.status === 'approved' || singleClass.status === 'deny' ? <button className="btn btn-sm btn-disabled">Aproved</button> :
                                <button onClick={() => handleApproveClass(singleClass)} className="btn btn-sm">Aprove</button>
                        }
                    </div>
                    <div>
                        {
                            singleClass.status === 'deny' ? <button className="btn bg-red-400 text-white btn-sm btn-disabled">Deny</button> :
                                <button onClick={() => handleDenyClass(singleClass)} className="btn bg-red-600 text-white btn-sm">Deny</button>
                        }
                    </div>
                </div>
            </th>
        </tr>
    );
};

export default AllClassesTable;