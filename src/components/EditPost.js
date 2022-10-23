import React,{useState} from "react"



const EditPost = (props) =>{
    //useState for edit information
    const [toggleEdit, setToggleEdit] = useState(false);
    const editToggler = () => toggleEdit? setToggleEdit(false) :setToggleEdit(true);


    const [title, setTitle] = useState("");
    const [description, setDescription]= useState("");
    const [price, setPrice] = useState("");
    const [location, setLocation] = useState("");
    const [willDeliver, setWillDeliver] = useState("");
    const [id,setId]= useState("");
    // console.log(props.post._id);
    


    async function callEdit(event){
        event.preventDefault();
        console.log(title);
        console.log(price);
        try{
            console.log(id);
            const response = await fetch(`https://strangers-things.herokuapp.com/api/2209-ftb-mt-web-ft/posts/${id}`,{
                method: "PATCH",
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem("token")}`
                },
                body: JSON.stringify({
                    post:{
                        title: title,
                        description: description,
                        price: price
                        // location: location,
                        // willDeliver: false
                    }
                })
            })
            const editInfo = await response.json();
            console.log(editInfo)
        }catch(error){
            console.log(error)
        }
        // setTitle=("");
        // setDescription=("");
        // setPrice=("");
        // setLocation=("");
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
            <div>{props.post.title}</div>
            <input type="text" value={title} onChange={(event)=> {setTitle(event.target.value)
                console.log(event.target.value)}}></input>
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
            <button id="newPost" type="submit" onClick ={ () =>setId(props.post._id)}>Change my post</button>
            </form>
            </div>:""}
        </div>
    )

}

export default EditPost