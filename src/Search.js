import React from "react";
import { useGlobalContext } from "./Context";
import "./App.css"

const Search = () =>{

const { query ,searchPost } = useGlobalContext();
    return (
    <> 
        <h1 className="heading  font">Technical Skill Website</h1>
        <form>

        {/* <div className="query-buttons">
          {/* Generate buttons for each query from the API */}
          {/* {hits.map((curPost) => {
            const { objectID, query: postQuery } = curPost;
            return (
              <button
                key={objectID}
                className={`query-button ${
                  query === postQuery ? "active" : ""
                }`}
                onClick={() => searchPost(postQuery)}
              >
                {postQuery}
              </button>
            );
          })}
        </div> */} 
            <div className="search-container">
                <input className="search-input" type="text" placeholder="search here" value={query}
                onChange={(e) => searchPost(e.target.value)}/>

                <i className="fas fa-search search-icon"></i>
            </div>

          


        </form>
    </>
    );
};

export default Search;