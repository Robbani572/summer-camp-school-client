import { Outlet } from "react-router-dom";
import Footer from "../pages/Shared/Footer/Footer";
import NavBar from "../pages/Shared/NavBar/NavBar";


const Main = () => {
    return (
        <div>
            <section className="fixed z-10 w-full text-white bg-opacity-10 bg-black">
            <NavBar></NavBar>
            </section>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;