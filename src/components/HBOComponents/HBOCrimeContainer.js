import React, {useState} from "react";
import ContentCard from "../ContentCard";

function HBOCrimeContainer({displayHBOCrime, handleEditMedia}){
    const [hboCrimeBeltPosition, setHBOCrimeBeltPosition] = useState(0)
    const renderHBOCrime = displayHBOCrime.map(content => <ContentCard key={content.id} content={content} handleEditMedia={handleEditMedia}/>)

    function advanceHBOCrimeBelt(){
        if((displayHBOCrime.length % 6 !== 0) && ((displayHBOCrime.length - hboCrimeBeltPosition) < 12) && ((displayHBOCrime.length - hboCrimeBeltPosition) > 6)){
            setHBOCrimeBeltPosition(hboCrimeBeltPosition + ((displayHBOCrime.length % 6)))
        }else{
            setHBOCrimeBeltPosition((hboCrimeBeltPosition + 6) % displayHBOCrime.length)
        }
    }
    function retreatHBOCrimeBelt(){
        if(hboCrimeBeltPosition > 0){
            setHBOCrimeBeltPosition((hboCrimeBeltPosition - 6) % displayHBOCrime.length)
        }
    }
    return(
        <div className="media-container">
            <div className="genre-header">
                <h2>Crime</h2>
                <div className="mobileBtns">
                    <div className="back" onClick={retreatHBOCrimeBelt}><i className="arrow left"></i></div>
                    <div className="forward" onClick={advanceHBOCrimeBelt}><i className="arrow right"></i></div>
                </div>
            </div>
            <div className="row">
                <div className="arrow-button" onClick={retreatHBOCrimeBelt}>{renderHBOCrime.length > 6 ? <i className="fa-sharp fa-solid fa-circle-chevron-left"></i> : null}</div>
                {renderHBOCrime.slice(hboCrimeBeltPosition, hboCrimeBeltPosition+6)}
                <div className="arrow-button" onClick={advanceHBOCrimeBelt}>{renderHBOCrime.length > 6 ? <i className="fa-sharp fa-solid fa-circle-chevron-right"></i> : null}</div>
            </div>
            </div>
    )
}

export default HBOCrimeContainer;