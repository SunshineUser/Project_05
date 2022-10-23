// how to create a register form or any form that uses a post to create new data
// don't forget to import the usestate hook from react

import { useState } from "react"
import React from "react";
import ReactDOM from "react-dom";
import {useNavigate} from "react-router-dom";


const LogIn=() =>{

    const navigate = useNavigate();

    //logout function lmao (resets token and that's all it needs to do)
    const logOut=()=>{
        localStorage.setItem("token","")
    }

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("")
    //setp 2 create some state (you might need multiple to hold the username password whatever authentication you need from your users)

    // step 3 we need to write a callback function that will  do something the moment the user hits the register for new account IE the submit button.
        // note this is where you need to write your post request using the fetch API
    async function formSubmitHandler(event) {
        //prevents full page refresh
        event.preventDefault();
        try {
                // arguments of the fetch method: 1) what is the api endpoint URL that you are trying to reach 
                // 2) An object that allows us to customize our fetch mtehod to handle different types of requests such as (POST DELETE ETC.)

            const response = await fetch("https://strangers-things.herokuapp.com/api/2209-ftb-mt-web-ft/users/login",
            {
                //what is the type of request
                // in order to do this step you need to specify a method key on your object with the key-value pair
                // type of request needs to be in all caps
                method: "POST",
                //what headers does this API endpoint require, in order to figure this out you need to read the API documentation for that specific API endpoint
                headers: {
                    'Content-Type': 'application/json' 
                },
                // step 3c) Next, we have to specify what is the BODY of this text aka what kind of type of info are we passing
                body: JSON.stringify({
                    user: {
                        username: username,
                        password: password
                    }
                })
            })
            //acquiring our wristband (entry)
            const data = await response.json()
            console.log("this is our translated data: ", data)
            // local storageToken 
            localStorage.setItem("token", data.data.token);

        }catch(error){
            console.log(error);
        }
        navigate("../Profile");
    }

    const updatePasswordState = (event)=> {
        console.log("this is the value of the event target", event.target.value);
        setPassword(event.target.value)
    }
    
    return(
        <div>
            {/* attach the callback function that we just wrote to the form element itself and specifically we need to create an on event listener for an onSubmit Event */}
            
            {/* ternary for logout checks log condition */}
            {!localStorage.token?

            <form onSubmit={formSubmitHandler}>
                <label>Enter Username Here  </label>
                <input type="text" value={username} onChange={(event) => {setUsername(event.target.value) 
                    console.log(event.target.value)}}></input>
                    
                <br/>

                <label>Enter Password Here  </label>
                <input type="password" value={password} onChange={(updatePasswordState)}></input>
                <br/>

                <button id="Login" type="submit">Log in</button>
            </form>
            : <div>
            <div> You are currently logged in. Would you like to log out?</div>
            <form onSubmit={logOut} type="submit">
                <button id="logOut" type="submit">Log Out</button>
            </form>
            </div>
                
            
            }

        </div>
    )
}

export default LogIn;