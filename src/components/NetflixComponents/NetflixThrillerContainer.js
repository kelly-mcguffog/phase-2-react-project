import React, {useState} from "react";
import ContentCard from "../ContentCard";

function NetflixThrillerContainer({displayNetflixThriller}){
    const [netflixThrillerBeltPosition, setNetflixThrillerBeltPosition] = useState(0)
    const renderNetflixThriller = displayNetflixThriller.map(content => <ContentCard key={content.id} content={content}/>)

    function advanceNetflixThrillerBelt(){
        if((displayNetflixThriller.length % 5 !== 0) && ((displayNetflixThriller.length - netflixThrillerBeltPosition) < 10) && ((displayNetflixThriller.length - netflixThrillerBeltPosition) > 5)){
            setNetflixThrillerBeltPosition(netflixThrillerBeltPosition + ((displayNetflixThriller.length % 5)))
        }else{
            setNetflixThrillerBeltPosition((netflixThrillerBeltPosition + 5) % displayNetflixThriller.length)
        }
    }
    function retreatNetflixThrillerBelt(){
        if(netflixThrillerBeltPosition > 0){
            setNetflixThrillerBeltPosition((netflixThrillerBeltPosition - 5) % displayNetflixThriller.length)
        }
    }

    return(
        <div className="thriller-Container">
            <h2>Thriller</h2>
            <button className="arrow-button" onClick={retreatNetflixThrillerBelt}><i className="arrow left"></i></button>
            {renderNetflixThriller.slice(netflixThrillerBeltPosition, netflixThrillerBeltPosition+5)}
            <button className="arrow-button" onClick={advanceNetflixThrillerBelt}><i className="arrow right"></i></button>
        </div>
    )
}

export default NetflixThrillerContainer;