import {useOutletContext} from "react-router-dom";
import VerseCard from "./VerseCard.js";

function NewTestament(){
    const {versesArray} = useOutletContext();

    const verses = versesArray.filter((verse) => verse.testament.toLowerCase() === "new");

    return (
        <div className="App">
            <main>
                <h2> Your Saved New Testament Verses: </h2>
                {verses.map((verse)=>(
                    <VerseCard key={verse.id} verse={verse}/>
                ))}  
            </main>
        </div>
    )
}

export default NewTestament;