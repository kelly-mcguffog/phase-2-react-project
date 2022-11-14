import React, {useState} from "react";
import ContentCard from "../ContentCard";

function HuluRomanceContainer({displayHuluRomance}){
    const [huluRomanceBeltPosition, setHuluRomanceBeltPosition] = useState(0)
    const renderHuluRomance = displayHuluRomance.map(content => <ContentCard key={content.id} content={content}/>)

    function advanceHuluRomanceBelt(){
        if((displayHuluRomance.length % 6 !== 0) && ((displayHuluRomance.length - huluRomanceBeltPosition) < 12) && ((displayHuluRomance.length - huluRomanceBeltPosition) > 6)){
            setHuluRomanceBeltPosition(huluRomanceBeltPosition + ((displayHuluRomance.length % 6)))
        }else{
            setHuluRomanceBeltPosition((huluRomanceBeltPosition + 6) % displayHuluRomance.length)
        }
    }
    function retreatHuluRomanceBelt(){
        if(huluRomanceBeltPosition > 0){
            setHuluRomanceBeltPosition((huluRomanceBeltPosition - 6) % displayHuluRomance.length)
        }
    }

    return(
            <div className="media-container">
            <div className="genre-header">
                <h2>Romance</h2>
                <div className="mobileBtns">
                    <div className="back" onClick={retreatHuluRomanceBelt}><i className="arrow left"></i></div>
                    <div className="forward" onClick={advanceHuluRomanceBelt}><i className="arrow right"></i></div>
                </div>
            </div>
            <div className="row">
                <div className="arrow-button" onClick={retreatHuluRomanceBelt}><i className="fa-sharp fa-solid fa-circle-chevron-left"></i></div>
                {renderHuluRomance.slice(huluRomanceBeltPosition, huluRomanceBeltPosition+6)}
                <div className="arrow-button" onClick={advanceHuluRomanceBelt}><i className="fa-sharp fa-solid fa-circle-chevron-right"></i></div>
            </div>
            </div>
    )
}

export default HuluRomanceContainer;