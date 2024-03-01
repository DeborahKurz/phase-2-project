//(Is the form that takes in form data to add to the verses array)
//  2. Create Form With Inputs in Form.js.
/*
    input fields
    text to say what to type... placeholder?
    button for submitting form
    controlled inputs
*/
import React, {useState} from "react";
import './App.css';

function Form(){
    console.log("form")
    const [testament, setTestament] = useState("");
    const [reference, setReference] = useState("");
    const [verse, setVerse] = useState("");
    const [url, setUrl] = useState("");

    function handleSubmit(e){
        e.preventDefault();
        console.log("handleSubmit")
    }

    console.log(testament, reference, verse, url);

    /*              
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

    */

    return (
        <div className="App">
            <h4>Save Your Verse Here:</h4>
            <form onSubmit={handleSubmit}>
                <input type="text" value={testament} placeholder={"Type \'Old\' or \'New\'"} onChange={(e)=> setTestament(e.target.value)}></input>
                <input type="text" value={reference} placeholder={"Example: John 3:16"} onChange={(e)=> setReference(e.target.value)}></input>
                <input type="text" value={verse} placeholder={"Example: For God so loved the world... "} onChange={(e)=> setVerse(e.target.value)}></input>
                <input type="text" value={url} placeholder={"Paste the URL here"} onChange={(e)=> setUrl(e.target.value)}></input>
                <button>Add My Verse!</button>
            </form>
        </div>
    )
}

export default Form;