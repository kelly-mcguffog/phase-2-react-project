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
import EditForm from "./EditForm";
import "../App.css"


function App() {

    const [isContent, setContent] = useState([]);
    const [search, setSearch] = useState("")
    const [filter, setFilter] = useState("All")
    const [editMedia, setEditMedia] = useState(null)

    
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

  function handleEditMedia(id){
    const selectedMedia = displayContent.find(content => content.id === id)
    setEditMedia(selectedMedia)
  }

  const updateMediaList = (newMedia) => {
    const newList = displayContent.map(content => {
      if(content.id === newMedia.id){
        return newMedia
      }else {
        return content
      }
    })
    setContent(newList)
  }

  return (
    <Router>
      <NavBar search={search} handleFilter={handleFilter} setSearch={setSearch}/>
      <Switch>
        <Route exact path="/">
          <Container setSearch={setSearch} handleEditMedia={handleEditMedia} allContent={displayContent} />
        </Route>
        <Route path="/hbo">
          <HBO setSearch={setSearch} handleEditMedia={handleEditMedia} allContent={displayContent} />
        </Route>
        <Route path="/hulu">
          <Hulu setSearch={setSearch} handleEditMedia={handleEditMedia} allContent={displayContent} />
        </Route>
        <Route path="/netflix">
          <Netflix setSearch={setSearch} handleEditMedia={handleEditMedia} allContent={displayContent} />
        </Route>
        <Route path="/new">
          <Form onContentFormSubmit={handleAddNewContent} />
        </Route>
        <Route path="/edit">
          <EditForm {...editMedia} setEditMedia={setEditMedia} updateMediaList={updateMediaList} />
        </Route>
      </Switch>
    </Router>
  )
}

export default App;
