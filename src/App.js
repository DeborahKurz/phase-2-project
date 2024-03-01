import './App.css';

function App() {
  return (
    <div className="App">
      Hello
    </div>
  );
}

export default App;

//COMMIT commit Commit!

/*
Define data in db.json
create routes.js file and define routes (3 needed):
  1."Home" aka App.js "/"  
  2. Old Testament Tab "/oldtestament"
  3. New Testament Tab "/newtestament"
finish setting up routes in index.js
Create Components (5 needed):
  (DONE) 1. App.js
  2. OldTestament.js  (Displays Old Testament Verses)
  3. NewTestament.js  (Displays New Testament Verses)
  4. Form.js   (Is the form that takes in form data to add to the verses array)
  5. VerseCard.js  (Displays the verses inside the Old and New Testament components)
Get Project Working:
  1. Create NavBar.js & set up to display routes
  2. Create Form With Inputsin Form.js.
  3. Display Form in App.js
  4. Create display info in VerseForm.js
  5. Fetch data in OldTestament.js and pass it to VerseForm.js. Make sure it is displaying on page.
  6. Refine OldTestament.js so it sorts through data before passing it to VerseCard.js.
  7. Copy OldTestament.js to NewTestament.js and edit so it is working.
  8. Make Form.js a controlled form.
  9. Create needed function in app.js and pass to Form.js. Get App.js working properly with Form.js info (POST request).
    ->Use this information from our class info on the final project:
              // in App:
              function addMovie(newMovie){
              setMovies([...movies, newMovie]) // Updating movies state.
              }

              //in Form
              const configObj = {
              method: 'POST',
              headers: {'Content-Type': 'application/json'},
              body: JSON.stringify({title: "Titanic"})
              }

              fetch('http://localhost:3000/movies', configObj)
              .then(res => res.json())
              .then(data => addMovie(data)) //THIS STATE UPDATE IS REQUIRED!!!
              // clear form

  10. See where we need to go from here.

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