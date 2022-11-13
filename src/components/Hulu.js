import React, {useState} from "react";
import ContentCard from "./ContentCard";


function Hulu({allContent}){
    const [huluDramaBeltPosition, setHuluDramaBeltPosition] = useState(0)
    const [huluCrimeBeltPosition, setHuluCrimeBeltPosition] = useState(0)
    const [huluActionBeltPosition, setHuluActionBeltPosition] = useState(0)
    const [huluMysteryBeltPosition, setHuluMysteryBeltPosition] = useState(0)
    const [huluThrillerBeltPosition, setHuluThrillerBeltPosition] = useState(0)
    const [huluRomanceBeltPosition, setHuluRomanceBeltPosition] = useState(0)
    const [huluSciFiBeltPosition, setHuluSciFiBeltPosition] = useState(0)
    
    const huluContent = allContent.filter(content => content.platform === "Hulu")

    const displayHuluDramas = huluContent.filter(content => content.genre === "Drama")
    const displayHuluCrime = huluContent.filter(content => content.genre === "Crime")
    const displayHuluAction = huluContent.filter(content => content.genre === "Action")
    const displayHuluMystery = huluContent.filter(content => content.genre === "Mystery")
    const displayHuluThriller = huluContent.filter(content => content.genre === "Thriller")
    const displayHuluRomance = huluContent.filter(content => content.genre === "Romance")
    const displayHuluSciFi = huluContent.filter(content => content.genre === "Sci-Fi")

    const renderHuluDramas = displayHuluDramas.map(content => <ContentCard key={content.id} content={content}/>)
    const renderHuluCrime = displayHuluCrime.map(content => <ContentCard key={content.id} content={content}/>)
    const renderHuluAction = displayHuluAction.map(content => <ContentCard key={content.id} content={content}/>)
    const renderHuluMystery = displayHuluMystery.map(content => <ContentCard key={content.id} content={content}/>)
    const renderHuluThriller = displayHuluThriller.map(content => <ContentCard key={content.id} content={content}/>)
    const renderHuluRomance = displayHuluRomance.map(content => <ContentCard key={content.id} content={content}/>)
    const renderHuluSciFi = displayHuluSciFi.map(content => <ContentCard key={content.id} content={content}/>)

    function advanceHuluDramaBelt(){
        if((displayHuluDramas.length % 5 !== 0) && ((displayHuluDramas.length - huluDramaBeltPosition) < 10) && ((displayHuluDramas.length - huluDramaBeltPosition) > 5)){
            setHuluDramaBeltPosition(huluDramaBeltPosition + ((displayHuluDramas.length % 5)))
        }else{
            setHuluDramaBeltPosition((huluDramaBeltPosition + 5) % displayHuluDramas.length)
        }
        // setHuluDramaBeltPosition((huluDramaBeltPosition + 5) % displayHuluDramas.length)
      }
      function retreatHuluDramaBelt(){
        if(huluDramaBeltPosition > 0){
            setHuluDramaBeltPosition((huluDramaBeltPosition - 5) % displayHuluDramas.length)
        }
      }
    function advanceHuluCrimeBelt(){
        if((displayHuluCrime.length % 5 !== 0) && ((displayHuluCrime.length - huluCrimeBeltPosition) < 10) && ((displayHuluCrime.length - huluCrimeBeltPosition) > 5)){
            setHuluCrimeBeltPosition(huluCrimeBeltPosition + ((displayHuluCrime.length % 5)))
        }else{
            setHuluCrimeBeltPosition((huluCrimeBeltPosition + 5) % displayHuluCrime.length)
        }
        // setHuluCrimeBeltPosition((huluCrimeBeltPosition + 5) % displayHuluCrime.length)
    }
    function retreatHuluCrimeBelt(){
        if(huluCrimeBeltPosition > 0){
            setHuluCrimeBeltPosition((huluCrimeBeltPosition - 5) % displayHuluCrime.length)
        }
    }
    function advanceHuluActionBelt(){
        if((displayHuluAction.length % 5 !== 0) && ((displayHuluAction.length - huluActionBeltPosition) < 10) && ((displayHuluAction.length - huluActionBeltPosition) > 5)){
            setHuluActionBeltPosition(huluActionBeltPosition + ((displayHuluAction.length % 5)))
        }else{
            setHuluActionBeltPosition((huluActionBeltPosition + 5) % displayHuluAction.length)
        }
        // setHuluActionBeltPosition((huluActionBeltPosition + 5) % displayHuluAction.length)
    }
    function retreatHuluActionBelt(){
        if(huluActionBeltPosition > 0){
            setHuluActionBeltPosition((huluActionBeltPosition - 5) % displayHuluAction.length)
        }
    }
    function advanceHuluMysteryBelt(){
        if((displayHuluMystery.length % 5 !== 0) && ((displayHuluMystery.length - huluMysteryBeltPosition) < 10) && ((displayHuluMystery.length - huluMysteryBeltPosition) > 5)){
            setHuluMysteryBeltPosition(huluMysteryBeltPosition + ((displayHuluMystery.length % 5)))
        }else{
            setHuluMysteryBeltPosition((huluMysteryBeltPosition + 5) % displayHuluMystery.length)
        }
        // setHuluMysteryBeltPosition((huluMysteryBeltPosition + 5) % displayHuluMystery.length)
    }
    function retreatHuluMysteryBelt(){
        if(huluMysteryBeltPosition > 0){
            setHuluMysteryBeltPosition((huluMysteryBeltPosition - 5) % displayHuluMystery.length)
        }
    }
    function advanceHuluThrillerBelt(){
        if((displayHuluThriller.length % 5 !== 0) && ((displayHuluThriller.length - huluThrillerBeltPosition) < 10) && ((displayHuluThriller.length - huluThrillerBeltPosition) > 5)){
            setHuluThrillerBeltPosition(huluThrillerBeltPosition + ((displayHuluThriller.length % 5)))
        }else{
            setHuluThrillerBeltPosition((huluThrillerBeltPosition + 5) % displayHuluThriller.length)
        }
        // setHuluThrillerBeltPosition((huluThrillerBeltPosition + 5) % displayHuluThriller.length)
    }
    function retreatHuluThrillerBelt(){
        if(huluThrillerBeltPosition > 0){
            setHuluThrillerBeltPosition((huluThrillerBeltPosition - 5) % displayHuluThriller.length)
        }
    }
    function advanceHuluRomanceBelt(){
        if((displayHuluRomance.length % 5 !== 0) && ((displayHuluRomance.length - huluRomanceBeltPosition) < 10) && ((displayHuluRomance.length - huluRomanceBeltPosition) > 5)){
            setHuluRomanceBeltPosition(huluRomanceBeltPosition + ((displayHuluRomance.length % 5)))
        }else{
            setHuluRomanceBeltPosition((huluRomanceBeltPosition + 5) % displayHuluRomance.length)
        }
        // setHuluRomanceBeltPosition((huluRomanceBeltPosition + 5) % displayHuluRomance.length)
    }
    function retreatHuluRomanceBelt(){
        if(huluRomanceBeltPosition > 0){
            setHuluRomanceBeltPosition((huluRomanceBeltPosition - 5) % displayHuluRomance.length)
        }
    }
    function advanceHuluSciFiBelt(){
        if((displayHuluSciFi.length % 5 !== 0) && ((displayHuluSciFi.length - huluSciFiBeltPosition) < 10) && ((displayHuluSciFi.length - huluSciFiBeltPosition) > 5)){
            setHuluSciFiBeltPosition(huluSciFiBeltPosition + ((displayHuluSciFi.length % 5)))
        }else{
            setHuluSciFiBeltPosition((huluSciFiBeltPosition + 5) % displayHuluSciFi.length)
        }
        // setHuluSciFiBeltPosition((huluSciFiBeltPosition + 5) % displayHuluSciFi.length)
    }
    function retreatHuluSciFiBelt(){
        if(huluSciFiBeltPosition > 0){
            setHuluSciFiBeltPosition((huluSciFiBeltPosition - 5) % displayHuluSciFi.length)
        }
    }
   
    return(
        <div className="card-container">
            <h2>Drama</h2>
            <button className="arrow-button" onClick={retreatHuluDramaBelt}><i className="arrow left"></i></button>
            {renderHuluDramas.slice(huluDramaBeltPosition, huluDramaBeltPosition+5)}
            <button className="arrow-button" onClick={advanceHuluDramaBelt}><i className="arrow right"></i></button>
            
            <h2>Crime</h2>
            <button className="arrow-button" onClick={retreatHuluCrimeBelt}><i className="arrow left"></i></button>
            {renderHuluCrime.slice(huluCrimeBeltPosition, huluCrimeBeltPosition+5)}
            <button className="arrow-button" onClick={advanceHuluCrimeBelt}><i className="arrow right"></i></button>

            <h2>Action</h2>
            <button className="arrow-button" onClick={retreatHuluActionBelt}><i className="arrow left"></i></button>
            {renderHuluAction.slice(huluActionBeltPosition, huluActionBeltPosition+5)}
            <button className="arrow-button" onClick={advanceHuluActionBelt}><i className="arrow right"></i></button>

            <h2>Mystery</h2>
            <button className="arrow-button" onClick={retreatHuluMysteryBelt}><i className="arrow left"></i></button>
            {renderHuluMystery.slice(huluMysteryBeltPosition, huluMysteryBeltPosition+5)}
            <button className="arrow-button" onClick={advanceHuluMysteryBelt}><i className="arrow right"></i></button>

            <h2>Thriller</h2>
            <button className="arrow-button" onClick={retreatHuluThrillerBelt}><i className="arrow left"></i></button>
            {renderHuluThriller.slice(huluThrillerBeltPosition, huluThrillerBeltPosition+5)}
            <button className="arrow-button" onClick={advanceHuluThrillerBelt}><i className="arrow right"></i></button>

            <h2>Romance</h2>
            <button className="arrow-button" onClick={retreatHuluRomanceBelt}><i className="arrow left"></i></button>
            {renderHuluRomance.slice(huluRomanceBeltPosition, huluRomanceBeltPosition+5)}
            <button className="arrow-button" onClick={advanceHuluRomanceBelt}><i className="arrow right"></i></button>

            <h2>Sci-Fi</h2>
            <button className="arrow-button" onClick={retreatHuluSciFiBelt}><i className="arrow left"></i></button>
            {renderHuluSciFi.slice(huluSciFiBeltPosition, huluSciFiBeltPosition+5)}
            <button className="arrow-button" onClick={advanceHuluSciFiBelt}><i className="arrow right"></i></button>
            
        </div>
        )
}

export default Hulu;