import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";




const Register = () => {

    const {createUser, updateUser} = useContext(AuthContext)

    const handleRegister = event => {
        event.preventDefault()

        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photo.value;
        const confirm = form.confirm.value;
        const password = form.password.value;

        console.log(name, email, photo, confirm, password)

        createUser(email, password)
        .then(result => {
            const createdUser = result.user;
            console.log(createdUser)
            updateUser(name, photo)
            .then(() => {})
            .catch(error => console.log(error))
        })
        .catch(error => console.log(error))
    }

    return (
        <div className="hero bg-auth min-h-screen">
            <div className="hero-content bg-auth w-3/4 md:w-1/2 shadow-2xl">
                <div className="w-full">
                    <h1 className="text-3xl md:text-5xl text-center font-bold md:my-8 ">Register now!</h1>
                    <form onSubmit={handleRegister} className="card-body">
                        <div className="flex flex-col md:flex-row gap-4">
                            <div className="form-control md:w-1/2">
                                <input type="text" name="name" placeholder="name" className="input input-bordered bg-opacity-60 text-xl font-semibold border-0 border-b-2 rounded-none focus:outline-0" />
                            </div>
                            <div className="form-control md:w-1/2 mt-8 md:mt-0">
                                <input type="email" name="email" placeholder="email" className="input input-bordered bg-opacity-60 text-xl font-semibold border-0 border-b-2 rounded-none focus:outline-0" />
                            </div>
                        </div>
                        <div className="form-control mt-8">
                            <input type="text" name="photo" placeholder="photo url" className="input input-bordered bg-opacity-60 text-xl font-semibold border-0 border-b-2 rounded-none focus:outline-0" />

                        </div>

                        <div className="flex flex-col md:flex-row md:mt-8 gap-4">
                            <div className="form-control md:w-1/2 mt-8 md:mt-0">
                                <input type="password" name="password" placeholder="password" className="input input-bordered bg-opacity-60 text-xl font-semibold border-0 border-b-2 rounded-none focus:outline-0" />

                            </div>
                            <div className="form-control md:w-1/2 mt-8 md:mt-0">
                                <input type="password" name="confirm" placeholder="confirm password" className="input input-bordered bg-opacity-60 text-xl font-semibold border-0 border-b-2 rounded-none focus:outline-0" />

                            </div>
                        </div>
                        <div className="form-control flex justify-center items-center w-full mt-6">
                            {/* <button type="submit" className="btn md:w-1/2 w-full md:text-xl md:font-bold">Register</button> */}
                            <input type="submit" value="Register" className="btn md:w-1/2 w-full md:text-xl md:font-bold" />
                        </div>
                    </form>
                    <div className="text-center my-4">
                        <p className="font-semibold">Already have an account? <Link to='/auth/login' className="hover:underline text-blue-600">Login</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;