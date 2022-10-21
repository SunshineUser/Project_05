import React, {useEffect, useState} from "react";
import LogIn from "./Login";


//work smarter? not harder exporting the username to a visual aspect that will show that you're logged in.
const DisplayName=()=>{
    const [profileData, setProfileData] = useState({});

    useEffect(()=>{
        //fetching profile data in a use effect that activates upon login usage (and success(token acquisition))
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
        //being mega slick here and getting react to "react" to the login change
        localStorage.token && localStorage.token.length? fetchProfileData(): ""
    },[LogIn])
        return(
            <div>
                {/* If the username exists, display it */}
                {profileData.username && profileData.username.length? 
                        <div className="currentUser">{profileData.username}</div>
                :"You haven't logged in!"}
            </div>
        )
    }

export default DisplayName;