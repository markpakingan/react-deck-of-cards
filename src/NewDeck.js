// NewDeck.js file

import React, { useEffect, useState } from "react";
import axios from "axios";
import DrawCard from "./DrawCard";

const NewDeck = () => {
  const [deckID, setDeckID] = useState(null);

  const [ responseData, setResponseData] = useState(null);
  
  const handleClick = ()=> {
    axios.get("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1").then(
      response => {
        setResponseData(response.data);
        console.log(`returning ${response.data.deck_id} Deck ID`);
        return (response.data.deck_id);
      }
    ).catch(error => {
      console.error(error);
    })
  };

  
  return (
    <div>
        <button onClick={handleClick}>Start Game</button>
        {deckID && <DrawCard deckID={deckID} />}
    </div>
  );
};

export default NewDeck;
