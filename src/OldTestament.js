import React from "react";
import {Outlet, useOutletContext} from "react-router-dom";
import VerseCard from "./VerseCard.js";

function OldTestament(){
    const {addVerse, versesArray} = useOutletContext();

    const verses = versesArray.filter((verse)=>{
        return verse.testament.toLowerCase() === "old"
    });

    return (
        <div className="App">
            <main>
                <h2> Your Saved Old Testament Verses: </h2>
                {verses.map((verse)=>(
                    <VerseCard key={verse.id} verse={verse}/>
                ))}  
            </main>
            <Outlet />
        </div>
    )
}

export default OldTestament;