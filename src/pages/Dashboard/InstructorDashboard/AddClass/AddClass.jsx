import { useContext, useState } from "react";
import { BsGoogle } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../../../providers/AuthProvider";


const AddClass = () => {

    const [error, setError] = useState('');
    const {user} = useContext(AuthContext);
    const navigate = useNavigate()

    const handleAddClass = event => {
        event.preventDefault();

        const form = event.target;
        const courseName = form.name.value;
        const category = form.category.value;
        const instructor = form.instructor.value;
        const rating = form.rating.value;
        const image = form.photo.value;
        const availableSeats = form.availableSeats.value;
        const email = form.email.value;
        const price = form.price.value;
        const details = form.details.value;

        console.log(courseName, category, instructor, rating, image, availableSeats, price, details)

        const newClass = {
            courseName,
            category,
            instructor,
            email,
            rating,
            image,
            availableSeats: parseFloat(availableSeats),
            enrolledStudents: 0,
            price,
            details,
            status: 'pending'
        }

        fetch("http://localhost:5000/courses", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(newClass)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
                const id = data.insertedId;
                if (id) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Your Class is in pending',
                        icon: 'success',
                        confirmButtonText: 'Ok'
                    })

                    form.reset()
                    navigate('/dashboard/myClasses')
                }
        })

    }

    return (
        <div className="hero min-h-screen">
            <div className="hero-content w-3/4 md:w-1/2 shadow-2xl">
                <div className="w-full">
                    <h1 className="text-3xl md:text-5xl text-center font-bold md:my-8 ">Add a Class</h1>
                    <form onSubmit={handleAddClass} className="card-body">
                        <div className="md:flex md:gap-4">
                            <div className="form-control md:w-1/2">
                                <input type="text" name="name" placeholder="Class Name" required className="input input-bordered bg-opacity-60 text-xl font-semibold border-0 border-b-2 rounded-none focus:outline-0" />
                            </div>
                            <div className="form-control mt-8 md:mt-0 md:w-1/2">
                                <select className="input input-bordered" name="category" id="data">
                                    <option value="Painting">Painting</option>
                                    <option value="Drawing">Drawing</option>
                                    <option value="Sculpture">Sculpture</option>
                                </select>
                            </div>
                        </div>
                        <div className="md:flex md:gap-4 md:mt-8">
                            <div className="form-control md:w-1/2">
                                <input type="text" name="instructor" placeholder="Instructor Name" readOnly defaultValue={user.displayName} required className="input input-bordered bg-opacity-60 text-xl font-semibold border-0 border-b-2 rounded-none focus:outline-0" />
                            </div>
                            <div className="form-control mt-8 md:mt-0 md:w-1/2">
                            <input type="text" name="rating" placeholder="Rate your Class" required className="input input-bordered bg-opacity-60 text-xl font-semibold border-0 border-b-2 rounded-none focus:outline-0" />
                            </div>
                        </div>
                        <div className="form-control mt-8">
                            <input type="text" name="photo" placeholder="Class Image URL" required className="input input-bordered bg-opacity-60 text-xl font-semibold border-0 border-b-2 rounded-none focus:outline-0" />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 md:gap-4 md:mt-8">
                            <div className="form-control mt-8 md:mt-0 col">
                                <input type="number" name="availableSeats" placeholder="Available Seats" required className="input input-bordered bg-opacity-60 text-xl font-semibold border-0 border-b-2 rounded-none focus:outline-0" />
                            </div>
                            <div className="form-control mt-8 md:mt-0 col">
                                <input type="email" name="email" placeholder="Your email" readOnly defaultValue={user.email} required className="input input-bordered bg-opacity-60 text-xl font-semibold border-0 border-b-2 rounded-none focus:outline-0" />
                            </div>
                            <div className="form-control mt-8 md:mt-0 col">
                                <input type="number" name="price" placeholder="$ Price" required className="input input-bordered bg-opacity-60 text-xl font-semibold border-0 border-b-2 rounded-none focus:outline-0" />
                            </div>
                        </div>
                        <div className="form-control mt-8">
                            <textarea className='w-full py-2 px-2 rounded font-semibold text-xl border-4' name="details" id="" cols="30" rows="10" placeholder='Say something about your calss'></textarea>
                        </div>
                        <div className="form-control flex justify-center items-center w-full mt-8">
                            <input type="submit" value="Add class" className="btn md:w-1/2 w-full md:text-xl md:font-bold" />
                        </div>
                    </form>
                    <div className="text-center">
                        {
                            error !== '' && <p className="font-semibold">!{error}</p>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddClass;