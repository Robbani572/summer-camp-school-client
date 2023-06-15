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
import Payment from '../pages/Dashboard/StudentDashboard/Payment/Payment';
import AddClass from '../pages/Dashboard/InstructorDashboard/AddClass/AddClass';
import MyClasses from '../pages/Dashboard/InstructorDashboard/MyClasses/MyClasses';
import EnrolledClasses from '../pages/Dashboard/StudentDashboard/EnrolledClasses/EnrolledClasses';
import AllClasses from '../pages/Dashboard/AdminDashboard/AllClasses/AllClasses';
import Instructors from '../pages/Instructors/Instructors';
import InstrcutorDetails from '../pages/InstructorDetails/InstrcutorDetails';
import PaymentHistory from '../pages/Dashboard/StudentDashboard/PaymentHistory/PaymentHistory';

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
                path: 'instructors',
                element: <Instructors></Instructors>
            },
            {
                path: 'instructorDetails/:id',
                element: <InstrcutorDetails></InstrcutorDetails>,
                loader: ({params}) => fetch(`http://localhost:5000/instructors/${params.id}`)
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
            {
                path: 'enrolledClasses',
                element: <EnrolledClasses></EnrolledClasses>
            },
            {
                path: 'paymentHistory',
                element: <PaymentHistory></PaymentHistory>
            },
            
            //instractor dashboard routes
            {
                path: 'addClass',
                element: <AddClass></AddClass>
            },
            {
                path: 'myClasses',
                element: <MyClasses></MyClasses>
            },

            //admin dashboard routes
            {
                path: 'allUsers',
                element: <AllUsers></AllUsers>
            },
            {
                path: 'allClasses',
                element: <AllClasses></AllClasses>
            }
        ]
    }
])

export default router;