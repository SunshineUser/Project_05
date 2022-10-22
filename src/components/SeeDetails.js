import React,{ useState } from "react";



const SeeDetails = (post) =>{
    const [showDetailsToggle, setShowDetails] = useState(false);
    const detailsLocationToggle = () => showDetailsToggle? setShowDetails(false):setShowDetails(true)
    

    function dateParser(dateString){ 
        let stringStart = dateString.slice(0,9).split('-').reverse().join('-')
        let stringEnd = dateString.slice(11,22)
        return "Date " + stringStart + " Time " + stringEnd;
    }

    

    return(
        <div>
            <button onClick={detailsLocationToggle}>
            {showDetailsToggle? <p>Less details</p>:<p>More details</p>}
            </button>
            {/* All extra details in a good format */}
            {showDetailsToggle ?<div>
            <div className="createdAt">Time posted: {dateParser(post.post.createdAt)}</div>
            {post.post.createdAt !== post.post.updatedAt?<div className="updated">Updated at: {dateParser(post.post.updatedAt)}</div>:"" }
            <div className="location">Location: {post.post.location}</div>
            <div className="willDeliver">The author is {post.post.willDeliver? "willing":"not willing"} to deliver</div>
            </div>
            :""}

        </div>
    )

}

export default SeeDetails