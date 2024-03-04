import './App.css';
import React, {useState, useEffect} from "react";
import NavBar from "./NavBar.js";
import Form from "./Form.js";

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
      <main>
        <Form onAddVerse={addVerse}/>
      </main>
    </div>
  );
}

export default App;

//COMMIT commit Commit!

/*
Additionally:
  3. Write the README file.
  4. ???Create component that fetches data, sorts it into new and old testament and passes this info to OldTestament.js & NewTestament.js??? This way we are not repeating ourselves in both files.
  5. ???Use Context to pass info from App.js to file mentioned above?


Hierarchy:
  App.js (State Variable For bibleVerses / passes down function for adding a verse / POST request)
    |-Form.js (Collects form data and puts it in an object / pass the object to function from parent)
  OldTestament.js (GET request / filter out old testament verses / pass them down to VerseCard for rendering)
    |-VerseCard.js (recieves 1 verse as a prop / renders verse)
  NewTestament.js (GET request / filter out new testament verses / pass them down to VerseCard for rendering)
    |-VerseCard.js

  */