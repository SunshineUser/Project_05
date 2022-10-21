import React, {useEffect, useState } from "react";
import ReactDOM from "react-dom";
import MakePost from "./MakePost"
import { useOutletContext } from 'react-router-dom'

//establish posts component for outputting visual post information as well as managing the posts, including deleting posts and sending them (within separate trees)
const Posts=()=>{
    const [postData, setPostData] = useState([])

    const profileData= useOutletContext();
    console.log("this is the profile data" + profileData);
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
                <div className="username">User       {post.author.username}</div>
                <div className="title">{post.title}</div>
                <button className="button">More details</button>
                </div>

                <div className="textSpace">
                <div className="price">Price = {post.price}</div>
                <div className="description">Description:{post.description}</div>


                    {/* set a ternary to show a post as deletable only if it's mine by matching token names or whatever */}
                    { console.log("show us the data"+ profileData) }
                <div><button className="delete">delete?</button></div>
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