import { useEffect, useState } from "react";
import Swal from "sweetalert2";


const useUser = () => {
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true)

    const handleMakeAdmin = user => {

        const updatedUser = {
            role: 'admin'
        }

        Swal.fire({
            title: 'Are you sure?',
            text: "Do you want to make him Admin!",
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
                                'He is an admin now',
                                'success'
                            )
                            fetch('http://localhost:5000/users')
                                .then(res => res.json())
                                .then(data => {
                                    setUsers(data)
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
            text: "Do you want to make him Instructor!",
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
                                'He is instructor now',
                                'success'
                            )
                            fetch('http://localhost:5000/users')
                                .then(res => res.json())
                                .then(data => {
                                    setUsers(data)
                                    setLoading(false)
                                })
                        }
                    })
            }
        })
    }

    useEffect(() => {
        fetch('http://localhost:5000/users')
            .then(res => res.json())
            .then(data => {
                setUsers(data)
                setLoading(false)
            })
    }, [])

    return [users, loading, handleMakeAdmin, handleMakeInstructor];
};

export default useUser;