import React from "react";
import ContentCard from "./ContentCard";

function Container({allContent}){

    // const renderContent = allContent.map(content => <ContentCard key={content.id} content={content}/>)
    // const genreC = renderContent.map(content => content.title)
    // console.log(genreC)
    
    return(
        <div className="card-container">
            {allContent.map(content => <ContentCard key={content.id} content={content}/>)}
        </div>
        )
}

export default Container;