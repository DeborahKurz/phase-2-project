//displays new testament verses
import React, {useState, useEffect} from "react";
import NavBar from "./NavBar.js";
import VerseCard from "./VerseCard.js";

function NewTestament(){
    const [verses, setVerses] = useState([]);

    useEffect(()=>{
        fetch("http://localhost:3000/verses")
        .then(r=>r.json())
        .then(verses => {
            const newT = verses.filter((verse)=>{
                return verse.testament.toLowerCase() === "new"
            })
            setVerses(newT)
        })
      }, [])

    return (
        <div className="App">
            <header>
                <NavBar />  
            </header>
            <main>
                <h2> Your Saved New Testament Verses: </h2>
                {verses.map((verse)=>(
                    <VerseCard key={verse.reference} verse={verse} />
                ))}
            </main>
        </div>
    )
}

export default NewTestament;