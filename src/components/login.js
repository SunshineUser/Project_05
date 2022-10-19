// how to create a register form or any form that uses a post to create new data
// don't forget to import the usestate hook from react

import { useState } from "react"
import React from "react";
import ReactDOM from "react-dom";


const LogIn=() =>{
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

const response = await fetch("https://strangers-things.herokuapp.com/api/2209-ftb-mt-web-ft/users/register",
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

                }
            )
        //acquiring our wristband (entry)
            const data = await response.json()
            console.log("this is our translated data: ", data)
            // local storage
                // take the json webtoken from the translated process and store it in local storage
                //store things in local storage using a method called localStorage.setItem()
                    //Note: the localStorage.setItem( method takes in two arguments)
                    // 1) what is the name of the key (string) and value
            localStorage.setItem("token", data.data.token);
             
        } catch(error){
            console.log(error);
        }
    }

    const updatePasswordState = (event)=> {
        console.log("this is the value of the event target", event.target.value);
        setPassword(event.target.value)
    }


    return(
        <div>
            {/* attach the callback function that we just wrote to the form element itself and specifically we need to create a ne event listeneder for an onSubmit Event */}
            <form onSubmit={formSubmitHandler}>
                <label>Enter New Username Here  </label>
                <input type="text" value={username} onChange={(event) => {setUsername(event.target.value) 
                    console.log(event.target.value)}}></input>
                    
                <br/>

                <label>Enter New Password Here  </label>
                <input type="text" value={password} onChange={(updatePasswordState)}></input>

                <br/>

                <button type="submit">Register New Account</button>
            </form>
        </div>
    )
}

export default LogIn;