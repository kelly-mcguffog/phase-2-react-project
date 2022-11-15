import React, {useState} from "react";
import ContentCard from "../ContentCard";

function NetflixMysteryContainer({displayNetflixMystery, handleEditMedia}){
    const [netflixMysteryBeltPosition, setNetflixMysteryBeltPosition] = useState(0)
    const renderNetflixMystery = displayNetflixMystery.map(content => <ContentCard key={content.id} content={content} handleEditMedia={handleEditMedia}/>)

    function advanceNetflixMysteryBelt(){
        if((displayNetflixMystery.length % 6 !== 0) && ((displayNetflixMystery.length - netflixMysteryBeltPosition) < 12) && ((displayNetflixMystery.length - netflixMysteryBeltPosition) > 6)){
            setNetflixMysteryBeltPosition(netflixMysteryBeltPosition + ((displayNetflixMystery.length % 6)))
        }else{
            setNetflixMysteryBeltPosition((netflixMysteryBeltPosition + 6) % displayNetflixMystery.length)
        }
    }
    function retreatNetflixMysteryBelt(){
        if(netflixMysteryBeltPosition > 0){
            setNetflixMysteryBeltPosition((netflixMysteryBeltPosition - 6) % displayNetflixMystery.length)
        }
    }

    return(
        <div className="media-container">
            <div className="genre-header">
                <h2>Mystery</h2>
                <div className="mobileBtns">
                    <div className="back" onClick={retreatNetflixMysteryBelt}><i className="arrow left"></i></div>
                    <div className="forward" onClick={advanceNetflixMysteryBelt}><i className="arrow right"></i></div>
                </div>
            </div>
            <div className="row">
                <div className="arrow-button" onClick={retreatNetflixMysteryBelt}>{renderNetflixMystery.length > 6 ? <i className="fa-sharp fa-solid fa-circle-chevron-left"></i> : null}</div>
                {renderNetflixMystery.slice(netflixMysteryBeltPosition, netflixMysteryBeltPosition+6)}
                <div className="arrow-button" onClick={advanceNetflixMysteryBelt}>{renderNetflixMystery.length ? <i className="fa-sharp fa-solid fa-circle-chevron-right"></i> : null}</div>
            </div>
            </div>
    )
}

export default NetflixMysteryContainer;