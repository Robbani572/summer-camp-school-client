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
                fetch(`https://artistry-moth-school-server.vercel.app/users/${user._id}`, {
                    method: 'PATCH',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(updatedUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.result.modifiedCount > 0) {
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
            userId: user._id,
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
                fetch(`https://artistry-moth-school-server.vercel.app/users/${user._id}`, {
                    method: 'PATCH',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(updatedUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.result.modifiedCount > 0) {
                            Swal.fire(
                                'Congrats!',
                                `${user.name} is an instructor now`,
                                'success'
                            )

                            axiosSecure.get('/users')
                                .then(data => {
                                    console.log(data)
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