import React, {useState} from "react";
import ContentCard from "../ContentCard";

function HuluActionContainer({displayHuluAction, handleEditMedia, setSearch}){
    const [huluActionBeltPosition, setHuluActionBeltPosition] = useState(0)
    const renderHuluAction = displayHuluAction.map(content => <ContentCard key={content.id} setSearch={setSearch} content={content} handleEditMedia={handleEditMedia}/>)

    function advanceHuluActionBelt(){
        if((displayHuluAction.length % 6 !== 0) && ((displayHuluAction.length - huluActionBeltPosition) < 12) && ((displayHuluAction.length - huluActionBeltPosition) > 6)){
            setHuluActionBeltPosition(huluActionBeltPosition + ((displayHuluAction.length % 6)))
        }else{
            setHuluActionBeltPosition((huluActionBeltPosition + 6) % displayHuluAction.length)
        }
    }
    function retreatHuluActionBelt(){
        if(huluActionBeltPosition > 0){
            setHuluActionBeltPosition((huluActionBeltPosition - 6) % displayHuluAction.length)
        }
    }

    return(
        <div className="media-container">
            <div className="genre-header">
                <h2>Action</h2>
                <div className="mobileBtns">
                    <div className="back" onClick={retreatHuluActionBelt}><i className="arrow left"></i></div>
                    <div className="forward" onClick={advanceHuluActionBelt}><i className="arrow right"></i></div>
                </div>
            </div>
            <div className="row">
                <div className="arrow-button" onClick={retreatHuluActionBelt}>{renderHuluAction.length > 6 ? <i className="fa-sharp fa-solid fa-circle-chevron-left"></i> : null}</div>
                {renderHuluAction.slice(huluActionBeltPosition, huluActionBeltPosition+6)}
                <div className="arrow-button" onClick={advanceHuluActionBelt}>{renderHuluAction.length > 6 ? <i className="fa-sharp fa-solid fa-circle-chevron-right"></i> : null}</div>
            </div>
        </div>
    )
}

export default HuluActionContainer;