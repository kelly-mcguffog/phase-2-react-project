import React, {useState} from "react";
import ContentCard from "../ContentCard";

function HuluDramaContainer({displayHuluDramas}){
    const [huluDramaBeltPosition, setHuluDramaBeltPosition] = useState(0)
    const renderHuluDramas = displayHuluDramas.map(content => <ContentCard key={content.id} content={content}/>)

    function advanceHuluDramaBelt(){
        if((displayHuluDramas.length % 5 !== 0) && ((displayHuluDramas.length - huluDramaBeltPosition) < 10) && ((displayHuluDramas.length - huluDramaBeltPosition) > 5)){
            setHuluDramaBeltPosition(huluDramaBeltPosition + ((displayHuluDramas.length % 5)))
        }else{
            setHuluDramaBeltPosition((huluDramaBeltPosition + 5) % displayHuluDramas.length)
        }
      }
      function retreatHuluDramaBelt(){
        if(huluDramaBeltPosition > 0){
            setHuluDramaBeltPosition((huluDramaBeltPosition - 5) % displayHuluDramas.length)
        }
      }

    return(
        <div>
            <h2>Drama</h2>
            <button className="arrow-button" onClick={retreatHuluDramaBelt}><i className="arrow left"></i></button>
            {renderHuluDramas.slice(huluDramaBeltPosition, huluDramaBeltPosition+5)}
            <button className="arrow-button" onClick={advanceHuluDramaBelt}><i className="arrow right"></i></button>
        </div>
    )
}

export default HuluDramaContainer;