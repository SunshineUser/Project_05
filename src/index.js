import React from "react"
import ReactDOM from "react-dom"
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import ErrorPage from "./components/ErrorPage";
import Homepage from "./components/Homepage";
import LogIn from "./components/Login";
import Profile from "./components/Profile";
import Posts from "./components/Posts";
import Index from "./components/Index";
import Register from "./components/Register";



const router = createBrowserRouter([
    {
        path: "/",
        element: <Homepage/>,
        errorElement: <ErrorPage />,
        children:[
            {
                index: true,
                element: <Index />
            },
            {
                path: "/Login",
                element: <LogIn/>
            },
            {
                path:"/Register",
                element: <Register/>
            },
            {
                path: "/Posts",
                element: <Posts/>,
            },
            {
                path: "/Profile",
                element: <Profile />,
            }
        ]
    }
])

ReactDOM.render(<RouterProvider router={router} />, document.getElementById("app"));