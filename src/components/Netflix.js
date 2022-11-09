import React from "react";
import ContentCard from "./ContentCard";


function Netflix({allContent}){
    const netflixContent = allContent.filter(content => content.platform === "Netflix").map(filter => (
        <ContentCard key={filter.title} content={filter}/>
        ))

    return(netflixContent)
}

export default Netflix;