import React, {useState} from "react";
import ContentCard from "../ContentCard";

function NetflixCrimeContainer({displayNetflixCrime}){
    const [netflixCrimeBeltPosition, setNetflixCrimeBeltPosition] = useState(0)
    const renderNetflixCrime = displayNetflixCrime.map(content => <ContentCard key={content.id} content={content}/>)

    function advanceNetflixCrimeBelt(){
        if((displayNetflixCrime.length % 6 !== 0) && ((displayNetflixCrime.length - netflixCrimeBeltPosition) < 12) && ((displayNetflixCrime.length - netflixCrimeBeltPosition) > 6)){
            setNetflixCrimeBeltPosition(netflixCrimeBeltPosition + ((displayNetflixCrime.length % 6)))
        }else{
            setNetflixCrimeBeltPosition((netflixCrimeBeltPosition + 6) % displayNetflixCrime.length)
        }
    }
    function retreatNetflixCrimeBelt(){
        if(netflixCrimeBeltPosition > 0){
            setNetflixCrimeBeltPosition((netflixCrimeBeltPosition - 6) % displayNetflixCrime.length)
        }
    }
    return(
        <div className="media-container">
            <div className="genre-header">
                <h2>Crime</h2>
                <div className="mobileBtns">
                    <div className="back" onClick={retreatNetflixCrimeBelt}><i className="arrow left"></i></div>
                    <div className="forward" onClick={advanceNetflixCrimeBelt}><i className="arrow right"></i></div>
                </div>
            </div>
            <div className="row">
                <div className="arrow-button" onClick={retreatNetflixCrimeBelt}>{renderNetflixCrime.length > 6 ? <i className="fa-sharp fa-solid fa-circle-chevron-left"></i> : null}</div>
                {renderNetflixCrime.slice(netflixCrimeBeltPosition, netflixCrimeBeltPosition+6)}
                <div className="arrow-button" onClick={advanceNetflixCrimeBelt}>{renderNetflixCrime.length > 6 ? <i className="fa-sharp fa-solid fa-circle-chevron-right"></i> : null}</div>
            </div>
            </div>
    )
}

export default NetflixCrimeContainer;