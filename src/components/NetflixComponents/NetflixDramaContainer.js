import React, {useState} from "react";
import ContentCard from "../ContentCard";

function NetflixDramaContainer({displayNetflixDramas}){
    const [netflixDramaBeltPosition, setNetflixDramaBeltPosition] = useState(0)
    const renderNetflixDramas = displayNetflixDramas.map(content => <ContentCard key={content.id} content={content}/>)

    function advanceNetflixDramaBelt(){
        if((displayNetflixDramas.length % 5 !== 0) && ((displayNetflixDramas.length - netflixDramaBeltPosition) < 10) && ((displayNetflixDramas.length - netflixDramaBeltPosition) > 5)){
            setNetflixDramaBeltPosition(netflixDramaBeltPosition + ((displayNetflixDramas.length % 5)))
        }else{
            setNetflixDramaBeltPosition((netflixDramaBeltPosition + 5) % displayNetflixDramas.length)
        }
      }
      function retreatNetflixDramaBelt(){
        if(netflixDramaBeltPosition > 0){
            setNetflixDramaBeltPosition((netflixDramaBeltPosition - 5) % displayNetflixDramas.length)
        }
      }

    return(
        <div>
            <h2>Drama</h2>
            <button className="arrow-button" onClick={retreatNetflixDramaBelt}><i className="arrow left"></i></button>
            {renderNetflixDramas.slice(netflixDramaBeltPosition, netflixDramaBeltPosition+5)}
            <button className="arrow-button" onClick={advanceNetflixDramaBelt}><i className="arrow right"></i></button>
        </div>
    )
}

export default NetflixDramaContainer;