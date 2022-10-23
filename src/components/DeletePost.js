import React from "react"

// For editing or deleting --> 
            // Send another fetch request to regrab the new posts data collection
            // Reset my state with the newly updated posts collection by using your setter method

//unfinished try catch 
const DeletePost = (props)=>{
    async function deleteEvent(event){
        event.preventDefault();
        try{
            console.log(`https://strangers-things.herokuapp.com/api/2209-ftb-mt-web-ft/posts/${props.post}`);
            const response = await fetch(`https://strangers-things.herokuapp.com/api/2209-ftb-mt-web-ft/posts/${props.post}`,{
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                    'Authorization': "Bearer "+ localStorage.getItem("token")
                }
            })
            const deleteInfo= await response.json();
            console.log("this is the delete info" + deleteInfo);
        }catch(error){
            console.log(error);
        }
    }
    
    
    return(
        <div>
            <form onSubmit={deleteEvent} type="submit">
                <button className="delete" type="submit">Delete?</button>
            </form>
        </div>
    )
    
}

export default DeletePost