import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import LoadingPage from "../components/LoadingPage/LoadingPage";
import { Navigate, useLocation } from "react-router-dom";
import useUser from "../hooks/useUser/useUser";
import useCurrentUser from "../hooks/useCurrentUser/useCurrentUser";


const AdminRoutes = ({children}) => {

    const {user, loading} = useContext(AuthContext)
    const [currentUser] = useCurrentUser()
    const location = useLocation()
    const [adminLoading] = useUser()

    const isAdmin = currentUser?.role === 'admin';

    if(loading || adminLoading){
        return <LoadingPage></LoadingPage>
    }

    if(user || isAdmin){
        return children
    }

    return <Navigate to="/auth/login" state={{from: location}} replace>
        {children}
    </Navigate>;
};

export default AdminRoutes;