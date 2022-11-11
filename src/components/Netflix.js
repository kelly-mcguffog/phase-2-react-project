import React, {useState} from "react";
import ContentCard from "./ContentCard";


function Netflix({allContent}){
    const [netflixDramaBeltPosition, setNetflixDramaBeltPosition] = useState(0)
    const [netflixCrimeBeltPosition, setNetflixCrimeBeltPosition] = useState(0)
    const [netflixActionBeltPosition, setNetflixActionBeltPosition] = useState(0)
    const [netflixMysteryBeltPosition, setNetflixMysteryBeltPosition] = useState(0)
    const [netflixThrillerBeltPosition, setNetflixThrillerBeltPosition] = useState(0)
    const [netflixRomanceBeltPosition, setNetflixRomanceBeltPosition] = useState(0)
    const [netflixSciFiBeltPosition, setNetflixSciFiBeltPosition] = useState(0)
    
    const netflixContent = allContent.filter(content => content.platform === "Netflix")

    const displayNetflixDramas = netflixContent.filter(content => content.genre === "Drama")
    const displayNetflixCrime = netflixContent.filter(content => content.genre === "Crime")
    const displayNetflixAction = netflixContent.filter(content => content.genre === "Action")
    const displayNetflixMystery = netflixContent.filter(content => content.genre === "Mystery")
    const displayNetflixThriller = netflixContent.filter(content => content.genre === "Thriller")
    const displayNetflixRomance = netflixContent.filter(content => content.genre === "Romance")
    const displayNetflixSciFi = netflixContent.filter(content => content.genre === "Sci-Fi")

    const renderNetflixDramas = displayNetflixDramas.map(content => <ContentCard key={content.id} content={content}/>)
    const renderNetflixCrime = displayNetflixCrime.map(content => <ContentCard key={content.id} content={content}/>)
    const renderNetflixAction = displayNetflixAction.map(content => <ContentCard key={content.id} content={content}/>)
    const renderNetflixMystery = displayNetflixMystery.map(content => <ContentCard key={content.id} content={content}/>)
    const renderNetflixThriller = displayNetflixThriller.map(content => <ContentCard key={content.id} content={content}/>)
    const renderNetflixRomance = displayNetflixRomance.map(content => <ContentCard key={content.id} content={content}/>)
    const renderNetflixSciFi = displayNetflixSciFi.map(content => <ContentCard key={content.id} content={content}/>)

    function advanceNetflixDramaBelt(){
        setNetflixDramaBeltPosition((netflixDramaBeltPosition + 5) % displayNetflixDramas.length)
      }
      function retreatNetflixDramaBelt(){
        setNetflixDramaBeltPosition((netflixDramaBeltPosition - 5) % displayNetflixDramas.length)
      }
    function advanceNetflixCrimeBelt(){
        setNetflixCrimeBeltPosition((netflixCrimeBeltPosition + 5) % displayNetflixCrime.length)
    }
    function retreatNetflixCrimeBelt(){
        setNetflixCrimeBeltPosition((netflixCrimeBeltPosition - 5) % displayNetflixCrime.length)
    }
    function advanceNetflixActionBelt(){
        setNetflixActionBeltPosition((netflixActionBeltPosition + 5) % displayNetflixAction.length)
    }
    function retreatNetflixActionBelt(){
        setNetflixActionBeltPosition((netflixActionBeltPosition - 5) % displayNetflixAction.length)
    }
    function advanceNetflixMysteryBelt(){
        setNetflixMysteryBeltPosition((netflixMysteryBeltPosition + 5) % displayNetflixMystery.length)
    }
    function retreatNetflixMysteryBelt(){
        setNetflixMysteryBeltPosition((netflixMysteryBeltPosition - 5) % displayNetflixMystery.length)
    }
    function advanceNetflixThrillerBelt(){
        setNetflixThrillerBeltPosition((netflixThrillerBeltPosition + 5) % displayNetflixThriller.length)
    }
    function retreatNetflixThrillerBelt(){
        setNetflixThrillerBeltPosition((netflixThrillerBeltPosition - 5) % displayNetflixThriller.length)
    }
    function advanceNetflixRomanceBelt(){
        setNetflixRomanceBeltPosition((netflixRomanceBeltPosition + 5) % displayNetflixRomance.length)
    }
    function retreatNetflixRomanceBelt(){
        setNetflixRomanceBeltPosition((netflixRomanceBeltPosition - 5) % displayNetflixRomance.length)
    }
    function advanceNetflixSciFiBelt(){
        setNetflixSciFiBeltPosition((netflixSciFiBeltPosition + 5) % displayNetflixSciFi.length)
    }
    function retreatNetflixSciFiBelt(){
        setNetflixSciFiBeltPosition((netflixSciFiBeltPosition - 5) % displayNetflixSciFi.length)
    }
   
    return(
        <div className="card-container">
            <h2>Drama</h2>
            <button className="arrow-button" onClick={retreatNetflixDramaBelt}><i className="arrow left"></i></button>
            {renderNetflixDramas.slice(netflixDramaBeltPosition, netflixDramaBeltPosition+5)}
            <button className="arrow-button" onClick={advanceNetflixDramaBelt}><i className="arrow right"></i></button>
            
            <h2>Crime</h2>
            <button className="arrow-button" onClick={retreatNetflixCrimeBelt}><i className="arrow left"></i></button>
            {renderNetflixCrime.slice(netflixCrimeBeltPosition, netflixCrimeBeltPosition+5)}
            <button className="arrow-button" onClick={advanceNetflixCrimeBelt}><i className="arrow right"></i></button>

            <h2>Action</h2>
            <button className="arrow-button" onClick={retreatNetflixActionBelt}><i className="arrow left"></i></button>
            {renderNetflixAction.slice(netflixActionBeltPosition, netflixActionBeltPosition+5)}
            <button className="arrow-button" onClick={advanceNetflixActionBelt}><i className="arrow right"></i></button>

            <h2>Mystery</h2>
            <button className="arrow-button" onClick={retreatNetflixMysteryBelt}><i className="arrow left"></i></button>
            {renderNetflixMystery.slice(netflixMysteryBeltPosition, netflixMysteryBeltPosition+5)}
            <button className="arrow-button" onClick={advanceNetflixMysteryBelt}><i className="arrow right"></i></button>

            <h2>Thriller</h2>
            <button className="arrow-button" onClick={retreatNetflixThrillerBelt}><i className="arrow left"></i></button>
            {renderNetflixThriller.slice(netflixThrillerBeltPosition, netflixThrillerBeltPosition+5)}
            <button className="arrow-button" onClick={advanceNetflixThrillerBelt}><i className="arrow right"></i></button>

            <h2>Romance</h2>
            <button className="arrow-button" onClick={retreatNetflixRomanceBelt}><i className="arrow left"></i></button>
            {renderNetflixRomance.slice(netflixRomanceBeltPosition, netflixRomanceBeltPosition+5)}
            <button className="arrow-button" onClick={advanceNetflixRomanceBelt}><i className="arrow right"></i></button>

            <h2>Sci-Fi</h2>
            <button className="arrow-button" onClick={retreatNetflixSciFiBelt}><i className="arrow left"></i></button>
            {renderNetflixSciFi.slice(netflixSciFiBeltPosition, netflixSciFiBeltPosition+5)}
            <button className="arrow-button" onClick={advanceNetflixSciFiBelt}><i className="arrow right"></i></button>
            
        </div>
        )
}

export default Netflix;