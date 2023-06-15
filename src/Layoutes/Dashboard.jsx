import { useContext, useEffect, useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import useCurrentUser from "../hooks/useCurrentUser/useCurrentUser";
import useCart from "../hooks/useCart/useCart";
import usePayments from "../hooks/usePayments/usePayments";
import { BiSelectMultiple } from 'react-icons/bi';
import { MdGolfCourse, MdOutlinePaid } from 'react-icons/md';
import { ImUsers } from 'react-icons/im';
import { AiFillHome } from 'react-icons/ai';
import { FaUserGraduate } from "react-icons/fa";
import { CgEnter } from "react-icons/cg";


const Dashboard = () => {

    const { user } = useContext(AuthContext)
    const [currentUser] = useCurrentUser()
    const [cart] = useCart()
    const [payments] = usePayments()

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
                <ul className="menu p-4 w-80 h-full bg-[#0052b1] text-base-content">
                    {/* Sidebar content here */}

                    {
                        currentUser?.role === 'admin' && <>
                            <li className="text-xl font-semibold text-black uppercase">
                                <NavLink to="/dashboard/allUsers">
                                    <ImUsers></ImUsers> All users
                                </NavLink>
                            </li>
                            <li className="text-xl font-semibold text-black uppercase">
                                <NavLink to="/dashboard/allClasses">
                                    <ImUsers></ImUsers> All Classes
                                </NavLink>
                            </li>
                        </>
                    }

                    {
                        currentUser?.role === 'instructor' && <>
                            <li className="text-xl font-semibold text-black uppercase"><NavLink to="/dashboard/addClass">Add Class</NavLink></li>
                            <li className="text-xl font-semibold text-black uppercase"><NavLink to="/dashboard/myClasses">My Class</NavLink></li>
                        </>
                    }

                    {
                        currentUser?.role === 'student' && <>
                            <li className="text-xl font-semibold text-black uppercase">
                                <NavLink to="/dashboard/myCourses">
                                    <span className="flex gap-2 justify-center items-center">
                                        <BiSelectMultiple></BiSelectMultiple> <div className="flex gap-2">My classes
                                            <div className="badge">+{cart?.length || 0}</div></div>
                                    </span>
                                </NavLink>
                            </li>
                            <li className="text-xl font-semibold text-black uppercase">
                                <NavLink to="/dashboard/enrolledClasses">
                                    <span className="flex gap-2 justify-center items-center">
                                        <CgEnter></CgEnter> <div className="flex gap-2">Enrolled Classes
                                            <div className="badge ">+{payments?.length || 0}</div></div>
                                    </span>
                                </NavLink>
                            </li>
                            <li className="text-xl font-semibold text-black uppercase">
                                <NavLink to="/dashboard/paymentHistory">
                                    <span className="flex gap-2 justify-center items-center">
                                        <MdOutlinePaid></MdOutlinePaid> Paymet History
                                    </span>
                                </NavLink>
                            </li>
                        </>
                    }

                    <div className="divider"></div>

                    <li className="text-xl font-semibold text-black hover:text-white uppercase">
                        <NavLink to="/"><div className="flex gap-2"><AiFillHome></AiFillHome> Home</div></NavLink>
                    </li>
                    <li className="text-xl font-semibold text-black hover:text-white uppercase">
                        <NavLink to="/"><div className="flex gap-2"><MdGolfCourse></MdGolfCourse> Classes</div></NavLink>
                    </li>
                    <li className="text-xl font-semibold text-black hover:text-white uppercase">
                        <NavLink to="/"><div className="flex gap-2"><FaUserGraduate></FaUserGraduate> Instructors</div></NavLink>
                    </li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;