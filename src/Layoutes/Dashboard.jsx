import { useContext, useEffect, useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import useCurrentUser from "../hooks/useCurrentUser/useCurrentUser";


const Dashboard = () => {

    const {user} = useContext(AuthContext)
    const [currentUser] = useCurrentUser()

    // useEffect(() => {
    //     fetch(`http://localhost:5000/user?email=${user?.email}`)
    //     .then(res => res.json())
    //     .then(data => {
    //         console.log(data)
    //         setCurrentUser(data)
    //     })
        
    // }, [user])



    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                {/* Page content here */}
                <label htmlFor="my-drawer-2" className="btn drawer-button lg:hidden">Open Menu</label>
                <Outlet></Outlet>

            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 h-full bg-[#DCFDFF] text-base-content">
                    {/* Sidebar content here */}

                    {
                        currentUser?.role === 'admin' && <>
                            <li className="text-xl font-semibold text-black uppercase"><NavLink to="/dashboard/allUsers">All users</NavLink></li>
                            <li className="text-xl font-semibold text-black uppercase"><NavLink to="/dashboard/myCourses">Selected Classes</NavLink></li>
                        </>
                    }

                    {
                        currentUser?.role === 'instractor' && <>
                            <li className="text-xl font-semibold text-black uppercase"><NavLink to="/dashboard/addClass">Add Class</NavLink></li>
                        </>
                    }

                    {
                        currentUser?.role === 'student' && <>
                            <li className="text-xl font-semibold text-black uppercase"><NavLink to="/dashboard/myCourses">My Courses</NavLink></li>
                        </>
                    }

                    <div className="divider"></div>

                    <li className="text-xl font-semibold text-black hover:text-white uppercase"><NavLink to="/">Home</NavLink></li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;