import React, {useState} from "react";
import ContentCard from "../ContentCard";

function RomanceContainer({displayRomance}){
    const [romanceBeltPosition, setRomanceBeltPosition] = useState(0)
    const renderRomance = displayRomance.map(content => <ContentCard key={content.id} content={content}/>)

    function advanceRomanceBelt(){
        if((displayRomance.length % 6 !== 0) && ((displayRomance.length - romanceBeltPosition) < 12) && ((displayRomance.length - romanceBeltPosition) > 6)){
            setRomanceBeltPosition(romanceBeltPosition + ((displayRomance.length % 6)))
        }else{
            setRomanceBeltPosition((romanceBeltPosition + 6) % displayRomance.length)
        }
    }
    function retreatRomanceBelt(){
        if(romanceBeltPosition > 0){
            setRomanceBeltPosition((romanceBeltPosition - 6) % displayRomance.length)
        }
    }

    return(
            <div className="media-container">
                <div className="genre-header">
                <h2>Romance</h2>
                <div className="mobileBtns">
                    <div className="back" onClick={retreatRomanceBelt}><i className="arrow left"></i></div>
                    <div className="forward" onClick={advanceRomanceBelt}><i className="arrow right"></i></div>
                </div>
            </div>
                <div className="row">
                    <div className="arrow-button" onClick={retreatRomanceBelt}><i className="fa-sharp fa-solid fa-circle-chevron-left"></i></div>
                    {renderRomance.slice(romanceBeltPosition, romanceBeltPosition+6)}
                    <div className="arrow-button" onClick={advanceRomanceBelt}><i className="fa-sharp fa-solid fa-circle-chevron-right"></i></div>
                </div>
            </div>
    )
}

export default RomanceContainer;