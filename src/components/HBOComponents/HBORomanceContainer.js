import React, {useState} from "react";
import ContentCard from "../ContentCard";

function HBORomanceContainer({displayHBORomance}){
    const [hboRomanceBeltPosition, setHBORomanceBeltPosition] = useState(0)
    const renderHBORomance = displayHBORomance.map(content => <ContentCard key={content.id} content={content}/>)

    function advanceHBORomanceBelt(){
        if((displayHBORomance.length % 5 !== 0) && ((displayHBORomance.length - hboRomanceBeltPosition) < 10) && ((displayHBORomance.length - hboRomanceBeltPosition) > 5)){
            setHBORomanceBeltPosition(hboRomanceBeltPosition + ((displayHBORomance.length % 5)))
        }else{
            setHBORomanceBeltPosition((hboRomanceBeltPosition + 5) % displayHBORomance.length)
        }
    }
    function retreatHBORomanceBelt(){
        if(hboRomanceBeltPosition > 0){
            setHBORomanceBeltPosition((hboRomanceBeltPosition - 5) % displayHBORomance.length)
        }
    }

    return(
            <div className="romance-Container">
                <h2>Romance</h2>
            <button className="arrow-button" onClick={retreatHBORomanceBelt}><i className="arrow left"></i></button>
            {renderHBORomance.slice(hboRomanceBeltPosition, hboRomanceBeltPosition+5)}
            <button className="arrow-button" onClick={advanceHBORomanceBelt}><i className="arrow right"></i></button>
            </div>
    )
}

export default HBORomanceContainer;