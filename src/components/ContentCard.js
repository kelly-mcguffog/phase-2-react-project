import React, {useState} from "react";

function ContentCard({content}){
    const {title, genre, image, platform, category, description, trailer} = content

    const [isShowingDetails, setDetails] = useState(false)

    function showDetails(){
        setDetails(isShowingDetails => !isShowingDetails)
    }

    return(
        <div onClick={showDetails} className={isShowingDetails ? "hide-content-card" : "content-card"}>
            <img className="card-image" src={image}></img>
            <h3>{title}</h3>
        </div>
    )
}

export default ContentCard;