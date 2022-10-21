import React, {useEffect, useState} from "react";
import { Outlet } from "react-router-dom";
import DeletePost from "./DeletePost";


const Profile=()=>{
const [profileData, setProfileData] = useState({});


useEffect(()=>{
    async function fetchProfileData(){
        try{

            const response = await fetch("https://strangers-things.herokuapp.com/api/2209-ftb-mt-web-ft/users/me",{
            headers:{
                'Content-Type': 'application/json',
                'Authorization': 'bearer '+ localStorage.getItem("token")
            },
            })
            let Data= await response.json()
            setProfileData(Data.data);
        } catch(error){
            console.log(error);
        }
    }
    localStorage.token && localStorage.token.length? fetchProfileData(): "";
},[])


    return(
        
        <div>
            <h1>Welcome to your profile: {profileData.username}</h1>
            {console.log(profileData)}
            <div className="posts">Posts: {profileData.posts && profileData.posts.length? 
            
            
            profileData.posts.map((post, idx)=>{
                return(
                    post.active?
                    <div key={idx}>
                    <div className="offer">
                    <div className="title">{post.title}</div>
                    <button className="button">More details</button>
                    </div>

                    <div className="textSpace">
                    <div className="price">Price = {post.price}</div>
                    <div className="description">Description:{post.description}</div> 
                    <DeletePost post={post._id}/>
                    </div>
                    </div>
                    : ""
                )
            })
            :"It looks like you haven't posted yet."}</div>
            
            </div>
    )
}

export default Profile;