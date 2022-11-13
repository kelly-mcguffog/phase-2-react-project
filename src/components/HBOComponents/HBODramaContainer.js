import React, {useState} from "react";
import ContentCard from "../ContentCard";

function HBODramaContainer({displayHBODramas}){
    const [hboDramaBeltPosition, setHBODramaBeltPosition] = useState(0)
    const renderHBODramas = displayHBODramas.map(content => <ContentCard key={content.id} content={content}/>)

    function advanceHBODramaBelt(){
        if((displayHBODramas.length % 5 !== 0) && ((displayHBODramas.length - hboDramaBeltPosition) < 10) && ((displayHBODramas.length - hboDramaBeltPosition) > 5)){
            setHBODramaBeltPosition(hboDramaBeltPosition + ((displayHBODramas.length % 5)))
        }else{
            setHBODramaBeltPosition((hboDramaBeltPosition + 5) % displayHBODramas.length)
        }
      }
      
      function retreatHBODramaBelt(){
        if(hboDramaBeltPosition > 0){
            setHBODramaBeltPosition((hboDramaBeltPosition - 5) % displayHBODramas.length)
        }
      }

    return(
        <div>
            <h2>Drama</h2>
            <button className="arrow-button" onClick={retreatHBODramaBelt}><i className="arrow left"></i></button>
            {renderHBODramas.slice(hboDramaBeltPosition, hboDramaBeltPosition+5)}
            <button className="arrow-button" onClick={advanceHBODramaBelt}><i className="arrow right"></i></button>
        </div>
    )
}

export default HBODramaContainer;