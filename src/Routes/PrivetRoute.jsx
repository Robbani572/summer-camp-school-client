import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import LoadingPage from "../components/LoadingPage/LoadingPage";
import { Navigate, useLocation } from "react-router-dom";


const PrivetRoute = ({children}) => {

    const {user, loading} = useContext(AuthContext)
    const location = useLocation()

    if(loading){
        return <LoadingPage></LoadingPage>
    }

    if(user){
        return children
    }

    return <Navigate to="/auth/login" state={{from: location}} replace>
        {children}
    </Navigate>;
};

export default PrivetRoute;