import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import { BsGoogle } from 'react-icons/bs';
import Swal from "sweetalert2";




const Register = () => {

    const { createUser, updateUser, loginUserWithGoogle } = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/';
    const [error, setError] = useState('')

    const handleRegister = event => {
        event.preventDefault()

        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photo.value;
        const confirm = form.confirm.value;
        const password = form.password.value;

        const re = /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[a-zA-Z!#$%&? "])/;

        if (confirm !== password) {
            setError("Password doesn't match")
            return
        }
        else if (password.length < 7) {
            setError('Password must contain 8 characters')
            return
        }
        else if (re.test(password) === false) {
            setError('make a storng password')
            return
        }



        createUser(email, password)
            .then(result => {
                const createdUser = result.user;
                console.log(createdUser)
                const seveUser = {
                    name,
                    email,
                    role: 'student',
                    img: photo
                }
                updateUser(name, photo)
                    .then(() => {
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
                    .catch(error => setError(error.message))
            })
            .catch(error => setError(error.message))
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

    return (
        <div className="hero bg-auth min-h-screen">
            <div className="hero-content bg-balck bg-opacity-50 w-3/4 md:w-1/2 shadow-2xl">
                <div className="w-full">
                    <h1 className="text-3xl md:text-5xl text-center font-bold md:my-8 ">Register now!</h1>
                    <form onSubmit={handleRegister} className="card-body">
                        <div className="flex flex-col md:flex-row gap-4">
                            <div className="form-control md:w-1/2">
                                <input type="text" name="name" placeholder="name" required className="input input-bordered bg-opacity-60 text-xl font-semibold border-0 border-b-2 rounded-none focus:outline-0" />
                            </div>
                            <div className="form-control md:w-1/2 mt-8 md:mt-0">
                                <input type="email" name="email" placeholder="email" required className="input input-bordered bg-opacity-60 text-xl font-semibold border-0 border-b-2 rounded-none focus:outline-0" />
                            </div>
                        </div>
                        <div className="form-control mt-8">
                            <input type="text" name="photo" placeholder="photo url" required className="input input-bordered bg-opacity-60 text-xl font-semibold border-0 border-b-2 rounded-none focus:outline-0" />

                        </div>

                        <div className="flex flex-col md:flex-row md:mt-8 gap-4">
                            <div className="form-control md:w-1/2 mt-8 md:mt-0">
                                <input type="password" name="password" placeholder="password" required className="input input-bordered bg-opacity-60 text-xl font-semibold border-0 border-b-2 rounded-none focus:outline-0" />

                            </div>
                            <div className="form-control md:w-1/2 mt-8 md:mt-0">
                                <input type="password" name="confirm" placeholder="confirm password" required className="input input-bordered bg-opacity-60 text-xl font-semibold border-0 border-b-2 rounded-none focus:outline-0" />

                            </div>
                        </div>
                        <div className="form-control flex justify-center items-center w-full mt-6">
                            {/* <button type="submit" className="btn md:w-1/2 w-full md:text-xl md:font-bold">Register</button> */}
                            <input type="submit" value="Register" className="btn md:w-1/2 w-full md:text-xl md:font-bold" />
                        </div>
                    </form>
                    <div className="text-center my-4">
                        {
                            error !== '' && <p className="font-semibold text-red-600">!{error}</p>
                        }
                    </div>
                    <div className="text-center my-4">
                        <p className="font-semibold text-white">Already have an account? <Link to='/auth/login' className="hover:underline text-blue-600">Login</Link></p>
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

export default Register;