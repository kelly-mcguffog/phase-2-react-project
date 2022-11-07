import React from "react";
import ConentCard from "./ContentCard";

function Container({allContent}){

    
    return(allContent.map(content => <ConentCard key={content.id} content={content}/>))
}

export default Container;