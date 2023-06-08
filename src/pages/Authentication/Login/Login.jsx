import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";



const Login = () => {

    const {loginUser} = useContext(AuthContext)

    const handleLogin = event => {
        event.preventDefault()

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        console.log(email, password)

        loginUser(email, password)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser)
        })
        .catch(error => {console.log(error)})
    }


    return (
        <div className="hero bg-auth min-h-screen">
            <div className="hero-content bg-auth w-3/4 md:w-1/2 shadow-2xl">
                <div className="w-full">
                <h1 className="text-3xl md:text-5xl text-center font-bold md:my-8 ">Login now!</h1>
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <input type="text" name="email" placeholder="email" className="input input-bordered bg-opacity-60 text-xl font-semibold border-0 border-b-2 rounded-none focus:outline-0" />
                        </div>
                        <div className="form-control mt-8">
                            <input type="password" name="password" placeholder="password" className="input input-bordered bg-opacity-60 text-xl font-semibold border-0 border-b-2 rounded-none focus:outline-0" />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control flex justify-center items-center w-full mt-6">
                            <input type="submit" value="Login" className="btn md:w-1/2 w-full md:text-xl md:font-bold" />
                        </div>
                    </form>
                    <div className="text-center">
                        <p className="font-semibold">Don't have an account? <Link to='/auth/register' className="hover:underline text-blue-600">Register</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;