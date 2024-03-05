function VerseCard({verse}){
    return (
        <div>
            <h4>{verse.reference}</h4>
            <h5>{verse.verse}</h5>
            {verse.url === "" ? (<h6>No Citation</h6>): (<h6>Citation: {verse.url}</h6>)}
        </div>
    )
}

export default VerseCard;