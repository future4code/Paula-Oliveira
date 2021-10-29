import React from "react";
import { useState } from "react";
import { GlobalContext } from "./GlobalContext"


const GlobalState = (props) => {

  const token = localStorage.getItem("token");
  const [rightButtonText, setRightButtonText] = useState(
    token ? "logout" : "login"
  );

    const states = {rightButtonText}
    const setters = {setRightButtonText};
    
 return(
      <GlobalContext.Provider value={{ states, setters}}>
        {props.children}
      </GlobalContext.Provider>
    )
}
export default GlobalState