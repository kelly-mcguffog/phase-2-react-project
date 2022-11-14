import React, {useState} from "react";
import ContentCard from "../ContentCard";

function HuluSciFiContainer({displayHuluSciFi}){
    const [huluSciFiBeltPosition, setHuluSciFiBeltPosition] = useState(0)
    const renderHuluSciFi = displayHuluSciFi.map(content => <ContentCard key={content.id} content={content}/>)
    function advanceHuluSciFiBelt(){
        if((displayHuluSciFi.length % 6 !== 0) && ((displayHuluSciFi.length - huluSciFiBeltPosition) < 12) && ((displayHuluSciFi.length - huluSciFiBeltPosition) > 6)){
            setHuluSciFiBeltPosition(huluSciFiBeltPosition + ((displayHuluSciFi.length % 6)))
        }else{
            setHuluSciFiBeltPosition((huluSciFiBeltPosition + 6) % displayHuluSciFi.length)
        }
    }
    function retreatHuluSciFiBelt(){
        if(huluSciFiBeltPosition > 0){
            setHuluSciFiBeltPosition((huluSciFiBeltPosition - 6) % displayHuluSciFi.length)
        }
    }

    return(
        <div className="media-container">
           <div className="genre-header">
                <h2>Sci-Fi</h2>
                <div className="mobileBtns">
                    <div className="back" onClick={retreatHuluSciFiBelt}><i className="arrow left"></i></div>
                    <div className="forward" onClick={advanceHuluSciFiBelt}><i className="arrow right"></i></div>
                </div>
            </div>
           <div className="row">
                <div className="arrow-button" onClick={retreatHuluSciFiBelt}><i className="fa-sharp fa-solid fa-circle-chevron-left"></i></div>
                {renderHuluSciFi.slice(huluSciFiBeltPosition, huluSciFiBeltPosition+6)}
                <div className="arrow-button" onClick={advanceHuluSciFiBelt}><i className="fa-sharp fa-solid fa-circle-chevron-right"></i></div>
            </div>
        </div>
    )
}

export default HuluSciFiContainer;