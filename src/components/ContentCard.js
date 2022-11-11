import React, {useState} from "react";
import Details from "./Details"

function ContentCard({content}){
    const {title, image} = content

    const [isShowingDetails, setDetails] = useState(false)

    function showDetails(){
        setDetails(isShowingDetails => !isShowingDetails)
    }

    return(
        <div className={isShowingDetails ? "content-details" : "content-card"} onClick={showDetails}>
            {isShowingDetails ? <Details content={content}/> : false}
            <img className={isShowingDetails ? "content-details-image" : "card-image"} src={image}></img>
            <h3 className={isShowingDetails ? "content-details-title" : "card-title"}>{title}</h3>
        </div>
    )
}

export default ContentCard;