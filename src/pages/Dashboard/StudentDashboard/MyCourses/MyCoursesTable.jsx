import { BsFillTrash3Fill } from "react-icons/bs";
import { Link } from "react-router-dom";


const MyCoursesTable = ({cart, index, handleDelete}) => {
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
                            <img src={cart.image} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>

                </div>
            </td>
            <td>
                <div>
                    <div className="font-bold">
                        {cart.courseName}
                    </div>
                </div>
            </td>
            <td>
                <div className="text-xl font-semibold">${cart.price}</div>
            </td>
            <th>
                <Link to={`/dashboard/payment/${cart._id}`}>
                    <button className="btn">Pay</button>
                </Link>
            </th>
            <th>
                <button onClick={() => handleDelete(cart._id)} className="btn bg-red-600 text-white btn-lg btn-circle"><BsFillTrash3Fill></BsFillTrash3Fill></button>
            </th>
        </tr>
    );
};

export default MyCoursesTable;