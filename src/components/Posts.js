import React, {useEffect, useState } from "react";
import ReactDOM from "react-dom";

const Posts=()=>{
    const [postData, setPostData] = useState([])

    useEffect(()=>{
        async function fetchPostData(){
            try{
                const response = await fetch("https://strangers-things.herokuapp.com/api/2209-ftb-mt-web/posts");
                let data = await response.json();
                setPostData(data.data.posts);
                console.log(data.data.posts);
                // console.log(postData) has this been set yet?
            } catch(error){
                console.log(error);
            }
            
        }
        fetchPostData();
    },[])

return(
    <div>
        {/* <div>{console.log(postData)}</div> */}
        {
            postData.length ? postData.map((post, idx) => {
                return (
                <div key={idx}>
                <div className="offer">
                <div className="username">User       {post.author.username}</div>
                <div className="title">{post.title}</div>
                <button className="button">More details</button>
                </div>

                <div className="textSpace">
                <div className="price">Price = {post.price}</div>
                <div className="description">Description:{post.description}</div>
                <div className="willDeliver">{post.willDeliver}</div>
                </div>
                </div>
                )
            })
            :<div> there's no user data </div>
        }
    </div>
)
}
export default Posts;