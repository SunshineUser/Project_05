import React from "react"
import { Link } from "react-router-dom";


const NavBar = () =>{
    return(
        <nav>
            <a id="iansListH">Ian'sList</a>
            <Link to="">Home</Link>
            <Link t0="posts">Posts</Link>
            <Link to="profile">Profile</Link>
            <Link to="login">Log In</Link>



      

        </nav>
    )
}


export default NavBar;