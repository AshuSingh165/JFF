import React from "react";
// import { useContext } from "react";
import {createContext, useContext } from "react"
//context api has created
const createContext = createContext();

// how to use context api 
const Mycontext = useContext(createContext)

// then here we have function which handle ContextProvider
const handleContextProvider = (children)=>{

    <AuthContext.provider value={''}>
         {children}
    </AuthContext.provider>

}

export default handleContextProvider


