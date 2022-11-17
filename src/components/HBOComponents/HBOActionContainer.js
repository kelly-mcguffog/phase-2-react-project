import React, {useState} from "react";
import ContentCard from "../ContentCard";

function HBOActionContainer({displayHBOAction, handleEditMedia, setSearch}){
    const [hboActionBeltPosition, setHBOActionBeltPosition] = useState(0)
    const renderHBOAction = displayHBOAction.map(content => <ContentCard key={content.id} setSearch={setSearch} content={content} handleEditMedia={handleEditMedia}/>)

    function advanceHBOActionBelt(){
        if((displayHBOAction.length % 6 !== 0) && ((displayHBOAction.length - hboActionBeltPosition) < 12) && ((displayHBOAction.length - hboActionBeltPosition) > 6)){
            setHBOActionBeltPosition(hboActionBeltPosition + ((displayHBOAction.length % 6)))
        }else{
            setHBOActionBeltPosition((hboActionBeltPosition + 6) % displayHBOAction.length)
        }
    }
    function retreatHBOActionBelt(){
        if(hboActionBeltPosition > 0){
            setHBOActionBeltPosition((hboActionBeltPosition - 6) % displayHBOAction.length)
        }
    }

    return(
        <div className="media-container">
            <div className="genre-header">
                <h2>Action</h2>
                <div className="mobileBtns">
                    <div className="back" onClick={retreatHBOActionBelt}><i className="arrow left"></i></div>
                    <div className="forward" onClick={advanceHBOActionBelt}><i className="arrow right"></i></div>
                </div>
            </div>
            <div className="row">
                <div className="arrow-button" onClick={retreatHBOActionBelt}>{renderHBOAction.length > 6 ? <i className="fa-sharp fa-solid fa-circle-chevron-right"></i> : null}</div>
                {renderHBOAction.slice(hboActionBeltPosition, hboActionBeltPosition+6)}
                <div className="arrow-button" onClick={advanceHBOActionBelt}>{renderHBOAction.length > 6 ? <i className="fa-sharp fa-solid fa-circle-chevron-right"></i> : null}</div>
            </div>
        </div>
    )
}

export default HBOActionContainer;