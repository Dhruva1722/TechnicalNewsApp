import React, { useContext, useReducer,useEffect } from "react";
import reducer from "./reducer";

let API = "https://hn.algolia.com/api/v1/search?";

const initialState= {
    isLoading : true,
    query : "REACT",
    nbPages :0,
    page :0,
    hits: [],
};

// context creation

const AppContext = React.createContext();

//create a provider function...
const AppProvider = ({children}) =>{

    //const [state , setState] = useState(initialState);

    const [state , dispatch]= useReducer(reducer,initialState);
  
    const fetchApiData = async (url) =>{

        dispatch({type:"SET_LOADING"});


        try {
            const res =  await fetch(url);
            const data = await res.json();
            console.log(data);
            dispatch({type : "GET_STORIES",
            payload:{
                hits:data.hits,
                nbPages : data.nbPages,
            }
        });
            // isLoading = false;
        } catch (error) {
            console.log(error);
        }
    };

    // remove post
    const removePost = (post_ID) =>{
        dispatch({type:"REMOVE_POST",payload:post_ID});
    };

    // search post
    const searchPost = (searchQuery) => {
        dispatch({
            type : "SEARCH_QUERY",
            payload:searchQuery,
        })
    }

    // to call the api func...
    useEffect (() => {
        fetchApiData(`${API}query=${state.query}&page=${state.page}`)
    }, []);


    return <AppContext.Provider value={{...state,removePost ,searchPost}}>
        {children}
    </AppContext.Provider>;
};

//custom hook create
const useGlobalContext = () =>{
    return useContext(AppContext);
};

export {AppContext ,AppProvider, useGlobalContext};