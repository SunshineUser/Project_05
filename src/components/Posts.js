import React, {useEffect, useState } from "react";
import ReactDOM from "react-dom";
import MakePost from "./MakePost"
import { Outlet } from 'react-router-dom'
import SeeDetails from './SeeDetails'

//establish posts component for outputting visual post information as well as managing the posts, including deleting posts and sending them (within separate trees)
const Posts=()=>{
    const [postData, setPostData] = useState([])


    //toggle button for the make new post location 
    const [makePostToggle, setMakePostToggle] = useState(false);
    const [showDetailsToggle, setShowDetails] = useState(false);

    const handlePostFormToggle=() => makePostToggle? setMakePostToggle(false):setMakePostToggle(true)
    const detailsLocationToggle = () => showDetailsToggle? setShowDetails(false):setShowDetails(true)
    
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

                {/* more details area calls more details */}
                {/* <Outlet context={post}/> */}
                <button onClick={detailsLocationToggle} >
                {showDetailsToggle? <p>More details</p>:<p>Less details</p>}
                </button>

                </div>

                <div className="textSpace">
                <div className="price">Price = {post.price}</div>
                <div className="description">Description:{post.description}</div>  
                {showDetailsToggle?<SeeDetails post={post}/>:""}
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