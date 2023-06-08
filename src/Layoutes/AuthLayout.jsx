import { Outlet } from "react-router-dom";
import NavBar from "../pages/Shared/Navbar/Navbar";


const AuthLayout = () => {
    return (
        <div>
            <section className="fixed z-10 w-full text-white bg-opacity-10 bg-black">
                <NavBar></NavBar>
            </section>
            <Outlet></Outlet>
        </div>
    );
};

export default AuthLayout;