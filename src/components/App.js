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


  useEffect(() => {
    fetch('http://localhost:3000/content')
      .then(res => res.json())
      .then(data => setContent(data))
  },[])

  function handleAddNewContent(newContent){
    setContent([...isContent, newContent]);
  }


  return (
    <>
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Container allContent={isContent} />
        </Route>
        <Route path="/hbo">
          <HBO allContent={isContent} />
        </Route>
        <Route path="/hulu">
          <Hulu allContent={isContent} />
        </Route>
        <Route path="/netflix">
          <Netflix allContent={isContent} />
        </Route>
        <Route path="/new">
          <Form onContentFormSubmit={handleAddNewContent} />
        </Route>
      </Switch>
    </Router>
    <Search />
    </>
  )
}

export default App;
