import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import { BsGoogle } from 'react-icons/bs';
import Swal from "sweetalert2";



const Login = () => {

    const { loginUser, loginUserWithGoogle } = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/';
    const [error, setError] = useState('')

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
                navigate(from, { replace: true })
            })
            .catch(error => { setError(error.message) })
    }

    const handleGoogleLogin = () => {
        loginUserWithGoogle()
            .then(result => {
                const newUser = result.user;
                console.log(newUser)
                const seveUser = {
                    name: newUser.displayName,
                    email: newUser.email,
                    role: 'student',
                    img: newUser.photoURL
                }

                fetch('http://localhost:5000/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(seveUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Your account has created successfuly',
                            showConfirmButton: false,
                            timer: 1500
                        })
                        navigate(from, { replace: true })
                    })
            })
            .catch(error => { setError(error.message) })
    }

    // const handleGoogleLogin = () => {
    //     loginUserWithGoogle()
    //     .then(result => {
    //         const newUser = result.user;
    //         console.log(newUser)
    //         navigate(from, {replace: true})
    //     })
    //     .catch(error => {console.log(error)})
    // }


    return (
        <div className="hero bg-auth min-h-screen">
            <div className="hero-content bg-balck bg-opacity-50 w-3/4 md:w-1/2 shadow-2xl">
                <div className="w-full">
                    <h1 className="text-3xl md:text-5xl text-center font-bold md:my-8 ">Login now!</h1>
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <input type="email" name="email" placeholder="email" required className="input input-bordered bg-opacity-60 text-xl font-semibold border-0 border-b-2 rounded-none focus:outline-0" />
                        </div>
                        <div className="form-control mt-8">
                            <input type="password" name="password" placeholder="password" required className="input input-bordered bg-opacity-60 text-xl font-semibold border-0 border-b-2 rounded-none focus:outline-0" />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control flex justify-center items-center w-full mt-6">
                            <input type="submit" value="Login" className="btn md:w-1/2 w-full md:text-xl md:font-bold" />
                        </div>
                    </form>
                    <div className="text-center">
                        {
                            error !== '' && <p className="font-semibold">!{error}</p>
                        }
                    </div>
                    <div className="text-center">
                        <p className="font-semibold text-white">Don't have an account? <Link to='/auth/register' className="hover:underline text-blue-600">Register</Link></p>
                    </div>

                    <div className="divider text-white">OR</div>
                    <div className="text-center">
                        <button onClick={handleGoogleLogin} className="btn btn-circle btn-lg">
                            <BsGoogle></BsGoogle>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;