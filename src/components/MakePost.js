import React,{useEffect, useState} from "react";



//create a make post component, import setPostData and fetchPostData from the Posts page so I can refresh the page when I use it
const MakePost =({setPostData, fetchPostData}) =>{
    //post data use-state setters description, title, price
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    


    //sendPostData function to interact with the API on the useage of the event
    async function sendPostData(event){
        event.preventDefault()
        try{
            //wait for the response for the POST method fetch, setting the title, desc, etc to the inputted values from the return statement below
            const response = await fetch("https://strangers-things.herokuapp.com/api/2209-ftb-mt-web-ft/posts", {
                method: "POST",
                headers:{
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem("token")}`
                },
                body: JSON.stringify({
                    post:{
                        title: title,
                        description: description,
                        price: price,
                        willDeliver: "false"
                    }
                })
            })
            console.log(fetch);
        }catch(error){
            console.log(error);
        }
        
        //run the function upon event
        fetchPostData(setPostData);
        //reset all values within the bar upon using the event.
        setTitle("");
        setPrice("");
        setDescription("");
    }

    return(
        <div>
            {/* input form that waits for a submit and sends postData upon the submit being sent parameters are set title set price and set description*/}
            <form onSubmit={sendPostData}>
                <label>Enter item for sale name here</label>
                <input type="text" value={title} onChange={(event)=> {setTitle(event.target.value)
                    console.log(event.target.value)}}></input>
                
                <br/>
                    
                <label>Enter price</label>
                <input type="text" value={price} onChange={(event)=> {setPrice(event.target.value)
                    console.log(event.target.value)}}></input>
                <br/>

                <label>Enter Description</label>
                <input type="text" value={description} onChange={(event)=> {setDescription(event.target.value)
                    console.log(event.target.value)}}></input>
                <br/>
                <button id="newPost" type="submit">Enter a New Post!</button>
            </form>
        </div>
    )
}

export default MakePost