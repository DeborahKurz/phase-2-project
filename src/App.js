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

Get Project Working:

  4. Create display info in VerseCard.js
  5. Fetch data in OldTestament.js and pass it to VerseForm.js. Make sure it is displaying on page.
  6. Refine OldTestament.js so it sorts through data before passing it to VerseCard.js.
  7. Copy OldTestament.js to NewTestament.js and edit so it is working.

  10. Create ErrorPage.js
  11. See where we need to go from here.


Additionally:
  1. Create a CSS file to style
  2. Create an index.html file
  3. Write the README file.




Hierarchy:
  App.js (State Variable For bibleVerses / passes down function for adding a verse / POST request)
    |-Form.js (Collects form data and puts it in an object / pass the object to function from parent)
  OldTestament.js (GET request / filter out old testament verses / pass them down to VerseCard for rendering)
    |-VerseCard.js (recieves 1 verse as a prop / renders verse)
  NewTestament.js (GET request / filter out new testament verses / pass them down to VerseCard for rendering)
    |-VerseCard.js

  */