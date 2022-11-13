import React, {useState} from "react";
import ContentCard from "../ContentCard";

function ActionContainer({displayAction}){
    const [actionBeltPosition, setActionBeltPosition] = useState(0)
    const renderAction = displayAction.map(content => <ContentCard key={content.id} content={content}/>)

    function advanceActionBelt(){
        if((displayAction.length % 5 !== 0) && ((displayAction.length - actionBeltPosition) < 10) && ((displayAction.length - actionBeltPosition) > 5)){
            setActionBeltPosition(actionBeltPosition + ((displayAction.length % 5)))
        }else{
            setActionBeltPosition((actionBeltPosition + 5) % displayAction.length)
        }
    }
    function retreatActionBelt(){
        if(actionBeltPosition > 0){
            setActionBeltPosition((actionBeltPosition - 5) % displayAction.length)
        }
    }

    return(
        <div className="action-Container">
                <h2>Action</h2>
                <button className="arrow-button" onClick={retreatActionBelt}><i className="arrow left"></i></button>
                {renderAction.slice(actionBeltPosition, actionBeltPosition+5)}
                <button className="arrow-button" onClick={advanceActionBelt}><i className="arrow right"></i></button>
            </div>
    )
}

export default ActionContainer;