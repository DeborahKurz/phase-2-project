import React, {useState} from "react";
import {useOutletContext} from "react-router-dom";
import './App.css';

function Form(){
    const {addVerse,} = useOutletContext();

    const [testament, setTestament] = useState("");
    const [reference, setReference] = useState("");
    const [verse, setVerse] = useState("");
    const [url, setUrl] = useState("");

    function handleSubmit(e){
        e.preventDefault();
        const configObj = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(
                {
                    testament: testament,
                    reference: reference,
                    verse: verse,
                    url: url
                }
            )
        }
        fetch("http://localhost:3000/verses", configObj)
        .then(r=>r.json())
        .then(verseObj => {
            addVerse(verseObj);
            
            setTestament("");
            setReference("");
            setVerse("");
            setUrl("");
        })
    }

    return (
        <div className="App">
            <h2>Save Your Verse Here:</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" value={testament} placeholder={"Type 'Old' or 'New'"} onChange={(e)=> setTestament(e.target.value)} className="form"></input>
                <br></br>
                <input type="text" value={reference} placeholder={"Example: John 3:16"} onChange={(e)=> setReference(e.target.value)} className="form"></input>
                <br></br>
                <input type="text" value={verse} placeholder={"Example: For God so loved the world... "} onChange={(e)=> setVerse(e.target.value)} className="form"></input>
                <br></br>
                <input type="text" value={url} placeholder={"Paste the URL here"} onChange={(e)=> setUrl(e.target.value)} className="form"></input>
                <br></br>
                <button>Add My Verse!</button>
            </form>
        </div>
    )
}

export default Form;