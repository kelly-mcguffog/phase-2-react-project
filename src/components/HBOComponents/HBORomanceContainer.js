import React, {useState} from "react";
import ContentCard from "../ContentCard";

function HBORomanceContainer({displayHBORomance, handleEditMedia, setSearch}){
    const [hboRomanceBeltPosition, setHBORomanceBeltPosition] = useState(0)
    const renderHBORomance = displayHBORomance.map(content => <ContentCard key={content.id} setSearch={setSearch} content={content} handleEditMedia={handleEditMedia}/>)

    function advanceHBORomanceBelt(){
        if((displayHBORomance.length % 6 !== 0) && ((displayHBORomance.length - hboRomanceBeltPosition) < 12) && ((displayHBORomance.length - hboRomanceBeltPosition) > 6)){
            setHBORomanceBeltPosition(hboRomanceBeltPosition + ((displayHBORomance.length % 6)))
        }else{
            setHBORomanceBeltPosition((hboRomanceBeltPosition + 6) % displayHBORomance.length)
        }
    }
    function retreatHBORomanceBelt(){
        if(hboRomanceBeltPosition > 0){
            setHBORomanceBeltPosition((hboRomanceBeltPosition - 6) % displayHBORomance.length)
        }
    }

    return(
            <div className="media-container">
                <div className="genre-header">
                <h2>Romance</h2>
                <div className="mobileBtns">
                    <div className="back" onClick={retreatHBORomanceBelt}><i className="arrow left"></i></div>
                    <div className="forward" onClick={advanceHBORomanceBelt}><i className="arrow right"></i></div>
                </div>
            </div>
                <div className="row">
                    <div className="arrow-button" onClick={retreatHBORomanceBelt}>{renderHBORomance.length > 6 ? <i className="fa-sharp fa-solid fa-circle-chevron-left"></i> : null}</div>
                    {renderHBORomance.slice(hboRomanceBeltPosition, hboRomanceBeltPosition+6)}
                    <div className="arrow-button" onClick={advanceHBORomanceBelt}>{renderHBORomance.length > 6 ? <i className="fa-sharp fa-solid fa-circle-chevron-right"></i> : null}</div>
            </div>
            </div>
    )
}

export default HBORomanceContainer;