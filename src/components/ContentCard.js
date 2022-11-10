import React, {useState} from "react";
import Details from "./Details"

function ContentCard({content}){
    const {title, image} = content

    const [isShowingDetails, setDetails] = useState(false)

    function showDetails(){
        setDetails(isShowingDetails => !isShowingDetails)
    }

    return(
        <div className="content-card" onClick={showDetails}>
            {isShowingDetails ? <Details content={content}/> : false}
            <img className="card-image" src={image}></img>
            <h3>{title}</h3>
        </div>
    )
}

export default ContentCard;