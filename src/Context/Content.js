import React, { createContext } from "react";

const ContentContext = createContext()

function ContentProvider({children}){
    return(
        <ContentContext.Provider value={0}>
            {children}
        </ContentContext.Provider>
    )
}

export {ContentContext, ContentProvider}