//displays new testament verses
import NavBar from "./NavBar.js";
import VerseCard from "./VerseCard.js";

function NewTestament(){
    console.log("new testament")
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

export default NewTestament;