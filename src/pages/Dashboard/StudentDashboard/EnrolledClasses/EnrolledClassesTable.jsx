


const EnrolledClassesTable = ({paid, index}) => {
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
                            <img src={paid.image} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>

                </div>
            </td>
            <td>
                <div>
                    <div className="font-bold">
                        {paid.courseName}
                    </div>
                </div>
            </td>
            <td>
                <div className="text-xl font-semibold">${paid.amount}</div>
            </td>
            <th></th>
            <th><div className="text-xl font-semibold">{paid.status}</div></th>
        </tr>
    );
};

export default EnrolledClassesTable;