import React from "react";
import HuluDramaContainer from "./HuluComponents/HuluDramaContainer";
import HuluCrimeContainer from "./HuluComponents/HuluCrimeContainer";
import HuluActionContainer from "./HuluComponents/HuluActionContainer";
import HuluMysteryContainer from "./HuluComponents/HuluMysteryContainer";
import HuluRomanceContainer from "./HuluComponents/HuluRomanceContainer";
import HuluSciFiContainer from "./HuluComponents/HuluSciFiContainer";
import HuluThrillerContainer from "./HuluComponents/HuluThrillerContainer";


function Hulu({handleEditMedia, allContent, setSearch}){
    
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
            {displayHuluDramas.length > 0 ? <HuluDramaContainer setSearch={setSearch} handleEditMedia={handleEditMedia} displayHuluDramas={displayHuluDramas}/> : false}
            {displayHuluCrime.length > 0 ? <HuluCrimeContainer setSearch={setSearch} handleEditMedia={handleEditMedia} displayHuluCrime={displayHuluCrime}/> : false}
            {displayHuluAction.length > 0 ? <HuluActionContainer setSearch={setSearch} handleEditMedia={handleEditMedia} displayHuluAction={displayHuluAction}/> : false}
            {displayHuluMystery.length > 0 ? <HuluMysteryContainer setSearch={setSearch} handleEditMedia={handleEditMedia} displayHuluMystery={displayHuluMystery}/> : false}
            {displayHuluRomance.length > 0 ? <HuluRomanceContainer setSearch={setSearch} handleEditMedia={handleEditMedia} displayHuluRomance={displayHuluRomance}/> : false}
            {displayHuluThriller.length > 0 ? <HuluThrillerContainer setSearch={setSearch} handleEditMedia={handleEditMedia} displayHuluThriller={displayHuluThriller}/> : false}
            {displayHuluSciFi.length > 0 ? <HuluSciFiContainer setSearch={setSearch} handleEditMedia={handleEditMedia} displayHuluSciFi={displayHuluSciFi}/> : false}
        </div>
    )
}

export default Hulu;