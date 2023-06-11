import { NavLink, Outlet } from "react-router-dom";


const Dashboard = () => {

    const admin = true;
    const instractor = false
    const student = false

    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                {/* Page content here */}
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                <Outlet></Outlet>

            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 h-full bg-[#DCFDFF] text-base-content">
                    {/* Sidebar content here */}

                    {
                        admin && <>
                            <li className="text-xl font-semibold text-black uppercase"><NavLink to="/dashboard/allUsers">All users</NavLink></li>
                        </>
                    }

                    {
                        instractor && <>
                            <li className="text-xl font-semibold text-black uppercase"><NavLink to="/dashboard/addClass">Add Class</NavLink></li>
                        </>
                    }

                    {
                        student && <>
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