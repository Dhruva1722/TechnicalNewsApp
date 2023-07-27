import React from "react";
import { useGlobalContext } from "./Context";

const Pagination =() =>{

 const {page , nbPages , getPrevPage,getNextPage} = useGlobalContext();
   

    return (
        <>
        
            <div className="pagination-btn">

                <button className="prevBtn" onClick={() =>getPrevPage()}>Previous</button>
                    <p id="pageno">
                        {page + 1} of {nbPages}
                    </p>
                <button className="nexyBtn" onClick={() => getNextPage()}>Next</button>
            </div>
        
        
        
        
        </>
    );
};

export default Pagination;