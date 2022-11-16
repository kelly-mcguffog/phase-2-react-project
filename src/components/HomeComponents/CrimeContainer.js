import React, {useState} from "react";
import ContentCard from "../ContentCard";

function CrimeContainer({displayCrime, handleEditMedia, setSearch}){
    const [crimeBeltPosition, setCrimeBeltPosition] = useState(0)
    const renderCrime = displayCrime.map(content => <ContentCard key={content.id} content={content} setSearch={setSearch} handleEditMedia={handleEditMedia}/>)

    function advanceCrimeBelt(){
        if((displayCrime.length % 6 !== 0) && ((displayCrime.length - crimeBeltPosition) < 12) && ((displayCrime.length - crimeBeltPosition) > 6)){
            setCrimeBeltPosition(crimeBeltPosition + ((displayCrime.length % 5)))
        }else{
            setCrimeBeltPosition((crimeBeltPosition + 6) % displayCrime.length)
        }
    }
    function retreatCrimeBelt(){
        if(crimeBeltPosition > 0){
            setCrimeBeltPosition((crimeBeltPosition - 6) % displayCrime.length)
        }
    }

    return(
        <div className="media-container">
                <div className="genre-header">
                <h2>Crime</h2>
                <div className="mobileBtns">
                    <div className="back" onClick={retreatCrimeBelt}><i className="arrow left"></i></div>
                    <div className="forward" onClick={advanceCrimeBelt}><i className="arrow right"></i></div>
                </div>
            </div>
                <div className="row">
                    <div className="arrow-button" onClick={retreatCrimeBelt}>{renderCrime.length > 6 ? <i className="fa-sharp fa-solid fa-circle-chevron-left"></i> : null}</div>
                    {renderCrime.slice(crimeBeltPosition, crimeBeltPosition+6)}
                    <div className="arrow-button" onClick={advanceCrimeBelt}>{renderCrime.length > 6 ? <i className="fa-sharp fa-solid fa-circle-chevron-right"></i> : null}</div>
                </div>
            </div>
    )
}

export default CrimeContainer;