import React, {useState} from "react";
import ContentCard from "./ContentCard";


function HBO({allContent}){

    const [hboDramaBeltPosition, setHBODramaBeltPosition] = useState(0)
    const [hboCrimeBeltPosition, setHBOCrimeBeltPosition] = useState(0)
    const [hboActionBeltPosition, setHBOActionBeltPosition] = useState(0)
    const [hboMysteryBeltPosition, setHBOMysteryBeltPosition] = useState(0)
    const [hboThrillerBeltPosition, setHBOThrillerBeltPosition] = useState(0)
    const [hboRomanceBeltPosition, setHBORomanceBeltPosition] = useState(0)
    const [hboSciFiBeltPosition, setHBOSciFiBeltPosition] = useState(0)
    
    const hboContent = allContent.filter(content => content.platform === "HBO Max")

    const displayHBODramas = hboContent.filter(content => content.genre === "Drama")
    const displayHBOCrime = hboContent.filter(content => content.genre === "Crime")
    const displayHBOAction = hboContent.filter(content => content.genre === "Action")
    const displayHBOMystery = hboContent.filter(content => content.genre === "Mystery")
    const displayHBOThriller = hboContent.filter(content => content.genre === "Thriller")
    const displayHBORomance = hboContent.filter(content => content.genre === "Romance")
    const displayHBOSciFi = hboContent.filter(content => content.genre === "Sci-Fi")

    const renderHBODramas = displayHBODramas.map(content => <ContentCard key={content.id} content={content}/>)
    const renderHBOCrime = displayHBOCrime.map(content => <ContentCard key={content.id} content={content}/>)
    const renderHBOAction = displayHBOAction.map(content => <ContentCard key={content.id} content={content}/>)
    const renderHBOMystery = displayHBOMystery.map(content => <ContentCard key={content.id} content={content}/>)
    const renderHBOThriller = displayHBOThriller.map(content => <ContentCard key={content.id} content={content}/>)
    const renderHBORomance = displayHBORomance.map(content => <ContentCard key={content.id} content={content}/>)
    const renderHBOSciFi = displayHBOSciFi.map(content => <ContentCard key={content.id} content={content}/>)

    function advanceHBODramaBelt(){
        if((displayHBODramas.length % 5 !== 0) && ((displayHBODramas.length - hboDramaBeltPosition) < 10) && ((displayHBODramas.length - hboDramaBeltPosition) > 5)){
            setHBODramaBeltPosition(hboDramaBeltPosition + ((displayHBODramas.length % 5)))
        }else{
            setHBODramaBeltPosition((hboDramaBeltPosition + 5) % displayHBODramas.length)
        }
        // setHBODramaBeltPosition((hboDramaBeltPosition + 5) % displayHBODramas.length)
      }
      
      function retreatHBODramaBelt(){
        if(hboDramaBeltPosition > 0){
            setHBODramaBeltPosition((hboDramaBeltPosition - 5) % displayHBODramas.length)
        }
      }
    function advanceHBOCrimeBelt(){
        if((displayHBOCrime.length % 5 !== 0) && ((displayHBOCrime.length - hboCrimeBeltPosition) < 10) && ((displayHBOCrime.length - hboCrimeBeltPosition) > 5)){
            setHBOCrimeBeltPosition(hboCrimeBeltPosition + ((displayHBOCrime.length % 5)))
        }else{
            setHBOCrimeBeltPosition((hboCrimeBeltPosition + 5) % displayHBOCrime.length)
        }
        // setHBOCrimeBeltPosition((hboCrimeBeltPosition + 5) % displayHBOCrime.length)
    }
    function retreatHBOCrimeBelt(){
        if(hboCrimeBeltPosition > 0){
            setHBOCrimeBeltPosition((hboCrimeBeltPosition - 5) % displayHBOCrime.length)
        }
    }
    function advanceHBOActionBelt(){
        if((displayHBOAction.length % 5 !== 0) && ((displayHBOAction.length - hboActionBeltPosition) < 10) && ((displayHBOAction.length - hboActionBeltPosition) > 5)){
            setHBOActionBeltPosition(hboActionBeltPosition + ((displayHBOAction.length % 5)))
        }else{
            setHBOActionBeltPosition((hboActionBeltPosition + 5) % displayHBOAction.length)
        }
        // setHBOActionBeltPosition((hboActionBeltPosition + 5) % displayHBOAction.length)
    }
    function retreatHBOActionBelt(){
        if(hboActionBeltPosition > 0){
            setHBOActionBeltPosition((hboActionBeltPosition - 5) % displayHBOAction.length)
        }
    }
    function advanceHBOMysteryBelt(){
        if((displayHBOMystery.length % 5 !== 0) && ((displayHBOMystery.length - hboMysteryBeltPosition) < 10) && ((displayHBOMystery.length - hboMysteryBeltPosition) > 5)){
            setHBOMysteryBeltPosition(hboMysteryBeltPosition + ((displayHBOMystery.length % 5)))
        }else{
            setHBOMysteryBeltPosition((hboMysteryBeltPosition + 5) % displayHBOMystery.length)
        }
        // setHBOMysteryBeltPosition((hboMysteryBeltPosition + 5) % displayHBOMystery.length)
    }
    function retreatHBOMysteryBelt(){
        if(hboMysteryBeltPosition > 0){
            setHBOMysteryBeltPosition((hboMysteryBeltPosition - 5) % displayHBOMystery.length)
        }
    }
    function advanceHBOThrillerBelt(){
        if((displayHBOThriller.length % 5 !== 0) && ((displayHBOThriller.length - hboThrillerBeltPosition) < 10) && ((displayHBOThriller.length - hboThrillerBeltPosition) > 5)){
            setHBOThrillerBeltPosition(hboThrillerBeltPosition + ((displayHBOThriller.length % 5)))
        }else{
            setHBOThrillerBeltPosition((hboThrillerBeltPosition + 5) % displayHBOThriller.length)
        }
        // setHBOThrillerBeltPosition((hboThrillerBeltPosition + 5) % displayHBOThriller.length)
    }
    function retreatHBOThrillerBelt(){
        if(hboThrillerBeltPosition > 0){
            setHBOThrillerBeltPosition((hboThrillerBeltPosition - 5) % displayHBOThriller.length)
        }
    }
    function advanceHBORomanceBelt(){
        if((displayHBORomance.length % 5 !== 0) && ((displayHBORomance.length - hboRomanceBeltPosition) < 10) && ((displayHBORomance.length - hboRomanceBeltPosition) > 5)){
            setHBORomanceBeltPosition(hboRomanceBeltPosition + ((displayHBORomance.length % 5)))
        }else{
            setHBORomanceBeltPosition((hboRomanceBeltPosition + 5) % displayHBORomance.length)
        }
        // setHBORomanceBeltPosition((hboRomanceBeltPosition + 5) % displayHBORomance.length)
    }
    function retreatHBORomanceBelt(){
        if(hboRomanceBeltPosition > 0){
            setHBORomanceBeltPosition((hboRomanceBeltPosition - 5) % displayHBORomance.length)
        }
    }
    function advanceHBOSciFiBelt(){
        if((displayHBOSciFi.length % 5 !== 0) && ((displayHBOSciFi.length - hboSciFiBeltPosition) < 10) && ((displayHBOSciFi.length - hboSciFiBeltPosition) > 5)){
            setHBOSciFiBeltPosition(hboSciFiBeltPosition + ((displayHBOSciFi.length % 5)))
        }else{
            setHBOSciFiBeltPosition((hboSciFiBeltPosition + 5) % displayHBOSciFi.length)
        }
        // setHBOSciFiBeltPosition((hboSciFiBeltPosition + 5) % displayHBOSciFi.length)
    }
    function retreatHBOSciFiBelt(){
        if(hboSciFiBeltPosition > 0){
            setHBOSciFiBeltPosition((hboSciFiBeltPosition - 5) % displayHBOSciFi.length)
        }
    }
   
    return(
        <div className="card-container">
            <h2>Drama</h2>
            <button className="arrow-button" onClick={retreatHBODramaBelt}><i className="arrow left"></i></button>
            {renderHBODramas.slice(hboDramaBeltPosition, hboDramaBeltPosition+5)}
            <button className="arrow-button" onClick={advanceHBODramaBelt}><i className="arrow right"></i></button>
            
            <h2>Crime</h2>
            <button className="arrow-button" onClick={retreatHBOCrimeBelt}><i className="arrow left"></i></button>
            {renderHBOCrime.slice(hboCrimeBeltPosition, hboCrimeBeltPosition+5)}
            <button className="arrow-button" onClick={advanceHBOCrimeBelt}><i className="arrow right"></i></button>

            <h2>Action</h2>
            <button className="arrow-button" onClick={retreatHBOActionBelt}><i className="arrow left"></i></button>
            {renderHBOAction.slice(hboActionBeltPosition, hboActionBeltPosition+5)}
            <button className="arrow-button" onClick={advanceHBOActionBelt}><i className="arrow right"></i></button>

            <h2>Mystery</h2>
            <button className="arrow-button" onClick={retreatHBOMysteryBelt}><i className="arrow left"></i></button>
            {renderHBOMystery.slice(hboMysteryBeltPosition, hboMysteryBeltPosition+5)}
            <button className="arrow-button" onClick={advanceHBOMysteryBelt}><i className="arrow right"></i></button>

            <h2>Thriller</h2>
            <button className="arrow-button" onClick={retreatHBOThrillerBelt}><i className="arrow left"></i></button>
            {renderHBOThriller.slice(hboThrillerBeltPosition, hboThrillerBeltPosition+5)}
            <button className="arrow-button" onClick={advanceHBOThrillerBelt}><i className="arrow right"></i></button>

            <h2>Romance</h2>
            <button className="arrow-button" onClick={retreatHBORomanceBelt}><i className="arrow left"></i></button>
            {renderHBORomance.slice(hboRomanceBeltPosition, hboRomanceBeltPosition+5)}
            <button className="arrow-button" onClick={advanceHBORomanceBelt}><i className="arrow right"></i></button>

            <h2>Sci-Fi</h2>
            <button className="arrow-button" onClick={retreatHBOSciFiBelt}><i className="arrow left"></i></button>
            {renderHBOSciFi.slice(hboSciFiBeltPosition, hboSciFiBeltPosition+5)}
            <button className="arrow-button" onClick={advanceHBOSciFiBelt}><i className="arrow right"></i></button>
            
        </div>
        )

}

export default HBO;