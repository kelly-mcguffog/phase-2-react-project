import React from "react";
import HBODramaContainer from "./HBOComponents/HBODramaContainer";
import HBOCrimeContainer from "./HBOComponents/HBOCrimeContainer";
import HBOActionContainer from "./HBOComponents/HBOActionContainer";
import HBOMysteryContainer from "./HBOComponents/HBOMysteryContainer";
import HBORomanceContainer from "./HBOComponents/HBORomanceContainer";
import HBOSciFiContainer from "./HBOComponents/HBOSciFiContainer";
import HBOThrillerContainer from "./HBOComponents/HBOThrillerContainer";


function HBO({allContent}){
    
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
            {displayHBODramas.length > 0 ? <HBODramaContainer displayHBODramas={displayHBODramas}/> : false}
            {displayHBOCrime.length > 0 ? <HBOCrimeContainer displayHBOCrime={displayHBOCrime}/> : false}
            {displayHBOAction.length > 0 ? <HBOActionContainer displayHBOAction={displayHBOAction}/> : false}
            {displayHBOMystery.length > 0 ? <HBOMysteryContainer displayHBOMystery={displayHBOMystery}/> : false}
            {displayHBORomance.length > 0 ? <HBORomanceContainer displayHBORomance={displayHBORomance}/> : false}
            {displayHBOThriller.length > 0 ? <HBOThrillerContainer displayHBOThriller={displayHBOThriller}/> : false}
            {displayHBOSciFi.length > 0 ? <HBOSciFiContainer displayHBOSciFi={displayHBOSciFi}/> : false}
        </div>
        )

}

export default HBO;