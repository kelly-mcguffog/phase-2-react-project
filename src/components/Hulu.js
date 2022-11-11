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
        setHuluDramaBeltPosition((huluDramaBeltPosition + 3) % displayHuluDramas.length)
      }
    function advanceHuluCrimeBelt(){
        setHuluCrimeBeltPosition((huluCrimeBeltPosition + 3) % displayHuluCrime.length)
    }
    function advanceHuluActionBelt(){
        setHuluActionBeltPosition((huluActionBeltPosition + 3) % displayHuluAction.length)
    }
    function advanceHuluMysteryBelt(){
        setHuluMysteryBeltPosition((huluMysteryBeltPosition + 3) % displayHuluMystery.length)
    }
    function advanceHuluThrillerBelt(){
        setHuluThrillerBeltPosition((huluThrillerBeltPosition + 3) % displayHuluThriller.length)
    }
    function advanceHuluRomanceBelt(){
        setHuluRomanceBeltPosition((huluRomanceBeltPosition + 3) % displayHuluRomance.length)
    }
    function advanceHuluSciFiBelt(){
        setHuluSciFiBeltPosition((huluSciFiBeltPosition + 3) % displayHuluSciFi.length)
    }
   
    return(
        <div className="card-container">
            <h2>Drama</h2>
            {renderHuluDramas.slice(huluDramaBeltPosition, huluDramaBeltPosition+3)}
            <button onClick={advanceHuluDramaBelt}>more</button>
            
            <h2>Crime</h2>
            {renderHuluCrime.slice(huluCrimeBeltPosition, huluCrimeBeltPosition+3)}
            <button onClick={advanceHuluCrimeBelt}>more</button>

            <h2>Action</h2>
            {renderHuluAction.slice(huluActionBeltPosition, huluActionBeltPosition+3)}
            <button onClick={advanceHuluActionBelt}>more</button>

            <h2>Mystery</h2>
            {renderHuluMystery.slice(huluMysteryBeltPosition, huluMysteryBeltPosition+3)}
            <button onClick={advanceHuluMysteryBelt}>more</button>

            <h2>Thriller</h2>
            {renderHuluThriller.slice(huluThrillerBeltPosition, huluThrillerBeltPosition+3)}
            <button onClick={advanceHuluThrillerBelt}>more</button>

            <h2>Romance</h2>
            {renderHuluRomance.slice(huluRomanceBeltPosition, huluRomanceBeltPosition+3)}
            <button onClick={advanceHuluRomanceBelt}>more</button>

            <h2>Sci-Fi</h2>
            {renderHuluSciFi.slice(huluSciFiBeltPosition, huluSciFiBeltPosition+3)}
            <button onClick={advanceHuluSciFiBelt}>more</button>
            
        </div>
        )
}

export default Hulu;