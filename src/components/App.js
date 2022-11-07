import React, { useState, useEffect } from "react";
import Container from "./Container";
import NavBar from "./NavBar";
import "../App.css"


function App() {
  const [isContent, setContent] = useState([]);


  useEffect(() => {
    fetch('http://localhost:3000/content')
      .then(res => res.json())
      .then(data => setContent(data))
  },[])

  return (
    <div className="App">
      <NavBar />
      <Container allContent={isContent} />
    </div>
  );
}

export default App;
