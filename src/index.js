import React from "react"
import ReactDOM from "react-dom"
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import ErrorPage from "./components/ErrorPage";
import Homepage from "./components/Homepage";
import LogIn from "./components/login";
import Profile from "./components/profile";
import Posts from "./components/posts";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Homepage/>,
        errorElement: <ErrorPage />,
        children:[
            {
                path: "/login",
                element: <LogIn/>
            },
            {
                path: "/posts",
                element: <Posts/>
            },
            {
                path: "/profile",
                element: <Profile/>
            }
        ]
    }
    // ,
    // {
    //     path: "/Posts",
    //     element: <SaltOfTheEarth/>
    // },
    // {
    //     path: "/Profile",
    //     element: <ohYeahTHATTOPLOOKSSUPERCUTE/>
    // },
     
])




ReactDOM.render(<RouterProvider router={router} />, document.getElementById("app"));