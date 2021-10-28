import React from "react";
import useProtectedPage from "../../hooks/useProtectedPage";


const ListPostPage = () =>{
    useProtectedPage()
    return(
        <div>
           Feed
        </div>
    )
}

export default ListPostPage;