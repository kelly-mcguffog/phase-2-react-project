import React from "react";
import ContentCard from "./ContentCard";


function HBO({allContent}){

    const hboContent = allContent.filter(content => content.platform === "HBO Max").map(filter => (
        <ContentCard key={filter.title} content={filter}/>
        ))


    console.log(hboContent)

    return(hboContent)

}

export default HBO;