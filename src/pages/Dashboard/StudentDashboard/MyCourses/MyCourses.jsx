import { Helmet } from "react-helmet-async";
import useCart from "../../../../hooks/useCart/useCart";
import { BsFillTrash3Fill } from "react-icons/bs";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";


const MyCourses = () => {

    const [carts, refetch] = useCart()

    const handleDelete = (id) => {
        console.log(id)
        // const procced = confirm('Are you sure? You want to delete')
        // if(procced){
        //     fetch(`http://localhost:5000/carts/${id}`, {
        //         method: 'DELETE'
        //     })
        //     .then(res => res.json())
        //     .then(data => {
        //         console.log(data)
        //         if (data.deletedCount > 0) {
        //             alert('item deleted')
        //             refetch()
        //         }
        //     })
        // }
        Swal.fire({
            title: 'Are you sure?',
            text: "Do you want to delete this one!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/carts/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Course has been deleted',
                                'success'
                            )
                            refetch()
                        }
                    })
            }
        })
    }

    return (
        <div>
            <Helmet>
                <title>Artistry | My Courses</title>
            </Helmet>
            <div className="my-20">
                <h2 className="text-4xl font-semibold uppercase text-center">Your selected classes: {carts.length}</h2>
            </div>

            <div className="w-full">
                <table className="table w-full max-w-7xl mx-auto">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th></th>
                            <th>Name</th>
                            <th>Price</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            carts.map((cart, index) => <tr key={cart._id}>

                                <th>
                                    <label>
                                        {index + 1}
                                    </label>
                                </th>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask h-36 w-36">
                                                <img src={cart.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>

                                    </div>
                                </td>
                                <td>
                                    <div>
                                        <div className="font-bold">
                                            {cart.courseName}
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div className="text-xl font-semibold">${cart.price}</div>
                                </td>
                                <th>
                                    <Link to="/dashboard/payment">
                                        <button className="btn">Pay</button>
                                    </Link>
                                </th>
                                <th>
                                    <button onClick={() => handleDelete(cart._id)} className="btn bg-red-600 text-white btn-lg btn-circle"><BsFillTrash3Fill></BsFillTrash3Fill></button>
                                </th>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default MyCourses;