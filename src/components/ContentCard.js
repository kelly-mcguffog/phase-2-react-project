import React from "react";

function ConentCard({content}){
    const {title, genre, image, platform, category, description, trailer} = content

    return(
        <div className="content-card">
            <img className="card-image" src={image}></img>
            <h3>{title}</h3>
            <p>{platform}</p>
        </div>
    )
}

export default ConentCard;