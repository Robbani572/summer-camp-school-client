import { Helmet } from "react-helmet-async";
import useUser from "../../../../hooks/useUser/useUser";
import { MdAdminPanelSettings } from "react-icons/md";
import { FaUserGraduate } from "react-icons/fa";


const AllUsers = () => {

    const [users, loading, handleMakeAdmin, handleMakeInstructor] = useUser()

    return (
        <div>
            <Helmet>
                <title>Artistry | All Users</title>
            </Helmet>
            <div className="my-20">
                <h2 className="text-4xl font-semibold uppercase text-center">Total: {users.length}</h2>
            </div>

            <div className="w-full">
                <table className="table w-full max-w-7xl mx-auto">
                    {/* head */}
                    <thead>
                        <tr>
                            <th className="text-xl font-bold uppercase">#</th>
                            <th className="text-xl font-bold uppercase">Name</th>
                            <th className="text-xl font-bold uppercase">Email</th>
                            <th className="text-xl font-bold uppercase">Role</th>
                            <th className="text-xl font-bold uppercase">Make Admin</th>
                            <th className="text-xl font-bold uppercase">Make instractor</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <tr key={user._id}>

                                <th>
                                    <label>
                                        {index + 1}
                                    </label>
                                </th>
                                <td>
                                    <div className="font-bold">
                                        {user.name}
                                    </div>
                                </td>
                                <td>
                                    <div className="font-bold">
                                        {user.email}
                                    </div>
                                </td>
                                <td>
                                    <div className="text-xl font-semibold">{user.role}</div>
                                </td>
                                <td>
                                    {
                                        user.role === 'admin' ? <div className="flex justify-center items-center">
                                            <button className="btn btn-disabled"><MdAdminPanelSettings></MdAdminPanelSettings></button>
                                        </div> : <div className="flex justify-center items-center">
                                            <button onClick={() => handleMakeAdmin(user)} className="btn"><MdAdminPanelSettings></MdAdminPanelSettings></button>
                                        </div>
                                    }

                                </td>
                                <td>
                                    {
                                        user.role === 'instructor' ? <div className="flex justify-center items-center">
                                            <button className="btn btn-disabled"><FaUserGraduate></FaUserGraduate></button>
                                        </div> : <div className="flex justify-center items-center">
                                            <button onClick={() => handleMakeInstructor(user)} className="btn"><FaUserGraduate></FaUserGraduate></button>
                                        </div>
                                    }

                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default AllUsers;