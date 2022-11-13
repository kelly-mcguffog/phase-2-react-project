import React, {useState} from "react";
import ContentCard from "../ContentCard";

function HBOActionContainer({displayHBOAction}){
    const [hboActionBeltPosition, setHBOActionBeltPosition] = useState(0)
    const renderHBOAction = displayHBOAction.map(content => <ContentCard key={content.id} content={content}/>)

    function advanceHBOActionBelt(){
        if((displayHBOAction.length % 5 !== 0) && ((displayHBOAction.length - hboActionBeltPosition) < 10) && ((displayHBOAction.length - hboActionBeltPosition) > 5)){
            setHBOActionBeltPosition(hboActionBeltPosition + ((displayHBOAction.length % 5)))
        }else{
            setHBOActionBeltPosition((hboActionBeltPosition + 5) % displayHBOAction.length)
        }
    }
    function retreatHBOActionBelt(){
        if(hboActionBeltPosition > 0){
            setHBOActionBeltPosition((hboActionBeltPosition - 5) % displayHBOAction.length)
        }
    }

    return(
        <div className="action-Container">
                <h2>Action</h2>
            <button className="arrow-button" onClick={retreatHBOActionBelt}><i className="arrow left"></i></button>
            {renderHBOAction.slice(hboActionBeltPosition, hboActionBeltPosition+5)}
            <button className="arrow-button" onClick={advanceHBOActionBelt}><i className="arrow right"></i></button>
            </div>
    )
}

export default HBOActionContainer;