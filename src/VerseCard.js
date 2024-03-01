//(Displays the verses inside the Old and New Testament components)
//  4. Create display info in VerseCard.js

function VerseCard({verse}){
    console.log("verse card")
    console.log(verse)

    return (
        <div>
            <h1>VerseCard renders here</h1>
            <h4>{verse.reference}</h4>
            <h5>{verse.verse}</h5>
            <h6>Citation: {verse.url}</h6>
        </div>
    )
}

export default VerseCard;