import React, {useState} from "react";
import ContentCard from "../ContentCard";

function ActionContainer({handleEditMedia, displayAction, setSearch}){
    const [actionBeltPosition, setActionBeltPosition] = useState(0)
    const renderAction = displayAction.map(content => <ContentCard key={content.id} setSearch={setSearch} content={content} handleEditMedia={handleEditMedia}/>)

    function advanceActionBelt(){
        if((displayAction.length % 6 !== 0) && ((displayAction.length - actionBeltPosition) < 12) && ((displayAction.length - actionBeltPosition) > 6)){
            setActionBeltPosition(actionBeltPosition + ((displayAction.length % 6)))
        }else{
            setActionBeltPosition((actionBeltPosition + 6) % displayAction.length)
        }
    }
    function retreatActionBelt(){
        if(actionBeltPosition > 0){
            setActionBeltPosition((actionBeltPosition - 6) % displayAction.length)
        }
    }

    return(
        <div className="media-container">
                <div className="genre-header">
                <h2>Action</h2>
                <div className="mobileBtns">
                    <div className="back" onClick={retreatActionBelt}><i className="arrow right"></i></div>
                    <div className="forward" onClick={advanceActionBelt}><i className="arrow right"></i></div>
                </div>
            </div>
                <div className="row">
                    <div className="arrow-button" onClick={retreatActionBelt}>{renderAction.length > 6 ? <i className="fa-sharp fa-solid fa-circle-chevron-left"></i> : null}</div>
                    {renderAction.slice(actionBeltPosition, actionBeltPosition+6)}
                    <div className="arrow-button" onClick={advanceActionBelt}>{renderAction.length > 6 ? <i className="fa-sharp fa-solid fa-circle-chevron-right"></i> : null}</div>
                </div>
            </div>
    )
}

export default ActionContainer;