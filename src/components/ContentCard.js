import React, {useState} from "react";
import Details from "./Details"

function ContentCard({content}){
    const {title, image} = content

    const [isShowingDetails, setDetails] = useState(false)

    function showDetails(){
        setDetails(isShowingDetails => !isShowingDetails)
        console.log("hi")
    }

    return(
        // <div className={isShowingDetails ? "content-details-container" : "content-card"} onClick={showDetails}>
        //     {isShowingDetails ? <Details content={content}/> : false}
        //     <img className={isShowingDetails ? "content-details-image" : "card-image"} src={image}></img>
        //     <h3 className={isShowingDetails ? "content-details-title" : "card-title"}>{title}</h3>
        // </div>

        <div className={isShowingDetails ? "content-details-container" : "content-card"}>
            <img className={isShowingDetails ? "content-details-image" : "card-image"} src={image}></img>
            <h3 className={isShowingDetails ? "content-details-title" : "card-title"}>{title}</h3>
            <div id="close-btn" onClick={showDetails}>
                <i id="bar" className={isShowingDetails ? "fa-solid fa-circle-xmark" : "see-more"}></i>
                {isShowingDetails ? <Details isShowingDetails={isShowingDetails} showDetails={showDetails} content={content}/> : false}
            </div>
        </div>

    )
}

export default ContentCard;