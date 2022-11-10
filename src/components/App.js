import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import NavBar from "./NavBar";
import HBO from "./HBO";
import Netflix from "./Netflix";
import Hulu from "./Hulu";
import Container from "./Container";
import Form from "./Form";
import Search from "./Search";
import "../App.css"


function App() {

   const [isContent, setContent] = useState([]);
   const [search, setSearch] = useState("")
  // const [dramaBeltPosition, setDramaBeltPosition] = useState(0)
  // const [crimeBeltPosition, setCrimeBeltPosition] = useState(0)
  // const [actionBeltPosition, setActionBeltPosition] = useState(0)
  // const [mysteryBeltPosition, setMysteryBeltPosition] = useState(0)
  // const [thrillerBeltPosition, setThrillerBeltPosition] = useState(0)
  // const [romanceBeltPosition, setRomanceBeltPosition] = useState(0)
  // const [sciFiBeltPosition, setSciFiBeltPosition] = useState(0)

   const displayContent = isContent.filter(content => content.title.toLowerCase().includes(search.toLowerCase()))


  useEffect(() => {
    fetch('http://localhost:3000/content')
      .then(res => res.json())
      .then(data => setContent(data))
  },[])

  function handleAddNewContent(newContent){
    setContent([...isContent, newContent]);
  }

  
  // const displayDramas = allContent.filter(content => content.genre === "Drama")
  // const displayCrime = allContent.filter(content => content.genre === "Crime")
  // const displayAction = allContent.filter(content => content.genre === "Action")
  // const displayMystery = allContent.filter(content => content.genre === "Mystery")
  // const displayThriller = allContent.filter(content => content.genre === "Thriller")
  // const displayRomance = allContent.filter(content => content.genre === "Romance")
  // const displaySciFi = allContent.filter(content => content.genre === "Sci-Fi")

  // const renderDramas = displayDramas.map(content => <ContentCard key={content.id} content={content}/>)
  // const renderCrime = displayCrime.map(content => <ContentCard key={content.id} content={content}/>)
  // const renderAction = displayAction.map(content => <ContentCard key={content.id} content={content}/>)
  // const renderMystery = displayMystery.map(content => <ContentCard key={content.id} content={content}/>)
  // const renderThriller = displayThriller.map(content => <ContentCard key={content.id} content={content}/>)
  // const renderRomance = displayRomance.map(content => <ContentCard key={content.id} content={content}/>)
  // const renderSciFi = displaySciFi.map(content => <ContentCard key={content.id} content={content}/>)

  // function advanceDramaBelt(){
  //     setDramaBeltPosition((dramaBeltPosition + 3) % displayDramas.length)
  //   }
  // function advanceCrimeBelt(){
  //     setCrimeBeltPosition((crimeBeltPosition + 3) % displayCrime.length)
  // }
  // function advanceActionBelt(){
  //     setActionBeltPosition((actionBeltPosition + 3) % displayAction.length)
  // }
  // function advanceMysteryBelt(){
  //     setMysteryBeltPosition((mysteryBeltPosition + 3) % displayMystery.length)
  // }
  // function advanceThrillerBelt(){
  //     setThrillerBeltPosition((thrillerBeltPosition + 3) % displayThriller.length)
  // }
  // function advanceRomanceBelt(){
  //     setRomanceBeltPosition((romanceBeltPosition + 3) % displayRomance.length)
  // }
  // function advanceSciFiBelt(){
  //     setSciFiBeltPosition((sciFiBeltPosition + 3) % displaySciFi.length)
  // }


  return (
    <Router>
      <NavBar />
      <Search search={search} setSearch={setSearch}/>
      <Switch>
        <Route exact path="/">
          <Container allContent={displayContent} />
        </Route>
        <Route path="/hbo">
          <HBO allContent={displayContent} />
        </Route>
        <Route path="/hulu">
          <Hulu allContent={displayContent} />
        </Route>
        <Route path="/netflix">
          <Netflix allContent={displayContent} />
        </Route>
        <Route path="/new">
          <Form onContentFormSubmit={handleAddNewContent} />
        </Route>
      </Switch>
    </Router>
  )
}

export default App;
