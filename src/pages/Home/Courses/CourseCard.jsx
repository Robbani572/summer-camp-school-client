import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useCart from "../../../hooks/useCart/useCart";


const CourseCard = ({ item }) => {

    const { user } = useContext(AuthContext);
    const navigate = useNavigate()
    const { _id, courseName, instructor, price, details, availableSeats, enrolledStudents, image } = item
    const [, refetch] = useCart()

    const addClass = {
        itemId: _id,
        courseName,
        price,
        image,
        email: user?.email
    }

    const handleSelectToCart = item => {
        if (user?.email) {
            fetch('http://localhost:5000/carts', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(addClass)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.insertedId) {
                        Swal.fire({
                            title: 'Yeee!! your class added',
                            width: 600,
                            padding: '3em',
                            color: '#716add',
                            background: '#fff url("https://images.all-free-download.com/images/graphicwebp/wood_background_template_black_white_flat_handdrawn_sketch_6854117.webp")',
                            backdrop: `
                          rgba(0,0,123,0.4)
                          url("https://media.tenor.com/-AyTtMgs2mMAAAAi/nyan-cat-nyan.gif")
                          left top
                          no-repeat
                        `
                        })
                        refetch()
                    }
                })
        }
        else {
            Swal.fire({
                title: 'Please login first',
                text: "You can't select any class before login",
                icon: 'cross',
                showCancelButton: false,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login Now'
              }).then(() => {
                navigate('/auth/login')
              })
              
        }
    }

    return (
        <div className="card col h-[650px] bg-base-200 md:bg-white rounded-none hover:shadow-xl transition">
            <figure className="p-2"><img className="w-full rounded" src={image} alt="Arts and Crafts" /></figure>
            <div className="card-body relative w-full">
                <div>
                    <h4 className="font-bold">{courseName}</h4>
                    <p className="text-gray-600 font-bold mt-2 uppercase">Instractor: {instructor}</p>
                </div>
                <div className="mt-2">
                    <p className="text-gray-600 tracking-tight">{details}</p>
                </div>
                <div className="my-2">
                    <p className="font-semibold">Available seats: {availableSeats}</p>
                    <p className="font-semibold">Enrolled students: {enrolledStudents}</p>
                </div>
                <div className="card-actions justify-center mt-2 absolute bottom-0 w-5/6 mb-4">
                    <button onClick={() => handleSelectToCart(item)} className="btn btn-outline border-4 font-semibold w-full border-[#DCFDFF]">select</button>
                </div>
            </div>
            <div className="absolute mt-6 p-2 rounded right-0 mr-4 bg-black">
                <p className="text-white">${price}</p>
            </div>
        </div>
    );
};

export default CourseCard;