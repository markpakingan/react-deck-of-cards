// DrawCard.js file

import React, {useState, useEffect} from "react";
import axios from "axios";

const DrawCard = ({deckID}) => {
    
   useEffect(()=> {
    axios.get(`https://deckofcardsapi.com/api/deck/${deckID}/draw/?count=2`).then(
        response => {
            console.log(response.data.deckID);
        }).catch(error => {
            console.error(error);
        });
   }, [deckID]);
 
    
    return (
        <div>
            <button >Draw Card</button>
        </div>
    )
}

export default DrawCard;