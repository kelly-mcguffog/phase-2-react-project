import React from "react";
import NetflixDramaContainer from "./NetflixComponents/NetflixDramaContainer";
import NetflixCrimeContainer from "./NetflixComponents/NetflixCrimeContainer";
import NetflixActionContainer from "./NetflixComponents/NetflixActionContainer";
import NetflixMysteryContainer from "./NetflixComponents/NetflixMysteryContainer";
import NetflixRomanceContainer from "./NetflixComponents/NetflixRomanceContainer";
import NetflixSciFiContainer from "./NetflixComponents/NetflixSciFiContainer";
import NetflixThrillerContainer from "./NetflixComponents/NetflixThrillerContainer";


function Netflix({allContent}){
    
    const netflixContent = allContent.filter(content => content.platform === "Netflix")

    const displayNetflixDramas = netflixContent.filter(content => content.genre === "Drama")
    const displayNetflixCrime = netflixContent.filter(content => content.genre === "Crime")
    const displayNetflixAction = netflixContent.filter(content => content.genre === "Action")
    const displayNetflixMystery = netflixContent.filter(content => content.genre === "Mystery")
    const displayNetflixThriller = netflixContent.filter(content => content.genre === "Thriller")
    const displayNetflixRomance = netflixContent.filter(content => content.genre === "Romance")
    const displayNetflixSciFi = netflixContent.filter(content => content.genre === "Sci-Fi")

   
    return(
        <div className="card-container">
            {displayNetflixDramas.length > 0 ? <NetflixDramaContainer displayNetflixDramas={displayNetflixDramas}/> : false}
            {displayNetflixCrime.length > 0 ? <NetflixCrimeContainer displayNetflixCrime={displayNetflixCrime}/> : false}
            {displayNetflixAction.length > 0 ? <NetflixActionContainer displayNetflixAction={displayNetflixAction}/> : false}
            {displayNetflixMystery.length > 0 ? <NetflixMysteryContainer displayNetflixMystery={displayNetflixMystery}/> : false}
            {displayNetflixRomance.length > 0 ? <NetflixRomanceContainer displayNetflixRomance={displayNetflixRomance}/> : false}
            {displayNetflixThriller.length > 0 ? <NetflixThrillerContainer displayNetflixThriller={displayNetflixThriller}/> : false}
            {displayNetflixSciFi.length > 0 ? <NetflixSciFiContainer displayNetflixSciFi={displayNetflixSciFi}/> : false}
            
        </div>
        )
}

export default Netflix;