import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Login from "../Shared/Login/Login";
import SignUp from "../Shared/signUp/SignUp";
import AddTask from "../Compoenter/AddTask/AddTask";

export const route = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <AddTask />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/signUp',
                element: <SignUp />
            },
        ]
    }
])