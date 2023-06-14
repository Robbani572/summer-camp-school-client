import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import useAxiosSecure from "../useAxiosSecure/useAxiosSecure";


const useUser = () => {
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true)
    const [axiosSecure] = useAxiosSecure()

    const handleMakeAdmin = user => {

        const updatedUser = {
            role: 'admin'
        }

        Swal.fire({
            title: 'Are you sure?',
            text: `Do you want to make ${user.name} Admin!`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/users/${user._id}`, {
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
                                `${user.name} is an admin now`,
                                'success'
                            )
                            axiosSecure.get('/users')
                                .then(data => {
                                    setUsers(data.data)
                                    setLoading(false)
                                })
                        }
                    })
            }
        })
    }

    const handleMakeInstructor = user => {
        const updatedUser = {
            role: 'instructor'
        }

        Swal.fire({
            title: 'Are you sure?',
            text: `Do you want to make ${user.name} Instructor!`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/users/${user._id}`, {
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
                                `${user.name} is an instructor now`,
                                'success'
                            )

                            axiosSecure.get('/users')
                                .then(data => {
                                    setUsers(data.data)
                                    setLoading(false)
                                })
                        }
                    })
            }
        })
    }

    useEffect(() => {
        axiosSecure.get('/users')
            .then(data => {
                setUsers(data.data)
                setLoading(false)
            })
    }, [axiosSecure])

    return [users, loading, handleMakeAdmin, handleMakeInstructor];
};

export default useUser;