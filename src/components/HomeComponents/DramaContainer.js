import React, {useState} from "react";
import ContentCard from "../ContentCard";

function DramaContainer({displayDramas}){
    const [dramaBeltPosition, setDramaBeltPosition] = useState(0)
    const renderDramas = displayDramas.map(content => <ContentCard key={content.id} content={content}/>)

    function advanceDramaBelt(){
        if((displayDramas.length % 5 !== 0) && ((displayDramas.length - dramaBeltPosition) < 10) && ((displayDramas.length - dramaBeltPosition) > 5)){
            setDramaBeltPosition(dramaBeltPosition + ((displayDramas.length % 5)))
        }else{
            setDramaBeltPosition((dramaBeltPosition + 5) % displayDramas.length)
        }
      }
      function retreatDramaBelt(){
        if(dramaBeltPosition > 0){
            setDramaBeltPosition((dramaBeltPosition - 5) % displayDramas.length)
        }
      }

    return(
        <div className="drama-Container">
                <h2>Drama</h2>
                <button className="arrow-button" onClick={retreatDramaBelt}><i className="arrow left"></i></button>
                {renderDramas.slice(dramaBeltPosition, dramaBeltPosition+5)}
                <button className="arrow-button" onClick={advanceDramaBelt}><i className="arrow right"></i></button>
            </div>
    )
}

export default DramaContainer;