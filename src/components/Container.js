import React from "react";
import ContentCard from "./ContentCard";

function Container({allContent}){

    
    return(
        <div className="card-container">
            {allContent.map(content => <ContentCard key={content.id} content={content}/>)}
        </div>
        )
}

export default Container;