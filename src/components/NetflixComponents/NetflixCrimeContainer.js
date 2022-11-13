import React, {useState} from "react";
import ContentCard from "../ContentCard";

function NetflixCrimeContainer({displayNetflixCrime}){
    const [netflixCrimeBeltPosition, setNetflixCrimeBeltPosition] = useState(0)
    const renderNetflixCrime = displayNetflixCrime.map(content => <ContentCard key={content.id} content={content}/>)

    function advanceNetflixCrimeBelt(){
        if((displayNetflixCrime.length % 5 !== 0) && ((displayNetflixCrime.length - netflixCrimeBeltPosition) < 10) && ((displayNetflixCrime.length - netflixCrimeBeltPosition) > 5)){
            setNetflixCrimeBeltPosition(netflixCrimeBeltPosition + ((displayNetflixCrime.length % 5)))
        }else{
            setNetflixCrimeBeltPosition((netflixCrimeBeltPosition + 5) % displayNetflixCrime.length)
        }
    }
    function retreatNetflixCrimeBelt(){
        if(netflixCrimeBeltPosition > 0){
            setNetflixCrimeBeltPosition((netflixCrimeBeltPosition - 5) % displayNetflixCrime.length)
        }
    }
    return(
        <div className="crime-Container">
            <h2>Crime</h2>
            <button className="arrow-button" onClick={retreatNetflixCrimeBelt}><i className="arrow left"></i></button>
            {renderNetflixCrime.slice(netflixCrimeBeltPosition, netflixCrimeBeltPosition+5)}
            <button className="arrow-button" onClick={advanceNetflixCrimeBelt}><i className="arrow right"></i></button>
            </div>
    )
}

export default NetflixCrimeContainer;