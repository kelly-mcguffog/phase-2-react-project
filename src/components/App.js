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
import "../App.css"


function App() {

   const [isContent, setContent] = useState([]);


  useEffect(() => {
    fetch('http://localhost:3000/content')
      .then(res => res.json())
      .then(data => setContent(data))
  },[])


  return (
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
          <Netflix/>
        </Route>
      </Switch>
    </Router>
  )
}

export default App;
