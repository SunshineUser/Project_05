import React from "react"
import { Link } from "react-router-dom";

// create navbar with all links to different pages using Link
const NavBar = () =>{
    return(
        <nav>
            <a id="iansListH">Ian'sList</a>
            <Link to="">Home</Link>
            <Link to="Posts">Posts</Link>
            <Link to="Profile">Profile</Link>
            <Link to="Login">Log In</Link>
            <Link to="Register">Register</Link>
        </nav>
    )
}


export default NavBar;