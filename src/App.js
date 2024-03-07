import './App.css';
import React, {useState, useEffect} from "react";
import NavBar from "./NavBar.js";
import {Outlet} from "react-router-dom";

function App() {
  const [versesArray, setVersesArray] = useState([]);

  useEffect(()=>{
    fetch("http://localhost:3000/verses")
    .then(r=>r.json())
    .then(verses => setVersesArray(verses))
    .catch((error) => console.error(error));
  }, [])

  function addVerse(newVerse){
    setVersesArray([...versesArray, newVerse])
  }

  return (
    <div className="App">
      <header>
        <NavBar />  
      </header>
      <Outlet context={{addVerse: addVerse,  versesArray: versesArray}} />
    </div>
  );
}

export default App;