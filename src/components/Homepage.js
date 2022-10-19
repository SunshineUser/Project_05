import React from "react"
import NavBar from "./NavBar";
import { Outlet} from "react-router-dom";

const Homepage = () =>{
    return(
        <div>
            <NavBar />

            <Outlet />
            hello
            
        </div>
    )
}

export default Homepage