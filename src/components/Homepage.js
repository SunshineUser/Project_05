import React, { useEffect }  from "react";
import {useState} from "react";
import NavBar from "./NavBar";
import { Outlet } from "react-router-dom";
import DisplayName from "./DisplayName";



const Homepage = () =>{

    //pull api data for passing as context to the rest of my document.
    const [apiData, setApiData] = useState(["filler data"])

    //console.log("this is where I'd pass the api stuff if I had any " + apiStuff )
    
    useEffect(()=>{
        async function fetchStrangerData(){
            try{
                const response = await fetch("https://strangers-things.herokuapp.com/api/2029-ftb-mt-web-ft/posts")
                const apiData2 = await response.json();
                setApiData()

                console.log("this is the data" , apiData2);
            }catch(error){
                console.log(error);
            }
        }
        fetchStrangerData();
    },[])


    return(
        <div>
            <NavBar /> 
            <DisplayName />
            <Outlet context={apiData} />
            
        </div>
    )
}

export default Homepage