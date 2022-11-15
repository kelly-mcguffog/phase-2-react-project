import React from "react";
import HBODramaContainer from "./HBOComponents/HBODramaContainer";
import HBOCrimeContainer from "./HBOComponents/HBOCrimeContainer";
import HBOActionContainer from "./HBOComponents/HBOActionContainer";
import HBOMysteryContainer from "./HBOComponents/HBOMysteryContainer";
import HBORomanceContainer from "./HBOComponents/HBORomanceContainer";
import HBOSciFiContainer from "./HBOComponents/HBOSciFiContainer";
import HBOThrillerContainer from "./HBOComponents/HBOThrillerContainer";


function HBO({allContent, handleEditMedia}){
    
    const hboContent = allContent.filter(content => content.platform === "HBO Max")

    const displayHBODramas = hboContent.filter(content => content.genre === "Drama")
    const displayHBOCrime = hboContent.filter(content => content.genre === "Crime")
    const displayHBOAction = hboContent.filter(content => content.genre === "Action")
    const displayHBOMystery = hboContent.filter(content => content.genre === "Mystery")
    const displayHBOThriller = hboContent.filter(content => content.genre === "Thriller")
    const displayHBORomance = hboContent.filter(content => content.genre === "Romance")
    const displayHBOSciFi = hboContent.filter(content => content.genre === "Sci-Fi")
   
    return(
        <div className="card-container">
            {displayHBODramas.length > 0 ? <HBODramaContainer handleEditMedia={handleEditMedia} displayHBODramas={displayHBODramas}/> : false}
            {displayHBOCrime.length > 0 ? <HBOCrimeContainer handleEditMedia={handleEditMedia} displayHBOCrime={displayHBOCrime}/> : false}
            {displayHBOAction.length > 0 ? <HBOActionContainer handleEditMedia={handleEditMedia} displayHBOAction={displayHBOAction}/> : false}
            {displayHBOMystery.length > 0 ? <HBOMysteryContainer handleEditMedia={handleEditMedia} displayHBOMystery={displayHBOMystery}/> : false}
            {displayHBORomance.length > 0 ? <HBORomanceContainer handleEditMedia={handleEditMedia} displayHBORomance={displayHBORomance}/> : false}
            {displayHBOThriller.length > 0 ? <HBOThrillerContainer handleEditMedia={handleEditMedia} displayHBOThriller={displayHBOThriller}/> : false}
            {displayHBOSciFi.length > 0 ? <HBOSciFiContainer handleEditMedia={handleEditMedia} displayHBOSciFi={displayHBOSciFi}/> : false}
        </div>
        )

}

export default HBO;