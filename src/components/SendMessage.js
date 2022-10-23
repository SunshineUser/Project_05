import { useState } from "react";
import React from "react";

const SendMessage = (post)=>{
    // recieve post Id's information and sends it
    const [userMessage, setMessage] = useState("");
    const [toggleButton, setToggleButton] = useState(false);
    
    // Yes. toggle toggle
    const toggleToggle=()=> toggleButton? setToggleButton(false): setToggleButton(true);
    // console.log(`https//:strangers-things.herokuapp.com/api/2209-ftb-mt-web-ft/posts/${post.post._id}/messages`)
    // console.log(`${localStorage.getItem('token')}`)
    // console.log(userMessage)


    async function messageThroughAPI(event){
        event.preventDefault()
        try{
            const response = await fetch("https//:strangers-things.herokuapp.com/api/2209-ftb-mt-web-ft/posts/"+post.post._id+"/messages", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem("token")}`
                },
                body: JSON.stringify({
                    message: {
                      content: "userMessage"
                    }
                })
            })
            const responseInfo = await response.json()
            console.log("this is the messageAPI info " + responseInfo);
        } catch(error){
            console.log(error)
        }
    }


    return(
        //message viewer that allows you to see any messages sent to your post in particular
        //create a button that sends a message to a specific post, a toggle that opens up the opportunity to do so, on post page only.
        //text box that recieves the message as the user types it and sends it.
        <div>
            {/* toggle button for send message feature haha I named it toggle toggle */}
            <button onClick={toggleToggle}>
                {toggleButton? <p>Close message form</p>:<p>Send a private message?</p>}
            </button>
            {toggleButton?<div>
                <form onSubmit={messageThroughAPI} type="submit">
                    <label>Send a message to the user?</label>
                    <input type="text" value={userMessage} onChange={(event)=> {setMessage(event.target.value)
                        console.log(event.target.value)}}>
                    </input>
                    <button className="sendMessage" type="submit">Submit Message</button>
                </form>
            </div>:""}
        </div>
    )
}

export default SendMessage