//displays old testament verses
import NavBar from "./NavBar.js";
import VerseCard from "./VerseCard.js";

function OldTestament(){
    console.log("old testament")
    return (
        <div className="App">
            <header>
                <NavBar />  
            </header>
            <main>
                <VerseCard />
            </main>
        </div>
    )
}

export default OldTestament;