import React from "react";
import HuluDramaContainer from "./HuluComponents/HuluDramaContainer";
import HuluCrimeContainer from "./HuluComponents/HuluCrimeContainer";
import HuluActionContainer from "./HuluComponents/HuluActionContainer";
import HuluMysteryContainer from "./HuluComponents/HuluMysteryContainer";
import HuluRomanceContainer from "./HuluComponents/HuluRomanceContainer";
import HuluSciFiContainer from "./HuluComponents/HuluSciFiContainer";
import HuluThrillerContainer from "./HuluComponents/HuluThrillerContainer";


function Hulu({allContent}){
    
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
            {displayHuluDramas.length > 0 ? <HuluDramaContainer displayHuluDramas={displayHuluDramas}/> : false}
            {displayHuluCrime.length > 0 ? <HuluCrimeContainer displayHuluCrime={displayHuluCrime}/> : false}
            {displayHuluAction.length > 0 ? <HuluActionContainer displayHuluAction={displayHuluAction}/> : false}
            {displayHuluMystery.length > 0 ? <HuluMysteryContainer displayHuluMystery={displayHuluMystery}/> : false}
            {displayHuluRomance.length > 0 ? <HuluRomanceContainer displayHuluRomance={displayHuluRomance}/> : false}
            {displayHuluThriller.length > 0 ? <HuluThrillerContainer displayHuluThriller={displayHuluThriller}/> : false}
            {displayHuluSciFi.length > 0 ? <HuluSciFiContainer displayHuluSciFi={displayHuluSciFi}/> : false}
        </div>
        )
}

export default Hulu;