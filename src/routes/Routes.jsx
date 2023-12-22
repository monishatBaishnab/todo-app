import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import ErrorPage from "../pages/ErrorPage";
import MainLayout from "../layouts/MainLayout";
import AddTask from "../pages/AddTask";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Profile from "../pages/Profile";

const Routes = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: 'add-task',
                element: <PrivateRoute><AddTask /></PrivateRoute>
            },
            {
                path: 'profile',
                element: <PrivateRoute><Profile /></PrivateRoute>
            }
        ]
    },
    {
        path: '/signin',
        element: <SignIn />
    },
    {
        path: '/signup',
        element: <SignUp />
    }
])

export default Routes;