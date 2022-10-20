import React from "react"

// For editing or deleting --> 
            // Send another fetch request to regrab the new posts data collection
            // Reset my state with the newly updated posts collection by using your setter method

//unfinished try catch 
const DeletePost = ()=>{
    async function deletePost(event){
        try{
            const response = await fetch("https://strangers-things.herokuapp.com/api/2209ftb-mt-web-ft/posts",{
            method: "DELETE",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                
            })
            })
        }catch
    }
    
    
    return(
        <nav></nav>
    )
    
}