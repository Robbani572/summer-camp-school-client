import { Helmet } from "react-helmet-async";
// import useCourses from "../../../../hooks/useCourses/useCourses";
import AllClassesTable from "./AllClassesTable";
import Swal from "sweetalert2";
// import useAxiosSecure from "../../../../hooks/useAxiosSecure/useAxiosSecure";
import { useEffect, useState } from "react";


const AllClasses = () => {

    // const [courses] = useCourses()
    const [courses, setCourses] = useState([])
    const [loading, setLoading] = useState(true)

    // const [axiosSecure] = useAxiosSecure()

    const handleApproveClass = singleClass => {
        const updatedUser = {
            status: 'approved'
        }

        Swal.fire({
            title: 'Are you sure?',
            text: `Do you want to approve this class!`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://artistry-moth-school-server.vercel.app/courses/${singleClass._id}`, {
                    method: 'PATCH',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(updatedUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.modifiedCount > 0) {
                            Swal.fire(
                                'Congrats!',
                                `Class is ready to display`,
                                'success'
                            )
                            // axiosSecure.get('/users')
                            //     .then(data => {
                            //         setCourses(data.data)
                            //         setLoading(false)
                            //     })
                            fetch('https://artistry-moth-school-server.vercel.app/courses')
                                .then(res => res.json())
                                .then(data => {
                                    setCourses(data)
                                    setLoading(false)
                                })
                        }
                    })
            }
        })
    }

    const handlePendingClass = singleClass => {
        const updatedUser = {
            status: 'pending'
        }

        Swal.fire({
            title: 'Are you sure?',
            text: `This calss will be add in pending list!`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://artistry-moth-school-server.vercel.app/courses/${singleClass._id}`, {
                    method: 'PATCH',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(updatedUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.modifiedCount > 0) {
                            Swal.fire(
                                'Pending!',
                                `Class is hidden from course list`,
                                'success'
                            )
                            // axiosSecure.get('/users')
                            //     .then(data => {
                            //         setCourses(data.data)
                            //         setLoading(false)
                            //     })
                            fetch('https://artistry-moth-school-server.vercel.app/courses')
                                .then(res => res.json())
                                .then(data => {
                                    setCourses(data)
                                    setLoading(false)
                                })
                        }
                    })
            }
        })
    }

    const handleDenyClass = singleClass => {
        const updatedUser = {
            status: 'deny'
        }

        Swal.fire({
            title: 'Are you sure?',
            text: `You wont be able to approve this class farther!`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://artistry-moth-school-server.vercel.app/courses/${singleClass._id}`, {
                    method: 'PATCH',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(updatedUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.modifiedCount > 0) {
                            Swal.fire(
                                'Denied!',
                                `Class is added to denied list`,
                                'success'
                            )
                            // axiosSecure.get('/users')
                            //     .then(data => {
                            //         setCourses(data.data)
                            //         setLoading(false)
                            //     })
                            fetch('https://artistry-moth-school-server.vercel.app/courses')
                                .then(res => res.json())
                                .then(data => {
                                    setCourses(data)
                                    setLoading(false)
                                    Swal.fire({
                                        title: 'Write feedback',
                                        input: 'text',
                                        inputAttributes: {
                                            autocapitalize: 'off'
                                        },
                                        showCancelButton: true,
                                        confirmButtonText: 'Send',
                                        showLoaderOnConfirm: true,
                                        preConfirm: (login) => {
                                            const updatedDoc = { feedback: login }
                                            return updatedDoc
                                        },
                                        allowOutsideClick: () => !Swal.isLoading()
                                    }).then((result) => {
                                        console.log(result.value)
                                        if (result.isConfirmed) {
                                            fetch(`https://artistry-moth-school-server.vercel.app/courses/${singleClass._id}`, {
                                                method: 'PUT',
                                                headers: {
                                                    'content-type': 'application/json'
                                                },
                                                body: JSON.stringify(result.value)
                                            })
                                                .then(response => {
                                                    return response.json()
                                                })
                                                .then(data => {
                                                    console.log(data)
                                                })
                                        }
                                    })
                                })
                        }
                    })
            }
        })
    }

    

    useEffect(() => {
        // axiosSecure.get('/users')
        //     .then(data => {
        //         setCourses(data.data)
        //         setLoading(false)
        //     })
        fetch('https://artistry-moth-school-server.vercel.app/courses')
            .then(res => res.json())
            .then(data => {
                setCourses(data)
                setLoading(false)
            })
    }, [])

    return (
        <div>
            <Helmet>
                <title>Artistry | All Classes</title>
            </Helmet>
            <div className="my-20">
                <h2 className="text-4xl font-semibold uppercase text-center">Total Classes: {courses.length}</h2>
            </div>

            <div className="w-full">
                <table className="table w-full max-w-7xl mx-auto">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th></th>
                            <th>Name</th>
                            <th>Details</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            courses.map((singleClass, index) => <AllClassesTable
                                key={singleClass._id}
                                singleClass={singleClass}
                                index={index}
                                handleApproveClass={handleApproveClass}
                                handlePendingClass={handlePendingClass}
                                handleDenyClass={handleDenyClass}></AllClassesTable>)
                        }

                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default AllClasses;