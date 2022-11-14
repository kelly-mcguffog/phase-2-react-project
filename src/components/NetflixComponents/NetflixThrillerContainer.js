import React, {useState} from "react";
import ContentCard from "../ContentCard";

function NetflixThrillerContainer({displayNetflixThriller}){
    const [netflixThrillerBeltPosition, setNetflixThrillerBeltPosition] = useState(0)
    const renderNetflixThriller = displayNetflixThriller.map(content => <ContentCard key={content.id} content={content}/>)

    function advanceNetflixThrillerBelt(){
        if((displayNetflixThriller.length % 6 !== 0) && ((displayNetflixThriller.length - netflixThrillerBeltPosition) < 12) && ((displayNetflixThriller.length - netflixThrillerBeltPosition) > 6)){
            setNetflixThrillerBeltPosition(netflixThrillerBeltPosition + ((displayNetflixThriller.length % 6)))
        }else{
            setNetflixThrillerBeltPosition((netflixThrillerBeltPosition + 6) % displayNetflixThriller.length)
        }
    }
    function retreatNetflixThrillerBelt(){
        if(netflixThrillerBeltPosition > 0){
            setNetflixThrillerBeltPosition((netflixThrillerBeltPosition - 6) % displayNetflixThriller.length)
        }
    }

    return(
        <div className="media-container">
            <div className="genre-header">
                <h2>Thriller</h2>
                <div className="mobileBtns">
                    <div className="back" onClick={retreatNetflixThrillerBelt}><i className="arrow left"></i></div>
                    <div className="forward" onClick={advanceNetflixThrillerBelt}><i className="arrow right"></i></div>
                </div>
            </div>
            <div className="row">
                <div className="arrow-button" onClick={retreatNetflixThrillerBelt}>{renderNetflixThriller.length > 6 ? <i className="fa-sharp fa-solid fa-circle-chevron-left"></i> : null}</div>
                {renderNetflixThriller.slice(netflixThrillerBeltPosition, netflixThrillerBeltPosition+6)}
                <div className="arrow-button" onClick={advanceNetflixThrillerBelt}>{renderNetflixThriller.length > 6 ? <i className="fa-sharp fa-solid fa-circle-chevron-left"></i> : null}</div>
            </div>
        </div>
    )
}

export default NetflixThrillerContainer;