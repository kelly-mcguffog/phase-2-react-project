import React, {useState} from "react";
import ContentCard from "../ContentCard";

function HuluCrimeContainer({displayHuluCrime, handleEditMedia, setSearch}){
    const [huluCrimeBeltPosition, setHuluCrimeBeltPosition] = useState(0)
    const renderHuluCrime = displayHuluCrime.map(content => <ContentCard key={content.id} content={content} setSearch={setSearch} handleEditMedia={handleEditMedia}/>)

    function advanceHuluCrimeBelt(){
        if((displayHuluCrime.length % 6 !== 0) && ((displayHuluCrime.length - huluCrimeBeltPosition) < 12) && ((displayHuluCrime.length - huluCrimeBeltPosition) > 6)){
            setHuluCrimeBeltPosition(huluCrimeBeltPosition + ((displayHuluCrime.length % 6)))
        }else{
            setHuluCrimeBeltPosition((huluCrimeBeltPosition + 6) % displayHuluCrime.length)
        }
    }
    function retreatHuluCrimeBelt(){
        if(huluCrimeBeltPosition > 0){
            setHuluCrimeBeltPosition((huluCrimeBeltPosition - 6) % displayHuluCrime.length)
        }
    }
    return(
        <div className="media-container">
            <div className="genre-header">
                <h2>Crime</h2>
                <div className="mobileBtns">
                    <div className="back" onClick={retreatHuluCrimeBelt}><i className="arrow left"></i></div>
                    <div className="forward" onClick={advanceHuluCrimeBelt}><i className="arrow right"></i></div>
                </div>
            </div>
            <div className="row">
                <div className="arrow-button" onClick={retreatHuluCrimeBelt}>{renderHuluCrime.length > 6 ? <i className="fa-sharp fa-solid fa-circle-chevron-left"></i> : null}</div>
                {renderHuluCrime.slice(huluCrimeBeltPosition, huluCrimeBeltPosition+6)}
                <div className="arrow-button" onClick={advanceHuluCrimeBelt}>{renderHuluCrime.length > 6 ? <i className="fa-sharp fa-solid fa-circle-chevron-right"></i> : null}</div>
            </div>
        </div>
    )
}

export default HuluCrimeContainer;