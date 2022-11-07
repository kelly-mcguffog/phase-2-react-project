import React from "react";
import ContentCard from "./ContentCard";


function Hulu({allContent}){
    const huluContent = allContent.filter(content => content.platform === "Hulu").map(filter => (
        <ContentCard key={filter.title} content={filter}/>
        ))


    console.log(huluContent)

    return(huluContent)
}

export default Hulu;