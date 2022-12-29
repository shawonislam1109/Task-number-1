import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Login from "../Shared/Login/Login";
import SignUp from "../Shared/signUp/SignUp";
import AddTask from "../Compoenter/AddTask/AddTask";
import Mytask from "../Compoenter/MyTask/Mytask";
import SingleDetails from "../Compoenter/MyTask/SingleDetails";
import CompleteTask from "../Compoenter/CompleteTask/CompleteTask";

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
                path: '/myTask',
                element: <Mytask />
            },
            {
                path: '/Task/:id',
                element: <SingleDetails />,
                loader: ({ params }) => fetch(`https://task-number-1-server.vercel.app/userTask/${params.id}`)
            },
            {
                path: '/completeTask',
                element: <CompleteTask />
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