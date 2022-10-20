import React, { useEffect, useState } from "react"
import ReactDOM from "react-dom";


const Posts=()=>{
    // const postData2 = useOutletContext();
    // console.log("this is our outlet context", postData2);
    ////    getter    setter
    const [postData, setPostData] = useState([]);

    useEffect(()=>{
        async function fetchPostData(){
            try {
                const response = await fetch("https://strangers-things.herokuapp.com/api/2209-ftb-mt-web-ft/posts");
                let data = await response.json();
                setPostData(data);
                console.log(data);
            } catch(error){
                console.log(error);
            }
        }
        fetchPostData();
    },[])

    return(
        <div>
                
            
            {console.log("candy")}
            {
            postData && postData.length ? postData.map((post, idx) => {
               
            })

            : <div> there's no data </div>
            }
             
        </div>
    )
}

export default Posts;


///use effect => that can do one of three things (1)listen for the dom to render and render whateverhappens inside of it
// 2)listen for a change in a particular variable and run when that change occurs
// 3) render when dom renders and render during update of variable