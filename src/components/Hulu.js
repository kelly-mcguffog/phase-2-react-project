import React from "react";
import HuluDramaContainer from "./HuluComponents/HuluDramaContainer";
import HuluCrimeContainer from "./HuluComponents/HuluCrimeContainer";
import HuluActionContainer from "./HuluComponents/HuluActionContainer";
import HuluMysteryContainer from "./HuluComponents/HuluMysteryContainer";
import HuluRomanceContainer from "./HuluComponents/HuluRomanceContainer";
import HuluSciFiContainer from "./HuluComponents/HuluSciFiContainer";
import HuluThrillerContainer from "./HuluComponents/HuluThrillerContainer";


function Hulu({handleEditMedia, allContent}){
    
    const huluContent = allContent.filter(content => content.platform === "Hulu")

    const displayHuluDramas = huluContent.filter(content => content.genre === "Drama")
    const displayHuluCrime = huluContent.filter(content => content.genre === "Crime")
    const displayHuluAction = huluContent.filter(content => content.genre === "Action")
    const displayHuluMystery = huluContent.filter(content => content.genre === "Mystery")
    const displayHuluThriller = huluContent.filter(content => content.genre === "Thriller")
    const displayHuluRomance = huluContent.filter(content => content.genre === "Romance")
    const displayHuluSciFi = huluContent.filter(content => content.genre === "Sci-Fi")

    
    return(
        <div className="card-container">
            {displayHuluDramas.length > 0 ? <HuluDramaContainer handleEditMedia={handleEditMedia} displayHuluDramas={displayHuluDramas}/> : false}
            {displayHuluCrime.length > 0 ? <HuluCrimeContainer handleEditMedia={handleEditMedia} displayHuluCrime={displayHuluCrime}/> : false}
            {displayHuluAction.length > 0 ? <HuluActionContainer handleEditMedia={handleEditMedia} displayHuluAction={displayHuluAction}/> : false}
            {displayHuluMystery.length > 0 ? <HuluMysteryContainer handleEditMedia={handleEditMedia} displayHuluMystery={displayHuluMystery}/> : false}
            {displayHuluRomance.length > 0 ? <HuluRomanceContainer handleEditMedia={handleEditMedia} displayHuluRomance={displayHuluRomance}/> : false}
            {displayHuluThriller.length > 0 ? <HuluThrillerContainer handleEditMedia={handleEditMedia} displayHuluThriller={displayHuluThriller}/> : false}
            {displayHuluSciFi.length > 0 ? <HuluSciFiContainer handleEditMedia={handleEditMedia} displayHuluSciFi={displayHuluSciFi}/> : false}
        </div>
        )
}

export default Hulu;