import { Helmet } from "react-helmet-async";
import useCart from "../../../../hooks/useCart/useCart";
import Swal from "sweetalert2";
import MyCoursesTable from "./MyCoursesTable";


const MyCourses = () => {

    const [carts, refetch] = useCart()

    const handleDelete = (id) => {
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
                            carts.map((cart, index) => <MyCoursesTable key={cart._id} cart={cart} index={index} handleDelete={handleDelete}></MyCoursesTable>)
                        }

                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default MyCourses;