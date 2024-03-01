//displays new testament verses
import React, {useState, useEffect} from "react";
import NavBar from "./NavBar.js";
import VerseCard from "./VerseCard.js";

function NewTestament(){
    const [verses, setVerses] = useState([]);

    useEffect(()=>{
        fetch("http://localhost:3000/verses")
        .then(r=>r.json())
        .then(verses => console.log(verses))
      }, [])

      console.log("Verses: ", verses)

    return (
        <div className="App">
            <header>
                <NavBar />  
            </header>
            <main>
                {verses.map((verse)=>(
                    <VerseCard key={verses} verse={verse} />
                ))}
            </main>
        </div>
    )
}

export default NewTestament;