import React, {useState} from "react";
import ContentCard from "../ContentCard";

function HuluSciFiContainer({displayHuluSciFi}){
    const [huluSciFiBeltPosition, setHuluSciFiBeltPosition] = useState(0)
    const renderHuluSciFi = displayHuluSciFi.map(content => <ContentCard key={content.id} content={content}/>)
    function advanceHuluSciFiBelt(){
        if((displayHuluSciFi.length % 5 !== 0) && ((displayHuluSciFi.length - huluSciFiBeltPosition) < 10) && ((displayHuluSciFi.length - huluSciFiBeltPosition) > 5)){
            setHuluSciFiBeltPosition(huluSciFiBeltPosition + ((displayHuluSciFi.length % 5)))
        }else{
            setHuluSciFiBeltPosition((huluSciFiBeltPosition + 5) % displayHuluSciFi.length)
        }
    }
    function retreatHuluSciFiBelt(){
        if(huluSciFiBeltPosition > 0){
            setHuluSciFiBeltPosition((huluSciFiBeltPosition - 5) % displayHuluSciFi.length)
        }
    }

    return(
        <div className="scifi-Container">
           <h2>Sci-Fi</h2>
            <button className="arrow-button" onClick={retreatHuluSciFiBelt}><i className="arrow left"></i></button>
            {renderHuluSciFi.slice(huluSciFiBeltPosition, huluSciFiBeltPosition+5)}
            <button className="arrow-button" onClick={advanceHuluSciFiBelt}><i className="arrow right"></i></button>
            </div>
    )
}

export default HuluSciFiContainer;