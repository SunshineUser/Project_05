import React from "react";
import { useState } from "react";
import ReactDOM from "react-dom";



const Register= () =>{
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    async function formSubmitHandler(event){
        event.preventDefault();
        try{
            const response = await fetch("https://strangers-things.herokuapp.com/api/2209-ftb-mt-web-ft/users/register",{
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    user: {
                        username: username,
                        password: password
                    }
                })
            })
            const tokenData= await response.json()
            console.log("this is our translated data: ", tokenData)
            localStorage.setItem("token", tokenData.data.token);
        } catch(error){
            console.log(error);
        }
    }
    const updatePasswordState = (event)=>{
        console.log("this is the value of the event target", event.target.value);
        setPassword(event.target.value)
    }
    return(
        <div>
            <form onSubmit={formSubmitHandler}>
                <label>Enter New Username Here  </label>
                <input type="text" value={username} onChange={(event) => {setUsername(event.target.value) 
                    console.log(event.target.value)}}></input>
                    
                <br/>

                <label>Enter New Password Here  </label>
                <input type="text" value={password} onChange={(updatePasswordState)}></input>

                <br/>

                <button id="newAccount" type="submit">Register New Account</button>
            </form>
        </div>
    )
}

export default Register;