import React, { useEffect } from "react";
import { useGlobalContext } from "./Context";



const Stories = ()=>{
const {hits, isLoading , removePost} = useGlobalContext();
   
    if(isLoading){
        return(
            <h3>Loading.....</h3>
        );
    }

    return ( <>
    
        <div className="stories-div">
    {hits.map((curPost) =>{

        const {title , author, objectID,url,num_comments} = curPost;

        return (

          
       
           <div className="card" key={objectID}>
                <h2>{title}</h2>
                <p>
                    By <span>{author} </span> | <span>{num_comments}</span> comments
                </p>
                <div className="card-button">
                    <a className="readBtn" href={url} target="_blank">Read More</a>
                    <a href="#" className="deleteBtn" onClick={() => removePost(objectID)}><i class="fa fa-trash" aria-hidden="true"></i></a>
                </div>
           </div>
        
        );
    })}
    </div>
    </>
    );
};

export default Stories;