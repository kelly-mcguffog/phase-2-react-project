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
    const [filter, setFilter] = useState("All")
    
    let displayContent = isContent.filter(content => content.title.toLowerCase().includes(search.toLowerCase()))
    displayContent = displayContent.filter(content => {
      if(filter === "All") return true;
      return content.category === filter;
    })
    displayContent.sort(function(a, b) {
      if(a.title.toLowerCase() < b.title.toLowerCase()) return -1;
      if(a.title.toLowerCase() > b.title.toLowerCase()) return 1;
      return 0;
     })

    function handleFilter(e){
      setFilter(e.target.value)
    }

  useEffect(() => {
    fetch('http://localhost:3000/content')
      .then(res => res.json())
      .then(data => setContent(data))
  },[])

  function handleAddNewContent(newContent){
    setContent([...isContent, newContent]);
  }

  return (
    <Router>
      <NavBar />
      <Search handleFilter={handleFilter} search={search} setSearch={setSearch}/>
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
