import React, {useState} from "react";
import ContentCard from "../ContentCard";

function HuluRomanceContainer({displayHuluRomance}){
    const [huluRomanceBeltPosition, setHuluRomanceBeltPosition] = useState(0)
    const renderHuluRomance = displayHuluRomance.map(content => <ContentCard key={content.id} content={content}/>)

    function advanceHuluRomanceBelt(){
        if((displayHuluRomance.length % 5 !== 0) && ((displayHuluRomance.length - huluRomanceBeltPosition) < 10) && ((displayHuluRomance.length - huluRomanceBeltPosition) > 5)){
            setHuluRomanceBeltPosition(huluRomanceBeltPosition + ((displayHuluRomance.length % 5)))
        }else{
            setHuluRomanceBeltPosition((huluRomanceBeltPosition + 5) % displayHuluRomance.length)
        }
    }
    function retreatHuluRomanceBelt(){
        if(huluRomanceBeltPosition > 0){
            setHuluRomanceBeltPosition((huluRomanceBeltPosition - 5) % displayHuluRomance.length)
        }
    }

    return(
            <div className="romance-Container">
            <h2>Romance</h2>
            <button className="arrow-button" onClick={retreatHuluRomanceBelt}><i className="arrow left"></i></button>
            {renderHuluRomance.slice(huluRomanceBeltPosition, huluRomanceBeltPosition+5)}
            <button className="arrow-button" onClick={advanceHuluRomanceBelt}><i className="arrow right"></i></button>
            </div>
    )
}

export default HuluRomanceContainer;