import { createBrowserRouter } from 'react-router-dom'
import Main from '../Layoutes/Main';
import Home from '../pages/Home/Home/Home';
import Login from '../pages/Authentication/Login/Login';
import Register from '../pages/Authentication/Register/Register';
import AuthLayout from '../Layoutes/AuthLayout';
import Dashboard from '../Layoutes/Dashboard';
import MyCourses from '../pages/Dashboard/StudentDashboard/MyCourses/MyCourses';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import PrivetRoute from './PrivetRoute';
import Courses from '../pages/Courses/Courses';
import AllUsers from '../pages/Dashboard/AdminDashboard/AllUsers/AllUsers';
import AdminRoutes from './AdminRoutes';
import Payment from '../pages/Dashboard/StudentDashboard/Payment/Payment';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "courses/:category",
                element: <Courses></Courses>
            },
            {
                path: "*",
                element: <ErrorPage></ErrorPage>
            }

        ]
    },
    {
        path: "auth",
        element: <AuthLayout></AuthLayout>,
        children: [
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'register',
                element: <Register></Register>
            }
        ]
    },
    {
        path: "dashboard",
        element: <PrivetRoute><Dashboard></Dashboard></PrivetRoute>,
        children: [

            //user dashboar routes
            {
                path: 'myCourses',
                element: <MyCourses></MyCourses>
            },
            {
                path: 'payment/:id',
                element: <Payment></Payment>,
                loader: ({params}) => fetch(`http://localhost:5000/carts/${params.id}`)
            },
            
            //instractor dashboard routes

            //admin dashboard routes
            {
                path: 'allUsers',
                element: <AllUsers></AllUsers>
            }
        ]
    }
])

export default router;