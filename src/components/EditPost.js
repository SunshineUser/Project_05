import React,{useState} from "react"



const EditPost = (post) =>{
    //useState for edit information
    const [toggleEdit, setToggleEdit] = useState(false);
    const editToggler = () => toggleEdit? setToggleEdit(false) :setToggleEdit(true);


    const [title, setTitle] = useState("");
    const [description, setDescription]= useState("");
    const [price, setPrice] = useState("");
    const [location, setLocation] = useState("");
    const [willDeliver, setWillDeliver] = useState("");

    console.log(post.post._id);


    async function callEdit(event){
        event.preventDefault();
        try{
            const response = await fetch(`https://strangers-things.herokuapp.com/api/2209-ftb-mt-web-ft/posts/${post.post._id}`,{
                method: "PATCH",
                headers: {
                    'Content-Type': 'application-json',
                    'Authorization': 'Bearer '+ localStorage.getItem("token")
                },
                body: JSON.stringify({
                    post:{
                        title: title,
                        description: description,
                        price: price,
                        location: location,
                        willDeliver: "false"
                    }
                })
            })
            let editInfo = await response.json();
            console.log(editInfo)
        }catch(error){
            console.log(error)
        }
        setTitle=("");
        setDescription=("");
        setPrice=("");
        setLocation=("");
    }


    return(
        <div>
            <button onClick={editToggler}>
                {toggleEdit? <p>Don't edit post</p>:<p>Edit post</p>}
            </button>
            {toggleEdit?<div>


        <form onSubmit={callEdit}>
            <div className="offer">
            <label>Change Item name</label>
            <div>{post.post.title}</div>
            <input type="text" value={title} onChange={(event)=> {setTitle(event.target.value)
                console.log(event.target.value)
                console.log(title)}}></input>
            <br/>
                    
            <label>Change Price</label>
            <input type="text" value={price} onChange={(event)=> {setPrice(event.target.value)
                console.log(event.target.value)}}></input>
            </div>
            <br/>
            
            <label>Change Description</label>
            <input type="text" value={description} onChange={(event)=> {setDescription(event.target.value)
                console.log(event.target.value)}}></input>
            <br/>
            <label>Change Location</label>
            <input type="text" value={location} onChange={(event)=> {setLocation(event.target.value)
                console.log(event.target.value)}}></input>

            <br/>
            <button id="newPost" type="submit">Change my post</button>
            </form>
            </div>:""}
        </div>
    )

}

export default EditPost