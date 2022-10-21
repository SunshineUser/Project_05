import React from "react";


const SeeDetails = (post) =>{


    function dateParser(dateString){ 
        console.log(dateString.length)
        let stringStart = dateString.slice(0,9).split('-').reverse().join('-')
        let stringEnd = dateString.slice(11,22)
        return "Date " + stringStart + " Time " + stringEnd;
    }

    

    return(
        <div>
            {/* All extra details in a good format */}
            {<div className="createdAt">Time posted: {dateParser(post.post.createdAt)}</div>}
            {post.post.createdAt !== post.post.updatedAt?<div className="updated">Updated at: {dateParser(post.post.updatedAt)}</div>:"" }
            {<div className="location">Location: {post.post.location}</div>}
            {<div className="willDeliver">The author is {post.post.willDeliver? "willing":"not willing"} to deliver</div>}


        </div>
    )

}

export default SeeDetails