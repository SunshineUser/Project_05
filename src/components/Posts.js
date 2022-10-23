import React, {useEffect, useState } from "react";
import MakePost from "./MakePost";
import SeeDetails from './SeeDetails';
import SendMessage from "./SendMessage";


//establish posts component for outputting visual post information as well as managing the posts, including deleting posts and sending them (within separate trees)
const Posts=()=>{
    const [postData, setPostData] = useState([])


    //toggle button for the make new post location 
    const [makePostToggle, setMakePostToggle] = useState(false);
    

    const handlePostFormToggle=() => makePostToggle? setMakePostToggle(false):setMakePostToggle(true)
    
    
    async function fetchPostData(cB){
        try{
            const response = await fetch("https://strangers-things.herokuapp.com/api/2209-ftb-mt-web-ft/posts");
            let data = await response.json();
            cB(data.data.posts);
            console.log(data.data.posts);
            // console.log(postData) has this been set yet?
        } catch(error){
            console.log(error);
        }
        
    }
    //what am I doing here, I wrote this code so long ago. 
    useEffect(()=>{ 
        fetchPostData(setPostData);
    },[])

return(
    <div>
        {/* <div>{console.log(postData)}</div> */}
        <h1><button onClick={handlePostFormToggle}>Make a new Post</button></h1>
        {makePostToggle?<MakePost setPostData={setPostData} fetchPostData={fetchPostData} />:""}
        {
            postData.length ? postData.map((post, idx) => {
                return (
                    // eww a complex piece of code that "deletes" non active items
                post.active?

                <div key={idx}>
                    <div className="offer">
                        <div className="username">User {post.author.username}</div>
                        <div className="title">{post.title}</div>

                    
                    
                    
                    </div>
                    {/* more details area calls more details */}
                    <div className="textSpace">
                        <div className="price">Price = {post.price}</div>
                        <div className="description">Description:{post.description}</div>  
                        <SeeDetails post={post}/>
                        <SendMessage post={post}/> 
                    </div>
                </div>
                // do nothing
                :""
                )
            })
            :<div> there's no user data </div>
        }
    </div>
)
}
export default Posts;