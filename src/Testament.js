import React, {useState, useEffect} from "react";
import {useOutletContext, useLocation} from "react-router-dom";
import VerseCard from "./VerseCard.js";

function Testament(){
    const {versesArray} = useOutletContext();
    const [testament, setTestament] = useState("old");
    const location = useLocation();

    useEffect(()=>{
        if(location.pathname === "/newtestament"){
            setTestament("new")
        }else{
            setTestament("old")
        }
    }, [location])

    const verses = versesArray.filter((verse) => verse.testament.toLowerCase() === testament);

    return (
        <div className="App">
            <main>
                <h2>Your Saved {testament === "old" ? "Old" : "New"} Testament Verses:</h2>
                {verses.map((verse)=>(
                    <VerseCard key={verse.id} verse={verse}/>
                ))}  
            </main>
        </div>
    )
}

export default Testament;