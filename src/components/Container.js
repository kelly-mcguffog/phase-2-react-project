import React from "react";
import ContentCard from "./ContentCard";

function Container({allContent}){

    
    return(allContent.map(content => <ContentCard key={content.id} content={content}/>))
}

export default Container;