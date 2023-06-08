
import { Link } from "react-router-dom";
import logo from "../../../assets/images/icons/navLogo.png"
// import Sun from "./Sun.svg";
// import Moon from "./Moon.svg";
import "./navbar.css"

const NavBar = () => {

    const setDarkMode = () => {
        document.querySelector("body").setAttribute("data-theme",  "dark")
    }
    const setLightMode = () => {
        document.querySelector("body").setAttribute("data-theme",  "light")
    }


    const toggleTheme = (e) => {
        if(e.target.checked) {
            setDarkMode()
        }
        else{
            setLightMode()
        }
    }


    const navItems = <>
        <li className="hover:text-[#BB8506] hover:bg-transparent font-semibold md:text-xl uppercase"><Link to="/">Home</Link></li>
        <li className="hover:text-[#BB8506] hover:bg-transparent font-semibold md:text-xl uppercase"><Link to="/courses">Courses</Link></li>
        <li className="hover:text-[#BB8506] hover:bg-transparent font-semibold md:text-xl uppercase"><Link to="/about">About</Link></li>
    </>

    return (
        <div className="navbar">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-black bg-opacity-50 rounded-box w-52">
                        {navItems}
                    </ul>
                </div>
                <Link className="btn btn-ghost normal-case text-xl">
                    <img className="w-full h-full" src={logo} alt="" />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navItems}
                </ul>
            </div>
            <div className="navbar-end">
                <Link to='/auth/login'><button className="btn">Login</button></Link>

                {/* dark mode and light mode */}
                <div className='dark_mode'>
                    <input
                        className='dark_mode_input'
                        type='checkbox'
                        id='darkmode-toggle'
                        onChange={toggleTheme}
                    />
                    <label className='dark_mode_label' htmlFor='darkmode-toggle'>
                        {/* <img src={Sun} alt="" />
                        <img src={Moon} alt="" /> */}
                    </label>
                </div>
            </div>
        </div>
    );
};

export default NavBar;