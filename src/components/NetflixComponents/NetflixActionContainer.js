import React, {useState} from "react";
import ContentCard from "../ContentCard";

function NetflixActionContainer({displayNetflixAction, handleEditMedia}){
    const [netflixActionBeltPosition, setNetflixActionBeltPosition] = useState(0)
    const renderNetflixAction = displayNetflixAction.map(content => <ContentCard key={content.id} content={content} handleEditMedia={handleEditMedia}/>)

    function advanceNetflixActionBelt(){
        if((displayNetflixAction.length % 6 !== 0) && ((displayNetflixAction.length - netflixActionBeltPosition) < 12) && ((displayNetflixAction.length - netflixActionBeltPosition) > 6)){
            setNetflixActionBeltPosition(netflixActionBeltPosition + ((displayNetflixAction.length % 6)))
        }else{
            setNetflixActionBeltPosition((netflixActionBeltPosition + 6) % displayNetflixAction.length)
        }
    }
    function retreatNetflixActionBelt(){
        if(netflixActionBeltPosition > 0){
            setNetflixActionBeltPosition((netflixActionBeltPosition - 6) % displayNetflixAction.length)
        }
    }

    return(
        <div className="media-container">
            <div className="genre-header">
                <h2>Action</h2>
                <div className="mobileBtns">
                    <div className="back" onClick={retreatNetflixActionBelt}><i className="arrow left"></i></div>
                    <div className="forward" onClick={advanceNetflixActionBelt}><i className="arrow right"></i></div>
                </div>
            </div>
            <div className="row">
                <div className="arrow-button" onClick={retreatNetflixActionBelt}>{renderNetflixAction.length > 6 ? <i className="fa-sharp fa-solid fa-circle-chevron-left"></i> : null}</div>
                {renderNetflixAction.slice(netflixActionBeltPosition, netflixActionBeltPosition+6)}
                <div className="arrow-button" onClick={advanceNetflixActionBelt}>{renderNetflixAction.length > 6 ? <i className="fa-sharp fa-solid fa-circle-chevron-right"></i> : null}</div>
            </div>
            </div>
    )
}

export default NetflixActionContainer;