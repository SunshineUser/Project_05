import React, {useEffect, useState} from "react";

const Profile=()=>{
const [profileData, setProfileData] = useState({});


useEffect(()=>{
    async function fetchProfileData(){
        try{

            const response = await fetch("https://strangers-things.herokuapp.com/api/2209-ftb-mt-web-ft/users/me",{
            headers:{
                'Content-Type': 'application/json',
                'Authorization': 'bearer '+localStorage.getItem("token")
            },
            })
            let Data= await response.json()
            setProfileData(Data.data);
            console.log(profileData);
        } catch(error){
            console.log(error);
        }
    }
    fetchProfileData();
},[])


    return(
        
        <div>
            <h1>Welcome to your profile: {profileData.username}</h1>
            <div className="posts">Posts: {profileData.posts.length? profileData.posts : "It looks like you haven't posted yet."}</div>
            
        </div>
    )
}

export default Profile;