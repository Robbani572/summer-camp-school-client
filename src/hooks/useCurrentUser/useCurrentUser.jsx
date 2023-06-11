import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";


const useCurrentUser = () => {

    const {user} = useContext(AuthContext)
    const [currentUser, setCurrentUser] = useState(null)

    useEffect(() => {
        fetch(`http://localhost:5000/user?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setCurrentUser(data)
            })

    }, [user])

    return [currentUser];
};

export default useCurrentUser;