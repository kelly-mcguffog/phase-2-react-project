import React, {useState} from "react";
import ContentCard from "../ContentCard";

function NetflixActionContainer({displayNetflixAction}){
    const [netflixActionBeltPosition, setNetflixActionBeltPosition] = useState(0)
    const renderNetflixAction = displayNetflixAction.map(content => <ContentCard key={content.id} content={content}/>)

    function advanceNetflixActionBelt(){
        if((displayNetflixAction.length % 5 !== 0) && ((displayNetflixAction.length - netflixActionBeltPosition) < 10) && ((displayNetflixAction.length - netflixActionBeltPosition) > 5)){
            setNetflixActionBeltPosition(netflixActionBeltPosition + ((displayNetflixAction.length % 5)))
        }else{
            setNetflixActionBeltPosition((netflixActionBeltPosition + 5) % displayNetflixAction.length)
        }
    }
    function retreatNetflixActionBelt(){
        if(netflixActionBeltPosition > 0){
            setNetflixActionBeltPosition((netflixActionBeltPosition - 5) % displayNetflixAction.length)
        }
    }

    return(
        <div className="action-Container">
            <h2>Action</h2>
            <button className="arrow-button" onClick={retreatNetflixActionBelt}><i className="arrow left"></i></button>
            {renderNetflixAction.slice(netflixActionBeltPosition, netflixActionBeltPosition+5)}
            <button className="arrow-button" onClick={advanceNetflixActionBelt}><i className="arrow right"></i></button>
            </div>
    )
}

export default NetflixActionContainer;