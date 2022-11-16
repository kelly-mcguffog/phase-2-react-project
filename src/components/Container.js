import React from "react";
import DramaContainer from "./HomeComponents/DramaContainer";
import CrimeContainer from "./HomeComponents/CrimeContainer";
import ActionContainer from "./HomeComponents/ActionContainer";
import MysteryContainer from "./HomeComponents/MysteryContainer";
import RomanceContainer from "./HomeComponents/RomanceContainer";
import SciFiContainer from "./HomeComponents/SciFiContainer";
import ThrillerContainer from "./HomeComponents/ThrillerContainer";

function Container({allContent, handleEditMedia, setSearch}){
    

    const displayDramas = allContent.filter(content => content.genre === "Drama")
    const displayCrime = allContent.filter(content => content.genre === "Crime")
    const displayAction = allContent.filter(content => content.genre === "Action")
    const displayMystery = allContent.filter(content => content.genre === "Mystery")
    const displayThriller = allContent.filter(content => content.genre === "Thriller")
    const displayRomance = allContent.filter(content => content.genre === "Romance")
    const displaySciFi = allContent.filter(content => content.genre === "Sci-Fi")
      

    return(
        <div className="card-container">
            {displayDramas.length > 0 ? <DramaContainer setSearch={setSearch} handleEditMedia={handleEditMedia} displayDramas={displayDramas}/> : false}
            {displayCrime.length > 0 ? <CrimeContainer setSearch={setSearch} handleEditMedia={handleEditMedia} displayCrime={displayCrime}/> : false}
            {displayAction.length > 0 ? <ActionContainer setSearch={setSearch} handleEditMedia={handleEditMedia} displayAction={displayAction}/> : false}
            {displayMystery.length > 0 ? <MysteryContainer setSearch={setSearch} handleEditMedia={handleEditMedia} displayMystery={displayMystery}/> : false}
            {displayRomance.length > 0 ? <RomanceContainer setSearch={setSearch} handleEditMedia={handleEditMedia} displayRomance={displayRomance}/> : false}
            {displayThriller.length > 0 ? <ThrillerContainer setSearch={setSearch} handleEditMedia={handleEditMedia} displayThriller={displayThriller}/> : false}
            {displaySciFi.length > 0 ? <SciFiContainer setSearch={setSearch} handleEditMedia={handleEditMedia} displaySciFi={displaySciFi}/> : false}
        </div>
        )
}

export default Container;