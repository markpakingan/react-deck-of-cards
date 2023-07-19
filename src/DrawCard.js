// DrawCard.js file

import React, {useState, useEffect} from "react";
import axios from "axios";

const DrawCard = ({deckID}) => {
    // const [cards, setCards] = useState([]);
    
    const fetchCard = () => {
        axios.get(`https://deckofcardsapi.com/api/deck/{deckID}/draw/?count=2`)
        .then(response => {console.log("Am I working?");})
        .catch(error => {
            console.error(error)
        })
    }
    
    return (
        <div>
            <button onClick={fetchCard}>Draw Card</button>
        </div>
    )
}

export default DrawCard;