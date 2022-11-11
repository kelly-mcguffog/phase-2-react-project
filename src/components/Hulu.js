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
        setHuluDramaBeltPosition((huluDramaBeltPosition + 5) % displayHuluDramas.length)
      }
      function retreatHuluDramaBelt(){
        setHuluDramaBeltPosition((huluDramaBeltPosition - 5) % displayHuluDramas.length)
      }
    function advanceHuluCrimeBelt(){
        setHuluCrimeBeltPosition((huluCrimeBeltPosition + 5) % displayHuluCrime.length)
    }
    function retreatHuluCrimeBelt(){
        setHuluCrimeBeltPosition((huluCrimeBeltPosition - 5) % displayHuluCrime.length)
    }
    function advanceHuluActionBelt(){
        setHuluActionBeltPosition((huluActionBeltPosition + 5) % displayHuluAction.length)
    }
    function retreatHuluActionBelt(){
        setHuluActionBeltPosition((huluActionBeltPosition - 5) % displayHuluAction.length)
    }
    function advanceHuluMysteryBelt(){
        setHuluMysteryBeltPosition((huluMysteryBeltPosition + 5) % displayHuluMystery.length)
    }
    function retreatHuluMysteryBelt(){
        setHuluMysteryBeltPosition((huluMysteryBeltPosition - 5) % displayHuluMystery.length)
    }
    function advanceHuluThrillerBelt(){
        setHuluThrillerBeltPosition((huluThrillerBeltPosition + 5) % displayHuluThriller.length)
    }
    function retreatHuluThrillerBelt(){
        setHuluThrillerBeltPosition((huluThrillerBeltPosition - 5) % displayHuluThriller.length)
    }
    function advanceHuluRomanceBelt(){
        setHuluRomanceBeltPosition((huluRomanceBeltPosition + 5) % displayHuluRomance.length)
    }
    function retreatHuluRomanceBelt(){
        setHuluRomanceBeltPosition((huluRomanceBeltPosition - 5) % displayHuluRomance.length)
    }
    function advanceHuluSciFiBelt(){
        setHuluSciFiBeltPosition((huluSciFiBeltPosition + 5) % displayHuluSciFi.length)
    }
    function retreatHuluSciFiBelt(){
        setHuluSciFiBeltPosition((huluSciFiBeltPosition - 5) % displayHuluSciFi.length)
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