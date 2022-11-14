import React, {useState} from "react";
import ContentCard from "../ContentCard";

function NetflixDramaContainer({displayNetflixDramas}){
    const [netflixDramaBeltPosition, setNetflixDramaBeltPosition] = useState(0)
    const renderNetflixDramas = displayNetflixDramas.map(content => <ContentCard key={content.id} content={content}/>)

    function advanceNetflixDramaBelt(){
        if((displayNetflixDramas.length % 6 !== 0) && ((displayNetflixDramas.length - netflixDramaBeltPosition) < 12) && ((displayNetflixDramas.length - netflixDramaBeltPosition) > 6)){
            setNetflixDramaBeltPosition(netflixDramaBeltPosition + ((displayNetflixDramas.length % 6)))
        }else{
            setNetflixDramaBeltPosition((netflixDramaBeltPosition + 6) % displayNetflixDramas.length)
        }
      }
      function retreatNetflixDramaBelt(){
        if(netflixDramaBeltPosition > 0){
            setNetflixDramaBeltPosition((netflixDramaBeltPosition - 6) % displayNetflixDramas.length)
        }
      }

    return(
        <div className="media-container">
            <div className="genre-header">
                <h2>Drama</h2>
                <div className="mobileBtns">
                    <div className="back" onClick={retreatNetflixDramaBelt}><i className="arrow left"></i></div>
                    <div className="forward" onClick={advanceNetflixDramaBelt}><i className="arrow right"></i></div>
                </div>
            </div>
            <div className="row">
                <div className="arrow-button" onClick={retreatNetflixDramaBelt}><i className="fa-sharp fa-solid fa-circle-chevron-left"></i></div>
                {renderNetflixDramas.slice(netflixDramaBeltPosition, netflixDramaBeltPosition+6)}
                <div className="arrow-button" onClick={advanceNetflixDramaBelt}><i className="fa-sharp fa-solid fa-circle-chevron-right"></i></div>
            </div>
        </div>
    )
}

export default NetflixDramaContainer;