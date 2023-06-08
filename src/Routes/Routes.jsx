import { createBrowserRouter } from 'react-router-dom'
import Main from '../Layoutes/Main';
import Home from '../pages/Home/Home/Home';
import Login from '../pages/Authentication/Login/Login';
import Register from '../pages/Authentication/Register/Register';
import AuthLayout from '../Layoutes/AuthLayout';
import Dashboard from '../Layoutes/Dashboard';
import MyCourses from '../pages/Dashboard/StudentDashboard/MyCourses/MyCourses';
import ErrorPage from '../pages/ErrorPage/ErrorPage';

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
        element: <Dashboard></Dashboard>,
        children: [
            {
                path: 'myCourses',
                element: <MyCourses></MyCourses>
            }
        ]
    }
])

export default router;