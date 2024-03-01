//displays old testament verses
import React, {useState, useEffect} from "react";
import NavBar from "./NavBar.js";
import VerseCard from "./VerseCard.js";

function OldTestament(){
    const [verses, setVerses] = useState([]);

    useEffect(()=>{
        fetch("http://localhost:3000/verses")
        .then(r=>r.json())
        .then(verses => {
            const oldT = verses.filter((verse)=>{
                return verse.testament.toLowerCase() === "old"
                })
            setVerses(oldT);
        })
      }, [])

    return (
        <div className="App">
            <header>
                <NavBar />  
            </header>
            <main>
                <h2> Your Saved Old Testament Verses: </h2>
                {verses.map((verse)=>(
                    
                    <VerseCard key={verse.reference} verse={verse} />
                ))}
            </main>
        </div>
    )
}

export default OldTestament;